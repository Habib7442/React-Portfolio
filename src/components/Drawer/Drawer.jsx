import * as React from "react";
import "./Drawer.scss";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import RateReviewIcon from "@mui/icons-material/RateReview";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Link } from "react-router-dom";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    click: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-dark box"
    >
      <List className="list">
        <ListItem className="list-item">
          <ListItemIcon>
            <Link to="/">
              <HomeIcon className="list-icon mx-2" />

              <span style={{ color: "#8a8a8b" }}>Portfolio</span>
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Link to="/all-project">
              <DesignServicesIcon className="list-icon mx-2" />

              <span style={{ color: "#8a8a8b" }}>Projects</span>
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Link to="/contact-form">
              <ContactPhoneIcon className="list-icon mx-2" />

              <span style={{ color: "#8a8a8b" }}>Contact</span>
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Link to="/review-form">
              <RateReviewIcon className="list-icon mx-2" />

              <span style={{ color: "#8a8a8b" }}>Review</span>
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Link to="/certificate">
              <WorkspacePremiumIcon className="list-icon mx-2" />

              <span style={{ color: "#8a8a8b" }}>Achievements</span>
            </Link>
          </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {[""].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <LunchDiningIcon /> <strong>Click Me!</strong>
            {anchor}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
