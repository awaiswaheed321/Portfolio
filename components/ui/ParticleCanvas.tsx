'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const PARTICLE_DENSITY = 12000;
const MAX_DIST         = 140;
const MOUSE_DIST       = 160;
const REPEL_DIST       = 90;
const REPEL_FORCE      = 0.6;
const MAX_SPEED        = 3.5;
const BASE_SPEED       = 0.35;
const DAMPING          = 0.96;

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isDark       = resolvedTheme !== 'light';
    const dotColor     = isDark ? '45,212,191' : '13,148,136';
    const dotOpacity   = isDark ? 0.55         : 0.45;
    const lineOpacity  = isDark ? 0.18         : 0.14;
    const mouseOpacity = isDark ? 0.35         : 0.25;

    let particles: Particle[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const spawn = () => {
      const count = Math.max(20, Math.floor((canvas.width * canvas.height) / PARTICLE_DENSITY));
      particles = Array.from({ length: count }, () => ({
        x:      Math.random() * canvas.width,
        y:      Math.random() * canvas.height,
        vx:     (Math.random() - 0.5) * BASE_SPEED * 2,
        vy:     (Math.random() - 0.5) * BASE_SPEED * 2,
        radius: Math.random() * 1.2 + 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // update + mouse repulsion
      for (const p of particles) {
        const dxm = p.x - mx;
        const dym = p.y - my;
        const dm  = Math.sqrt(dxm * dxm + dym * dym);
        if (dm < REPEL_DIST && dm > 0) {
          const force = (REPEL_DIST - dm) / REPEL_DIST * REPEL_FORCE;
          p.vx += (dxm / dm) * force;
          p.vy += (dym / dm) * force;
        }
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > MAX_SPEED) { p.vx = p.vx / speed * MAX_SPEED; p.vy = p.vy / speed * MAX_SPEED; }
        if (speed > BASE_SPEED * 1.5) { p.vx *= DAMPING; p.vy *= DAMPING; }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      // particle–particle connections
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            ctx.strokeStyle = `rgba(${dotColor},${lineOpacity * (1 - d / MAX_DIST)})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // mouse–particle connections
      if (mx > -1000) {
        ctx.lineWidth = 0.8;
        for (const p of particles) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < MOUSE_DIST) {
            ctx.strokeStyle = `rgba(${dotColor},${mouseOpacity * (1 - d / MOUSE_DIST)})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor},0.5)`;
        ctx.fill();
      }

      // dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor},${dotOpacity})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    spawn();
    rafRef.current = requestAnimationFrame(draw);

    // Track mouse on window so canvas can stay pointer-events-none
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current =
        x >= 0 && x <= rect.width && y >= 0 && y <= rect.height
          ? { x, y }
          : { x: -9999, y: -9999 };
    };

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(rafRef.current);
      else rafRef.current = requestAnimationFrame(draw);
    };

    const onResize = () => { resize(); spawn(); };
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
    />
  );
}
