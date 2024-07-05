import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { rupiahConverter } from "../../../utils/rupiahConverter";

const HotelCard = ({ item }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardActionArea>
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
            <Typography variant="body2" color="text.secondary">
              {item.location}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              {rupiahConverter(item.price)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default HotelCard;
