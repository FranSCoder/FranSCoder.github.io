import Contact from '../features/Contact';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Presentation() {
  const { t, i18n } = useTranslation();
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      pb='5vh'
    >
      <Typography variant='h2'>{t('home.title')}</Typography>
      <Typography variant='h4' color='primary'>
        {t('home.subtitle')}
      </Typography>
      <Contact />
    </Box>
  );
}

export default Presentation;
