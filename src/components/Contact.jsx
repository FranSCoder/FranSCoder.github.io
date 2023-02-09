import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/PhoneEnabled";
import { Grid, Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function Contact() {
  return (
    <Box>
      <Typography gutterBottom variant="h3">
        Contacto
      </Typography>
      <Grid container spacing={{ xs: 3 }} columns={{ xs: 4 }}>
        <Grid item xs={2} display="flex" justifyContent="center" padding="0">
          <Link
            href='href="mailto:franscoder@gmail.com"'
            display="flex"
            alignItems="center"
            underline="none"
          >
            <AlternateEmailIcon />
            <Typography variant="h6">Email</Typography>
          </Link>
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="center">
          <Link
            href="https://wa.me/34663359457"
            display="flex"
            underline="none"
            alignItems="center"
          >
            <LocalPhoneIcon />
            <Typography variant="h6">Teléfono</Typography>
          </Link>
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="center">
          <Link
            href="https://www.linkedin.com/in/franscoder/"
            display="flex"
            underline="none"
            alignItems="center"
          >
            <LinkedInIcon />
            <Typography variant="h6">LinkedIn</Typography>
          </Link>
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="center">
          <Link
            href="https://www.linkedin.com/in/franscoder/"
            display="flex"
            underline="none"
            alignItems="center"
          >
            <GitHubIcon />
            <Typography variant="h6">GitHub</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
