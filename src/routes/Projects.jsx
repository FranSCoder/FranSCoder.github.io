import FramerMotionList from '../features/FramerMotionList';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

function Proyects() {
  const [tab, setValue] = useState('1');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      width={{ xs: '93vw', md: '835px' }}
      minHeight='100vh'
      mt='50px'
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <TabContext value={tab}>
        <Box>
          <TabList aria-label='Tabs example' onChange={handleChange}>
            <Tab label='Todo' value='1'></Tab>
            <Tab label='React' value='2'></Tab>
            <Tab label='D3' value='3'></Tab>
            <Tab label='Vanilla' value='4'></Tab>
          </TabList>
        </Box>
        <TabPanel value='1'>
          <FramerMotionList tab={tab} />
        </TabPanel>
        <TabPanel value='2'>
          <FramerMotionList tab={tab} />
        </TabPanel>
        <TabPanel value='3'>
          <FramerMotionList tab={tab} />
        </TabPanel>
        <TabPanel value='4'>
          <FramerMotionList tab={tab} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Proyects;
