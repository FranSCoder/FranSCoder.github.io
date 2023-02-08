import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import {
  AppBar,
  Stack,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
  Box,
  IconButton,
  CssBaseline,
} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar disableGutters style={{ justifyContent: "center" }}>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            width={{ xs: "93vw", md: "835px" }}
          >
            <IconButton
              variant="text"
              color="inherit"
              sx={{
                ":focus": {
                  outline: "none",
                },
              }}
            >
              <NightlightRoundIcon />
            </IconButton>
            <ButtonGroup
              variant="text"
              aria-label="text primary button group"
              color="inherit"
            >
              <Button
                sx={{
                  ":focus": {
                    outline: "none",
                  },
                }}
              >
                Sobre mí
              </Button>
              <Button
                sx={{
                  ":focus": {
                    outline: "none",
                  },
                }}
              >
                Mis Proyectos
              </Button>
              <Button
                sx={{
                  ":focus": {
                    outline: "none",
                  },
                }}
              >
                Contacto
              </Button>
            </ButtonGroup>
            <IconButton
              variant="text"
              color="inherit"
              sx={{
                ":focus": {
                  outline: "none",
                },
              }}
            >
              <Typography variant="subtitle2">ES</Typography>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default Navbar;
