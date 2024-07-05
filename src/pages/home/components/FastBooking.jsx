import { Box, Button, Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import CardDivider from "./CardDivider";
const FastBooking = () => {
  return (
    <Card className="mt-3">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          //   padding: 1,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 2,
            alignItems: "start",
            marginRight: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              padding: 2,
              alignItems: "start",
            }}
          >
            <LocationOnIcon sx={{ marginRight: 1 }} />
            <Typography variant="body1" color="initial">
              Region
            </Typography>
          </Box>
        </Box>
        <CardDivider />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 2,
            alignItems: "start",
            marginRight: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              padding: 2,
              alignItems: "start",
            }}
          >
            <CalendarMonthIcon sx={{ marginRight: 1 }} />
            <Typography variant="body1" color="initial">
              27 May - 28 May
            </Typography>
          </Box>
        </Box>
        <CardDivider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 2,
            alignItems: "start",
            marginRight: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              padding: 2,
              alignItems: "start",
            }}
          >
            <PersonIcon sx={{ marginRight: 1 }} />
            <Typography variant="body1" color="initial">
              2 Guest
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default FastBooking;
