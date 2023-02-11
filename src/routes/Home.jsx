import AboutMe from '../features/AboutMe';
import Presentation from '../features/Presentation';
import { Box } from '@mui/material';

function Home() {
  return (
    <Box>
      <Presentation />
      <AboutMe />
    </Box>
  );
}

export default Home;
