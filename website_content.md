# Website Content — Awais Waheed
> Drop this file into the portfolio repo.
> Pull from here when updating site copy. Update this file whenever master_profile.md changes.
> Last updated: Mar 2026

---

## TAGLINE (header / hero one-liner)

Backend Engineer · Distributed Systems · AWS · 1M+ msgs/day

---

## BIO

### Short (hero section / about card)

Senior Backend Engineer specializing in high-throughput distributed systems and event-driven architectures. 6+ years building production systems in Java at scale — currently owning a streaming pipeline processing 1M+ messages/day at 7-Eleven's delivery platform. Deep experience with AWS, reactive programming, microservices, and cloud migrations. Previously at Walmart (5,000+ stores) via Confiz.

### Long (full About page)

Senior Backend Engineer with 6+ years building high-throughput distributed systems, event-driven architectures, and production-grade microservices.

Currently contracted at 7-Eleven's Delivery as a Service (DaaS) platform — owning a mission-critical streaming service that processes 1,000,000+ messages/day on a single instance, integrating delivery partners DoorDash, UberEats, and Skipcart into a unified pipeline.

My work centers on reactive, non-blocking Java systems built for scale. I've led a full Azure-to-AWS cloud migration, consolidated multi-service architectures, and solo-diagnosed a production outage that had taken down all 50 database connections for 3 days undetected — tracing it from connection timeouts through DLQ spikes to legacy reactive chain issues, then eliminating it permanently while doubling throughput.

Before 7-Eleven, I spent nearly 2 years at Confiz as a Senior Software Engineer embedded with Walmart — building distributed tracking and pharmacy systems deployed across 5,000+ U.S. stores, managing Kubernetes/Jenkins CI/CD pipelines, and integrating Kafka for real-time messaging at scale.

Based in Irving, TX. Open to relocation.

---

## EXPERIENCE

### Resolve Tech Solutions — Client: 7-Eleven
**Senior Backend Developer** | Jul 2025 – Present | Irving, TX

Contracted into 7-Eleven's Delivery as a Service (DaaS) platform — integrating DoorDash, UberEats, and Skipcart into a unified delivery layer.

- Scaled reactive event-streaming pipeline from 400K to 1M messages/day on a single instance by restructuring transaction boundaries, scoping writes, and enforcing query timeouts
- Diagnosed and resolved a 3-day undetected production outage (50 DB connections exhausted): traced connection timeouts through DLQ spikes to legacy reactive chain queries — pool exhaustion eliminated, throughput doubled
- Engineered ingress layer with manual Kinesis shard acknowledgment to enforce strict message ordering without sacrificing throughput
- Designed DLQ failure pipeline with retry scheduling and MongoDB persistence — zero silent data loss across all failure scenarios
- Migrated Streaming Service infrastructure from Azure (Event Hub) to AWS (Kinesis, Secrets Manager, pod-based IAM roles)
- Resolved 8–10 integration bugs across 3PL and Skipcart services where malformed payload formatting caused downstream systems to silently fail — restoring correct functional behavior across delivery workflows
- Configured MCP servers for GitHub, Jira, and Confluence and used GitHub Copilot Workspace to scaffold automation testing workflows

---

### Confiz Ltd. — Client: Walmart
**Senior Software Engineer & Consultant** | Oct 2022 – Jul 2024 | Islamabad, Pakistan

- Contributed to microservices architecture design decoupling workorders, items & products, tracking, and third-party integrations across Walmart's store network
- Built a software tracking system in Java, Spring Boot, Hibernate, and MySQL monitoring update status across 5,000+ U.S. Walmart stores
- Collaborated with U.S. teams to migrate pharmacy software to a cloud solution using Spring Boot, React.js, and AWS CI/CD
- Managed Kubernetes and Jenkins CI/CD pipelines ensuring high availability across 5,000+ stores
- Integrated Apache Kafka for real-time event messaging across distributed store systems
- Implemented Splunk dashboards and alerting for operational monitoring
- Improved release quality using SonarQube, Snyk, JUnit, and Mockito

---

