import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import { myRoute } from "../main";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    dispatch(logout());
    navigate("/");
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      enableColorOnDark="true"
      elevation={0}
      color={scrollPosition > 0 || !isHomePage ? "secondary" : "transparent"}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ color: "white" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ApartmentIcon className="main-color" />
            <Typography variant="h6" color="inherit" fontWeight="bold">
              HotelApp
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 2, display: "flex", justifyContent: "center" }}>
            {myRoute.map((route) => (
              <Button
                component={Link}
                key={route.name}
                to={route.path}
                color="inherit"
                sx={{ fontWeight: "bold" }}
              >
                {route.name}
              </Button>
            ))}
          </Box>

          {isLoggedIn ? (
            <Button variant="outlined" color="inherit" onClick={handleLogout}>
              <Box sx={{ display: "flex" }}>
                Logout
                <ArrowOutwardIcon fontSize="small" />
              </Box>
            </Button>
          ) : (
            <Button component={Link} to="/" variant="outlined" color="inherit">
              <Box sx={{ display: "flex" }}>
                Log in
                <ArrowOutwardIcon fontSize="small" />
              </Box>
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
