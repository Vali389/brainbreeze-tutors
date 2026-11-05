import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Slide,
  Fade,
  Grow,
  styled,
  keyframes
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import logo from '../assets/logo.jpg';

// Create custom animations with educational theme
const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(56, 142, 60, 0.4);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 12px rgba(56, 142, 60, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(56, 142, 60, 0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const glow = keyframes`
  0% {
    filter: drop-shadow(0 0 2px rgba(25, 118, 210, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 8px rgba(25, 118, 210, 0.8));
  }
  100% {
    filter: drop-shadow(0 0 2px rgba(25, 118, 210, 0.5));
  }
`;

const sparkle = keyframes`
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: scale(0) rotate(360deg);
  }
`;

// Styled components for animations with educational theme
const AnimatedButton = styled(Button)(({ theme }) => ({
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    animation: `${float} 1.5s ease-in-out infinite`,
    transform: 'translateY(-3px)',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '5px',
      height: '5px',
      background: '#fff',
      borderRadius: '50%',
      animation: `${sparkle} 1s ease-in-out infinite`,
      animationDelay: '0.2s'
    }
  }
}));

const AnimatedLogo = styled(Box)(({ theme }) => ({
  transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
  animation: `${glow} 3s ease-in-out infinite`,
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
    animation: `${glow} 1.5s ease-in-out infinite, ${float} 2s ease-in-out infinite`
  }
}));

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const location = useLocation();
  const headerRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Navigation links for Brain Breeze Tutors
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'About Us', path: '/about' },
    // { title: 'Tutors', path: '/tutors' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Contact', path: '/contact' },
  ];

  // Educational theme color gradients
  const activeGradient = 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'; // Yellow to Red
  const hoverGradient = 'linear-gradient(135deg, #fbbf24 0%, #f87171 100%)'; // Light Yellow to Light Red
  
  const glassEffect = {
    background: scrolled 
      ? 'rgba(79, 70, 229, 0.8)' 
      : 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 4px 25px rgba(25, 118, 210, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };
  
  // Active navigation item styles with educational animation
  const activeStyle = {
    background: activeGradient,
    color: '#fff',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(239, 68, 68, 0.4)',
    px: 2,
    py: 1,
    transform: 'translateY(-2px)',
    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    position: 'relative',
    '&::before': {
      content: '"🎓"',
      position: 'absolute',
      top: '-8px',
      right: '-8px',
      fontSize: '12px',
      animation: `${sparkle} 2s ease-in-out infinite`
    }
  };

  return (
    <>
      <AppBar 
        position="sticky" 
        ref={headerRef}
        sx={{ 
          color: scrolled ? '#fff' : '#2c3e50',
          boxShadow: 'none',
          background: scrolled 
            ? 'linear-gradient(to right, #4f46e5, #7c3aed)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          py: scrolled ? 0.5 : 1,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1280px', mx: 'auto', width: '100%' }}>
          <AnimatedLogo>
            <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Brain Breeze Logo" style={{ height: 72, width: 72, objectFit: 'cover', borderRadius: '50%', marginRight: 16 }} />
              <Box sx={{ color: scrolled ? '#fff' : 'inherit', textDecoration: 'none' }}>
                <span style={{ fontSize: '1.7rem', fontWeight: 'bold', color: scrolled ? '#fff' : '#1746A2' }}>Brain Breeze Tutors</span>
              </Box>
            </RouterLink>
          </AnimatedLogo>

          {isMdUp ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navLinks.map((link) => (
                <RouterLink key={link.title} to={link.path} style={{ textDecoration: 'none' }}>
                  <Button 
                    sx={{
                      fontWeight: 600,
                      px: 2,
                      py: 1,
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      background: location.pathname === link.path
                        ? 'linear-gradient(to right, #2563eb, #a21caf)'
                        : 'transparent',
                      ...(location.pathname === link.path
                        ? {
                            color: '#fff',
                            backgroundImage: 'linear-gradient(to right, #2563eb, #a21caf)',
                          }
                        : scrolled
                        ? {
                            color: '#fff',
                          }
                        : {
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            color: undefined,
                            backgroundImage: 'linear-gradient(to right, #6366f1, #2563eb)',
                          }),
                      ...(location.pathname === link.path ? activeStyle : {}),
                      '&:hover': {
                        background: 'linear-gradient(to right, #2563eb, #a21caf)',
                        backgroundImage: 'linear-gradient(to right, #2563eb, #a21caf)',
                        color: '#fff',
                        WebkitTextFillColor: 'white',
                        transform: 'translateY(-2px)',
                      }
                    }}
                  >
                    {link.title}
                  </Button>
                </RouterLink>
              ))}
              <RouterLink to="/register">
                <AnimatedButton 
                  variant="contained" 
                  sx={{ 
                    ml: 2, 
                    borderRadius: '50px', 
                    px: 4, 
                    py: 1.5,
                    background: 'linear-gradient(to right, #f59e0b, #ef4444)',
                    '&:hover': {
                      background: 'linear-gradient(to right, #fbbf24, #f87171)',
                    }
                  }}
                >
                  Enroll Now
                </AnimatedButton>
              </RouterLink>
            </Box>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ color: scrolled ? '#fff' : '#4f46e5' }}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: '250px',
            background: 'linear-gradient(to bottom, #4f46e5, #7c3aed)',
            color: '#fff',
          }
        }}
      >
        <Box
          sx={{
            p: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          role="presentation"
        >
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: '#fff' }}>
                <SchoolIcon sx={{ fontSize: 32, mr: 1 }} />
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Brain Breeze Tutors</span>
              </RouterLink>
              <IconButton onClick={toggleDrawer} sx={{ color: '#fff' }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {navLinks.map((link) => (
                <ListItem key={link.title} disablePadding>
                  <ListItemButton component={RouterLink} to={link.path} sx={{ 
                    borderRadius: '8px', 
                    mb: 1,
                    background: location.pathname === link.path
                      ? 'linear-gradient(to right, #2563eb, #a21caf)'
                      : 'transparent',
                    '& .MuiListItemText-primary': {
                      color: '#fff',
                      fontWeight: 600,
                    },
                    color: '#fff',
                    '&:hover': {
                      background: 'linear-gradient(to right, #2563eb, #a21caf)',
                      color: '#fff',
                      '& .MuiListItemText-primary': {
                        background: 'none',
                        WebkitTextFillColor: 'white',
                      }
                    }
                  }}>
                    <ListItemText primary={link.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <RouterLink to="/register">
            <Button 
              variant="contained" 
              fullWidth
              sx={{
                background: 'linear-gradient(to right, #f59e0b, #ef4444)',
                borderRadius: '50px',
                py: 1.5,
                '&:hover': {
                  background: 'linear-gradient(to right, #fbbf24, #f87171)',
                }
              }}
            >
              Enroll Now
            </Button>
          </RouterLink>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;