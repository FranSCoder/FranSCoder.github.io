import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        pb="5vh"
      >
        <Typography variant="h2">¡Hola! Soy Fran</Typography>
        <Typography variant="h4">
          desarrollador web / frontend / React
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      ></Box>
    </>
  );
}

export default Home;
