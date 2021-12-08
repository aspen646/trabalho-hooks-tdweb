import React from "react";
import "./style.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import ResponsiveAppBar from "../Components/responsiveAppBar";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import MusicPlayerSlider from "../Components/musicPlayerSlider";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Examples() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <ResponsiveAppBar />
      <Box
        className="container"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Container>
          <Typography variant="h4" component="h1" color="textSecondary">
            Botões
          </Typography>
          <hr />
          <Stack spacing={2} direction="row">
            <Button
              onClick={() => {
                alert("You clicked me");
              }}
              variant="contained"
            >
              Primário
            </Button>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
              Sucesso
            </Button>
            <Button variant="outlined" color="error">
              Erro
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Excluir
            </Button>
            <IconButton color="secondary" aria-label="add an alarm">
              <AlarmIcon />
            </IconButton>
          </Stack>
          <Stack spacing={2}>
            <br />
            <Typography variant="h4" component="h1" color="textSecondary">
              Snackbar
            </Typography>
            <hr />
            <Button variant="outlined" onClick={handleClick}>
              Abrir snackbar
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Esta é uma mensagem de sucesso \0/
              </Alert>
            </Snackbar>
            <Alert severity="error">Esta é uma mensagem de erro!</Alert>
            <Alert severity="warning">Esta é uma mensagem de aviso!</Alert>
            <Alert severity="info">Esta é uma mensagem informativa!</Alert>
            <Alert severity="success">Esta é uma mensagem de sucesso!</Alert>
          </Stack>
        </Container>
        <br />
        <Typography variant="h4" component="h1" color="textSecondary">
          Player de Música
        </Typography>
        <hr />
        <Container>
          <MusicPlayerSlider />
        </Container>
      </Box>
    </>
  );
}

export default Examples;
