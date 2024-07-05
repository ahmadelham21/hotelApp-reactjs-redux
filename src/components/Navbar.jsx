import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { myRoute } from "../main";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const location = useLocation();

  const isHomePage = location.pathname === "/";

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
            <Typography variant="h6" color="inhereit" fontWeight={"bold"}>
              HotelApp
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 2, display: "flex", justifyContent: "center" }}>
            {myRoute.map((route) => {
              return (
                <Button
                  component={Link}
                  key={route.name}
                  to={route.path}
                  color="inherit"
                  sx={{ fontWeight: "bold" }}
                >
                  {route.name}
                </Button>
              );
            })}
          </Box>
          <Button variant="outlined" color="inherit">
            <Box sx={{ display: "flex" }}>
              Log in
              <ArrowOutwardIcon fontSize="small" />
            </Box>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
