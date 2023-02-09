import allProjects from '../data/allProjects';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogContent';
import Image from 'mui-image';
import React from 'react';

function ProjectDialog({ onClose, projectId, open }) {
  const handleClose = () => {
    onClose(projectId);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const clickedProject = allProjects
    .map((type) => type.projects)
    .flat()
    .find((project) => project.id === projectId);

  if (clickedProject) {
    return (
      <Dialog onClose={handleClose} open={open} maxWidth='sm'>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '30px',
            paddingBottom: '0',
            textDecoration: 'underline',
          }}
        >
          {clickedProject.title}
        </DialogTitle>
        <DialogContent
          sx={{
            paddingBottom: '0',
          }}
        >
          <Image
            src={clickedProject.image}
            height='100%'
            width='100%'
            fit='cover'
            duration={2000}
            easing='cubic-bezier(0.7, 0, 0.6, 1)'
            showLoading={false}
            errorIcon={true}
            shift={null}
            distance='100px'
            shiftDuration={900}
            bgColor='inherit'
          />
          <Box paddingY={1}>
            <Typography variant='body1'>
              {clickedProject.description}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingY: '20px',
          }}
        >
          <Button variant='contained'>Ir al proyecto</Button>
          <Button variant='contained'>Ver código</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ProjectDialog;
