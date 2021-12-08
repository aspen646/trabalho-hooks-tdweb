import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { MuiThemeContext, muiThemes } from "../context/muiTheme";
import Switch from "react-switch";

import { useNavigate } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];


const ResponsiveAppBar = () => {
  const { muiTheme, setMuiTheme } = React.useContext(MuiThemeContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate();

  function toggleTheme() {
    setMuiTheme(muiTheme === muiThemes.dark ? muiThemes.light : muiThemes.dark);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor: 'background.paper', color: 'text.primary',}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            TDW
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/");
                  }}
                  sx={{ my: 2, color: "text.primary", display: "block" }}
                >
                  Tela principal
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/natal");
                  }}
                  sx={{ my: 2, color: "text.primary", display: "block" }}
                >
                  Natal
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/exemplos");
                  }}
                  sx={{ my: 2, color: "text.primary", display: "block" }}
                >
                  Testes
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            TDW
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/");
              }}
              sx={{ my: 2, color: "text.primary", display: "block" }}
            >
              Tela principal
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/natal");
              }}
              sx={{ my: 2, color: "text.primary", display: "block" }}
            >
              Natal
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/exemplos");
              }}
              sx={{ my: 2, color: "text.primary", display: "block" }}
            >
              Testes
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Switch
              onChange={toggleTheme}
              checked={muiTheme === muiThemes.dark}
              uncheckedIcon={false}
              checkedIcon={false}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
