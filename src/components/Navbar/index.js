import React from 'react';
import { Link as LinkR } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from '../../data/constants';
import { DarkMode, LightMode } from '@mui/icons-material'; // Import icons for theme toggle

// Add a styled component for the theme toggle button
const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.background_secondary};
  }
  
  @media screen and (max-width: 768px) {
    display: none; // Hide in mobile view since we'll add it to mobile menu
  }
`;
const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 648px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  text-decoration: none;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px; /* Corrected position */
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + '99'};
  transition: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => open ? '1' : '0'};
  z-index: ${({ open }) => open ? '1' : '0'};
`;

const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = ({ darkMode, toggleTheme }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <span>Sunny Mondal</span>
          </div>
        </NavLogo>
        <MobileIcon onClick={() => setOpen(!open)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>

          {/* Add the theme toggle button */}
          <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? <LightMode /> : <DarkMode />}
          </ThemeToggleButton>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks href='#about' onClick={() => setOpen(false)}>About</MobileMenuLinks>
          <MobileMenuLinks href='#skills' onClick={() => setOpen(false)}>Skills</MobileMenuLinks>
          <MobileMenuLinks href='#experience' onClick={() => setOpen(false)}>Experience</MobileMenuLinks>
          <MobileMenuLinks href='#projects' onClick={() => setOpen(false)}>Projects</MobileMenuLinks>
          <MobileMenuLinks href='#education' onClick={() => setOpen(false)}>Education</MobileMenuLinks>

          {/* Add theme toggle to mobile menu */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
            <span style={{ marginRight: '8px', color: theme.text_primary }}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
            <ThemeToggleButton
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{ display: 'flex' }} // Override the media query
            >
              {darkMode ? <LightMode /> : <DarkMode />}
            </ThemeToggleButton>
          </div>

          <GitHubButton
            style={{
              padding: '10px 16px',
              background: `${theme.primary}`,
              color: 'white',
              width: 'max-content',
              marginTop: '8px'
            }}
            href={Bio.github}
            target="_blank"
          >
            Github Profile
          </GitHubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
