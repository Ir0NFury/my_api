import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box>
      <Navigation />
      <Box sx={{ padding: "20px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
