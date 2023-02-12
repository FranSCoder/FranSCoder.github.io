import Footer from '../features/Footer';
import Navbar from '../features/Navbar';
import i18n from '../i18n';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [contrastMode, setContrastMode] = useState('dark');

  const theme = createTheme({
    palette: {
      mode: contrastMode,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='outer-container'>
          <Navbar
            contrastMode={contrastMode}
            setContrastMode={setContrastMode}
          />
          <div className='page'>
            <Outlet />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default Layout;
