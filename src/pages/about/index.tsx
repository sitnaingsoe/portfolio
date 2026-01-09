import {Box} from "@mui/material";
import About from "../components/About";
import DrawerAppBar from "../components/AppBar";
export default function FoodiePOS() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        overflowY: "auto",
        flexDirection: "column",
      }}>
        <DrawerAppBar/>
      <About />
    </Box>
  );
}