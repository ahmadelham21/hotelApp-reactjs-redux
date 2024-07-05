import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6">MyApp</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
