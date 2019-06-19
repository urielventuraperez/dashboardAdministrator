import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import People from "@material-ui/icons/People";
import Flight from "@material-ui/icons/Flight";
import MyLocation from "@material-ui/icons/MyLocation";
import Landscape from "@material-ui/icons/Landscape";
import Layers from "@material-ui/icons/Layers";

const drawerWidth = 220;

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: 0
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));

export default function DrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <IconButton
          aria-label="Open drawer"
        >
          <Landscape />
        </IconButton>
        <Divider />
        <IconButton
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          style={{ justifyContent: "end" }}
          onClick={handleDrawerClose}
          className={clsx(classes.menuButton, {
            [classes.hide]: !open
          })}
        >
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
        <Divider />
        <List>
            <ListItem button>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText>
                Users
              </ListItemText>
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <Flight />
              </ListItemIcon>
              <ListItemText>
                Tours
              </ListItemText>
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <MyLocation />
              </ListItemIcon>
              <ListItemText>
                Bookings
              </ListItemText>
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <Layers />
              </ListItemIcon>
              <ListItemText>
                Packages
              </ListItemText>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
