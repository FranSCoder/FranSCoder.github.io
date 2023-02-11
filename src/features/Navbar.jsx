import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Navbar({ setContrastMode, contrastMode }) {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState('es');

  const changeLanguage = () => {
    if (currentLanguage === 'es') {
      i18n.changeLanguage('en');
      setCurrentLanguage('en');
    } else {
      i18n.changeLanguage('es');
      setCurrentLanguage('es');
    }
  };
  return (
    <AppBar position='fixed'>
      <Toolbar disableGutters style={{ justifyContent: 'center' }}>
        <Stack
          flexDirection='row'
          justifyContent='space-between'
          width={{ xs: '93vw', md: '835px' }}
        >
          <Link to='/'>
            <Button
              size='large'
              sx={{
                ':focus': {
                  outline: 'none',
                },
                fontSize: '1.2rem',
                color: 'white',
              }}
            >
              {t('navbar.item1')}
            </Button>
          </Link>
          <Link to='/projects' className='CustomLink'>
            <Button
              size='large'
              sx={{
                ':focus': {
                  outline: 'none',
                },
                fontSize: '1.2rem',
                color: 'white',
              }}
            >
              {t('navbar.item2')}
            </Button>
          </Link>
          <ButtonGroup>
            <Button
              sx={{
                color: 'white',
                ':focus': {
                  outline: 'none',
                },
              }}
              variant='text'
              onClick={() =>
                setContrastMode(contrastMode === 'light' ? 'dark' : 'light')
              }
            >
              {contrastMode === 'light' ? (
                <NightlightRoundIcon />
              ) : (
                <LightModeIcon />
              )}
            </Button>
            <Button
              sx={{
                color: 'white',
                ':focus': {
                  outline: 'none',
                },
              }}
              variant='text'
              onClick={changeLanguage}
            >
              {currentLanguage === 'en' ? 'es' : 'en'}
            </Button>
          </ButtonGroup>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
