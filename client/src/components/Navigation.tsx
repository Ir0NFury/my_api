import { FC } from "react";
import { Link } from "react-router-dom";
import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@mui/material";

const Navigation: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          My app
        </Typography>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
          }}
        >
          <li style={{ marginRight: 10 }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ marginRight: 10 }}>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
