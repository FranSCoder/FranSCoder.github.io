import data from '../locales/en/translation.json';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { fontWeight } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation();
  // prettier-ignore
  return (
    <footer>
      <Box className='row' sx={{ bgcolor: 'info.main' }}>
        <Typography variant='body1' sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          }
        }}>
          <Typography component='span' fontSize='14px'>{t('footerText.item1')}&nbsp;</Typography>
          <Link href='https://github.com/FranSCoder/FranSCoder.github.io' target='_blank' rel='noopener' sx={{textDecoration: 'none'}}>
            <Typography component='span' fontSize='14px' sx={{
              color: '#080066',
              transition: 'color 0.1s',
              ":hover": {
                color: 'ghostwhite'
              }
            }}>{t('footerText.item2')}</Typography>
          </Link>
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;
