import data from '../locales/es/translation.json';
import ProjectDialog from './ProjectDialog';
import { CardHeader } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Image from 'mui-image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const projectsFull = Object.values(data.projects);
  const projectsReact = Object.values(data.projects).filter(
    (project) => project.type === 'React'
  );
  const projectsD3 = Object.values(data.projects).filter(
    (project) => project.type === 'D3'
  );
  const projectsVanilla = Object.values(data.projects).filter(
    (project) => project.type === 'Vanilla'
  );

  const projects =
    value === '1'
      ? projectsFull
      : value === '2'
      ? projectsReact
      : value === '3'
      ? projectsD3
      : projectsVanilla;

  const { t, i18n } = useTranslation();

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
            <Grid item key={index}>
              <Button onClick={() => handleClickOpen(project.id)}>
                <Card sx={{ maxWidth: 345 }} elevation={16}>
                  <CardHeader
                    title={t(`projects.${Number(project.id)}.title`)}
                    titleTypographyProps={{ variant: 'subtitle2' }}
                  ></CardHeader>
                  <Image
                    src={project.image}
                    height='100%'
                    width='100%'
                    fit='cover'
                    duration={500}
                    easing='ease-in'
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
