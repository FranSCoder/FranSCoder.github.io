import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

function Contact() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-evenly'
      alignItems='center'
      paddingY={6}
    >
      <Grid container spacing={{ xs: 2, md: 6 }} columns={3}>
        <Grid item display='flex' justifyContent='center'>
          <Link
            href='mailto:franscoder@gmail.com'
            display='flex'
            alignItems='center'
            underline='none'
            target='_blank'
            rel='noopener'
          >
            <IconButton
              sx={{
                ':focus': {
                  outline: 'none',
                },
              }}
            >
              <AlternateEmailIcon fontSize='large' color='primary' />
            </IconButton>
          </Link>
        </Grid>
        <Grid item display='flex' justifyContent='center'>
          <Link
            href='https://www.linkedin.com/in/franscoder/'
            display='flex'
            underline='none'
            alignItems='center'
            target='_blank'
            rel='noopener'
          >
            <IconButton
              sx={{
                ':focus': {
                  outline: 'none',
                },
              }}
            >
              <LinkedInIcon fontSize='large' color='primary' />
            </IconButton>
          </Link>
        </Grid>
        <Grid item display='flex' justifyContent='center'>
          <Link
            href='https://www.linkedin.com/in/franscoder/'
            display='flex'
            underline='none'
            alignItems='center'
            target='_blank'
            rel='noopener'
          >
            <IconButton
              sx={{
                ':focus': {
                  outline: 'none',
                },
              }}
            >
              <GitHubIcon fontSize='large' color='primary' />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
