import {
  Badge,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { rupiahConverter } from "../../../utils/rupiahConverter";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const HotelCard = ({ item, onSelectHotel }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardActionArea
          component={Link}
          to={`/booking/${item.id}`}
          onClick={onSelectHotel}
        >
          <CardMedia
            component="img"
            height="240"
            image={item.picture}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {item.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 2,
              }}
            >
              <LocationOnIcon
                fontSize="small"
                sx={{ marginRight: 1, color: "grey" }}
              />
              <Typography variant="body2" sx={{ color: "grey" }}>
                {item.location}
              </Typography>
            </Box>
            <Badge
              color="secondary"
              badgeContent={rupiahConverter(item.price)}
              sx={{ marginLeft: 6 }}
            ></Badge>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default HotelCard;
