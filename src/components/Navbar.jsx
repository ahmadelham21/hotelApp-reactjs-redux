import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useState } from "react";
import { useEffect } from "react";
const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
      color={scrollPosition > 0 ? "secondary" : "transparent"}
      //   sx={{
      //     backgroundColor: scrollPosition > 0 ? "#F5F5F5" : "transparent",
      //     transition: "background-color 0.3s ease-in-out",
      //   }}
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
            <Button color="inherit" sx={{ fontWeight: "bold" }}>
              Home
            </Button>
            <Button color="inherit" sx={{ fontWeight: "bold" }}>
              Booking
            </Button>
            <Button color="inherit" sx={{ fontWeight: "bold" }}>
              Guest List
            </Button>
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
