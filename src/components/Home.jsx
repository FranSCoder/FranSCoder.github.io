import { Box, Typography, List, ListItem } from '@mui/material';

function Home() {
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
        pb='5vh'
      >
        <Typography variant='h2'>¡Hola! Soy FranSCoder</Typography>
        <Typography variant='h4'>
          desarrollador web / frontend / react.js
        </Typography>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
      >
        <Typography
          gutterBottom
          variant='h3'
          marginBottom={5}
          sx={{ textDecoration: 'underline' }}
        >
          Sobre mí
        </Typography>
        <Box display='flex'>
          <List
            sx={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textDecoration: 'underline',
              }}
            >
              <Typography fontWeight='bold'>
                Mis datos y estudios oficiales:
              </Typography>
            </ListItem>
            <ListItem>
              <Typography primary='Me llamo Francisco Sánchez, tengo 30 años.' />
            </ListItem>
            <ListItem>
              <Typography>
                Certificado full-stack developer freeCodeCamp.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Primer año del Grado en Física - UNED.</Typography>
            </ListItem>
            <ListItem>
              <Typography>Bachillerato Científico-Tecnlógico.</Typography>
            </ListItem>
            <ListItem>
              <Typography>Inglés nivel C1.</Typography>
            </ListItem>
            <ListItem>
              <Typography>¡También soy graduado en turismo!</Typography>
            </ListItem>
          </List>
          <List
            sx={{
              width: '50%',
            }}
          >
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textDecoration: 'underline',
              }}
            >
              <Typography fontWeight='bold'>Mis conocimientos:</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                HTML & CSS (diseño web adaptativo, SASS, bootstrap...).
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                JavaScript (React, Redux, jQuery, D3.js...).
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>PostgreSQL, SQLite, MySQL, MongoDB.</Typography>
            </ListItem>
            <ListItem>
              <Typography>Git & GitHub.</Typography>
            </ListItem>
            <ListItem>
              <Typography>UNIX Sripting & Bash.</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Node.js (Express, Mongoose, Chai, Mocha, Socket, Helmet.js...).
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Typescript.</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Python (Sockets, Numpy, Pandas, Matplotlib...).
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>PHP & Laravel.</Typography>
            </ListItem>
            <ListItem>
              <Typography>Machine Learning (Tensorflow, Keras...).</Typography>
            </ListItem>
            <ListItem>
              <Typography>Nociones de hacking ético.</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Otros:C, LaTeX, Jupyter Notebook, Google Colab, Maxima,
                Matlab...
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

export default Home;
