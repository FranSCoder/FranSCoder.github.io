import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const typoColor = grey[50];
const theme = createTheme({
  overrides: {
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "$labelcolor",
        },
      },
    },
  },
});

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <AppBar position="fixed">
          <Toolbar disableGutters style={{ justifyContent: "center" }}>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              width={{ xs: "93vw", md: "835px" }}
            >
              <IconButton
                variant="text"
                className="MyCustomButton"
                sx={{
                  ":focus": {
                    outline: "none",
                  },
                  color: typoColor,
                }}
              >
                <NightlightRoundIcon />
              </IconButton>
              <ButtonGroup
                variant="text"
                aria-label="text primary button group"
              >
                <Link to="/">
                  <Button
                    sx={{
                      ":focus": {
                        outline: "none",
                      },
                      color: typoColor,
                    }}
                  >
                    franscoder
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button
                    sx={{
                      ":focus": {
                        outline: "none",
                      },
                      color: typoColor,
                    }}
                  >
                    Mis Proyectos
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    sx={{
                      ":focus": {
                        outline: "none",
                      },
                      color: typoColor,
                    }}
                  >
                    Contacto
                  </Button>
                </Link>
              </ButtonGroup>
              <IconButton
                className="MyCustomButton"
                variant="text"
                sx={{
                  ":focus": {
                    outline: "none",
                  },
                  color: typoColor,
                }}
              >
                <Typography variant="subtitle2">ES</Typography>
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
        <Outlet />
      </>
    </ThemeProvider>
  );
}

export default Navbar;
