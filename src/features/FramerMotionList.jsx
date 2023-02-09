import allProjects from "../data/allProjects";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import React from "react";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
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
    (type) => type.type === "Frontend"
  )[0].projects;
  const projectsD3 = allProjects.filter((type) => type.type === "D3")[0]
    .projects;
  const projectsVanilla = allProjects.filter(
    (type) => type.type === "Vanilla"
  )[0].projects;

  const projects =
    value === "1"
      ? projectsFull
      : value === "2"
      ? projectsFrontend
      : value === "3"
      ? projectsD3
      : projectsVanilla;

  return (
    <motion.ul
      className="ProjectList"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <motion.li key={index} className="item" variants={item}>
          <Grid item xs={4} md={6} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <Typography variant="h6">{project.title}</Typography>
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image={project.image}
              />
              <CardContent></CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default FramerMotionList;
