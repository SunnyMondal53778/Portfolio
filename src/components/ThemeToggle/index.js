// src/components/ThemeToggle/index.js
import React from 'react';
import styled from 'styled-components';
import { DarkMode, LightMode } from '@mui/icons-material';

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 50%;
  
  &:hover {
    background-color: ${({ theme }) => theme.bgLight};
  }
  
  @media (max-width: 768px) {
    padding: 6px;
  }
`;

const ThemeToggle = ({ darkMode, toggleTheme }) => {
    return (
        <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? <LightMode /> : <DarkMode />}
        </ToggleButton>
    );
};

export default ThemeToggle;