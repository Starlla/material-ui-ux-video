import React from "react";
import { AppBar, Toolbar, Typography, IconButton} from "@material-ui/core";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import { makeStyles } from "@material-ui/styles";
import MenuIcon  from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  },
  navBarStyles:{
    background: '#AD8866',
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navBarStyles}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.typographyStyles}>
          Coffee Machine
        </Typography>
        <LocalCafeIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
