import { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <h3>ナラヤン　レストラ</h3>
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/restaurant_app_react_mui/home"}>
            ホーム
          </NavLink>
        </li>
        <li>
          <NavLink to={"/restaurant_app_react_mui/menu"}>メニュー</NavLink>
        </li>
        <li>
          <NavLink to={"/restaurant_app_react_mui/about"}>概要</NavLink>
        </li>
        <li>
          <NavLink to={"/restaurant_app_react_mui/contact"}>
            お問い合わせ
          </NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "gray" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <h3>ナラヤン　レストラ</h3>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink
                    activeClassName="active"
                    to={"/restaurant_app_react_mui/home"}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    ホーム
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/restaurant_app_react_mui/menu"}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    メニュー
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/restaurant_app_react_mui/about"}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    概要
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/restaurant_app_react_mui/contact"}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    お問い合わせ
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
