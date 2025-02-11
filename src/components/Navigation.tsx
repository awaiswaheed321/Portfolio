import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed" color="default" elevation={2}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Awais Waheed
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {sections.map((section) => (
              <Button key={section.id} href={`#${section.id}`} color="inherit">
                {section.label}
              </Button>
            ))}
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setIsMenuOpen(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <IconButton onClick={() => setIsMenuOpen(false)} sx={{ p: 2 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {sections.map((section) => (
              <ListItem
                component="button"
                key={section.id}
                onClick={() => setIsMenuOpen(false)}
              >
                <ListItemText primary={section.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navigation;
