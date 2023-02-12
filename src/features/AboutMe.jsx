import data from '../locales/es/translation.json';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t } = useTranslation();
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      width='80vw'
      paddingBottom={10}
    >
      <Typography
        gutterBottom
        variant='h3'
        marginBottom={8}
        sx={{ textDecoration: 'underline' }}
      >
        {t('aboutMe.title')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'start' },
        }}
      >
        <List
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: 8,
          }}
        >
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'center',
              textDecoration: 'underline',
            }}
          >
            <Typography fontWeight='bold' gutterBottom>
              {t('aboutMe.list1.title')}
            </Typography>
          </ListItem>
          {Object.keys(data.aboutMe.list1.items).map((key, index) => {
            return (
              <ListItem key={key}>
                <Typography>{t(`aboutMe.list1.items.${key}`)}</Typography>
              </ListItem>
            );
          })}
        </List>
        <List
          sx={{
            width: { xs: '100%', md: '50%' },
          }}
        >
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'center',
              textDecoration: 'underline',
            }}
          >
            <Typography fontWeight='bold' gutterBottom>
              {t('aboutMe.list2.title')}
            </Typography>
          </ListItem>
          {Object.keys(data.aboutMe.list2.items).map((key, index) => {
            return (
              <ListItem key={key}>
                <Typography>{t(`aboutMe.list2.items.${key}`)}</Typography>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}

export default AboutMe;
