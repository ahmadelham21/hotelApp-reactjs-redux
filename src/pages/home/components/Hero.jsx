import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import FastBooking from "./FastBooking";
const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage:
      'url("https://assets.cntraveller.in/photos/642ebc7e780ba83c3d9f8771/3:2/w_3525,h_2350,c_limit/hyatt-regency-jaipur-lead.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Contoh untuk tinggi 100% viewport height
    width: "100%", // Contoh untuk lebar 100% dari elemen parent
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Warna dan transparansi overlay
  };
  return (
    <>
      <div style={backgroundImageStyle}>
        <div style={overlayStyle}>
          <Container maxWidth="lg">
            <Box
              sx={{
                paddingTop: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  maxWidth: "600px",
                }}
              >
                <Typography variant="h3" color="white">
                  In the great Hotel, You don't just stay, you Belong
                </Typography>
              </Box>
              <Typography
                color="white"
                sx={{ maxWidth: "550px", paddingTop: 2 }}
              >
                Find your perfect stay with ease explore a wide range of rooms,
                grab great deals, and book your ideal gateway today
              </Typography>
              <FastBooking />
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Hero;
