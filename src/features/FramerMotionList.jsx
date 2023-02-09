import allProjects from '../data/allProjects';
import ProjectDialog from './ProjectDialog';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Image from 'mui-image';
import React, { useState } from 'react';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function FramerMotionList({ value }) {
  const projectsFull = allProjects.map((type) => type.projects).flat();
  const projectsFrontend = allProjects.filter(
    (type) => type.type === 'Frontend'
  )[0].projects;
  const projectsD3 = allProjects.filter((type) => type.type === 'D3')[0]
    .projects;
  const projectsVanilla = allProjects.filter(
    (type) => type.type === 'Vanilla'
  )[0].projects;

  const projects =
    value === '1'
      ? projectsFull
      : value === '2'
      ? projectsFrontend
      : value === '3'
      ? projectsD3
      : projectsVanilla;

  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState('');

  const handleClickOpen = (id) => {
    setOpen(true);
    setProjectId(id);
  };

  const handleClose = (value) => {
    setOpen(false);
    setProjectId('');
  };

  return (
    <>
      <motion.ul
        className='ProjectList'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {projects.map((project, index) => (
          <motion.li key={index} className='item' variants={item}>
            <Grid item xs={4} md={6} key={index}>
              <Button onClick={() => handleClickOpen(project.id)}>
                <Card sx={{ maxWidth: 345 }}>
                  <Typography variant='h7'>{project.title}</Typography>
                  <Image
                    src={project.image}
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
                </Card>
              </Button>
            </Grid>
          </motion.li>
        ))}
      </motion.ul>
      <ProjectDialog open={open} onClose={handleClose} projectId={projectId} />
    </>
  );
}

export default FramerMotionList;
