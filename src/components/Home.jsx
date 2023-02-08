import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

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
          desarrollador web / frontend / React
        </Typography>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
      >
        <Typography variant='h3' sx={{ textDecoration: 'underline' }}>
          Sobre mí
        </Typography>
        <Typography variant='body1'>
          Si has llegado hasta aquí, lo más probable es que lo que más te
          interesen sean mis logros y capacidades, ¡así que vayamos al grano!
        </Typography>
        <Box display='flex'>
          <List>
            <ListItem>
              <ListItemText>Mis datos y estudios oficiales:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Me llamo Francisco Sánchez, tengo 30 años.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Certificado full-stack developer freeCodeCamp.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Primer año del Grado en Física - UNED.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Bachillerato Científico-Tecnlógico.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Inglés nivel C1.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>¡También soy graduado en turismo!</ListItemText>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemText>Mis conocimientos:</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                HTML & CSS (diseño web responsivo, SASS, bootstrap...).
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                JavaScript (React, Redux, jQuery, D3.js...).
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>PostgreSQL, SQLite, MySQL, MongoDB.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Git & GitHub.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>UNIX Sripting & Bash.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Node.js (Express, Mongoose, Chai, Mocha, Socket, Helmet.js...).
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Typescript.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Python (Sockets, Numpy, Pandas, Matplotlib...).
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>PHP & Laravel.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Machine Learning (Tensorflow, Keras...).
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Nociones de hacking ético.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Otros:C, LaTeX, Jupyter Notebook, Google Colab, Maxima,
                Matlab...
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

export default Home;