### Funavry Technologies
**Software Developer** | Apr 2021 – Sep 2022 | Islamabad, Pakistan

- Built RESTful APIs in Java, Spring Boot, and Hibernate integrating DTAC Thailand's ERP with Coupa — reduced integration effort by 40%
- Designed RESTful API architecture for a social media job portal using Nest.js and TypeScript — cut delivery time by 45%
- Led backend team building portal using Spring Boot and React.js; implemented Stripe payment with escrow
- Maintained 99.99% uptime through on-call hyper-care support within SLAs
- Streamlined Jenkins CI/CD pipelines to reduce deployment failures

---

### Care Pvt. Ltd.
**Design Engineer** | Sep 2019 – Mar 2021 | Islamabad, Pakistan

- Built custom Joget Workflow plugins in Java and Spring Boot for a client in the aviation defense sector — delivered GANTT chart system tracking full operational workflow lifecycle, plus data list views and graph visualizations
- Extended Joget's GRID element with row-level action handling using Java, enabling direct in-grid data manipulation
- Built biometric authentication system with end-to-end encryption: C++ DLLs integrated into Java via JNI, SourceAFIS fingerprint matching, device-agnostic deployment
- Developed Windows background authentication service using Spring Boot with Windows Biometric Framework, packaged with Advanced Installer

---

## SKILLS

**Languages:** Java, TypeScript, C++, Python, C#/.NET

**Frameworks:** Spring Boot, Hibernate, Reactor, Nest.js, React.js, LangChain

**Messaging & Streaming:** AWS Kinesis, AWS SQS, Apache Kafka, Azure Event Hub, DLQ patterns

**Databases:** MongoDB, MySQL, PostgreSQL, Amazon RDS

**Cloud & Infra:** AWS (Kinesis, SQS, Secrets Manager, IAM, S3, CI/CD), Azure, Kubernetes, Docker, Jenkins

**Observability:** New Relic, Splunk, SonarQube

**Patterns:** Microservices, event-driven architecture, reactive pipelines, distributed systems, OMS/state machines, idempotency

**AI Tooling:** MCP (Model Context Protocol), GitHub Copilot Workspace, Claude Code, LangChain, RAG

**Testing & Tools:** JUnit, Mockito, Postman, Maven, Git, Liquibase, JIRA

---

## PROJECTS

### Streaming Service — 7-Eleven DaaS
Event-driven delivery pipeline consuming real-time order events from DoorDash, UberEats, and Skipcart. Reactive, non-blocking Java architecture processing 1M+ messages/day on a single instance. Includes DLQ failure handling, idempotent processing, manual Kinesis shard acknowledgment for ordering, and configurable retry scheduling.
**Stack:** Java, AWS Kinesis, AWS SQS, MongoDB, New Relic, AWS Secrets Manager

### GPH Carbon — Walmart Pharmacy
Cloud migration of Walmart's HQ pharmacy software. Managed workorder approvals and store update packages across 5,000+ U.S. locations.
**Stack:** Java, Spring Boot, React.js, AWS CI/CD, RESTful APIs, Kubernetes, Jenkins

### MarketPlace Pro
Full-stack e-commerce platform with user roles, product management, order tracking, JWT auth, payment integration, and S3 file uploads. Deployed on AWS.
**Stack:** Java, Spring Boot, React, PostgreSQL, AWS

### Event Management System
Full-stack event platform with ticket booking, payment integration, JMS messaging, and pessimistic locking. Deployed on AWS.
**Stack:** Java, Spring Boot, React, PostgreSQL, MySQL, AWS

### Expense Tracker
Full-stack expense tracker with add/edit/delete/filter functionality and clean REST APIs.
**Stack:** Spring Boot, React, PostgreSQL

### Dictionary App
Word search and definitions app with top-searched word tracking, optimized for query performance.
**Stack:** Spring Boot, React, SQLite

---

## EDUCATION

**Master of Science, Computer Science**
Maharishi International University — Fairfield, IA | Expected Apr 2027

**Bachelor of Science, Computer Sciences**
SEECS, NUST — Islamabad, Pakistan | May 2019
