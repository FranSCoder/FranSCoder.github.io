import allProjects from '../data/allProjects';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

function ProjectList({ value }) {
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

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }}>
      {projects.map((project, index) => {
        console.log(project);
        return (
          <Grid item xs={4} md={6} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component='img'
                alt={project.title}
                height='140'
                image={project.image}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ProjectList;
