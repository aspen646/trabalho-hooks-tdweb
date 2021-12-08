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
              Primary
            </Button>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
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
              Open success snackbar
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                This is a success message!
              </Alert>
            </Snackbar>
            <Alert severity="error">This is an error message!</Alert>
            <Alert severity="warning">This is a warning message!</Alert>
            <Alert severity="info">This is an information message!</Alert>
            <Alert severity="success">This is a success message!</Alert>
          </Stack>
        </Container>
        <br />
        <Typography variant="h4" component="h1" color="textSecondary">
          Music Player
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
