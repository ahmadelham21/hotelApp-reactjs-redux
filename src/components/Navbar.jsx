import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6">MyApp</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
