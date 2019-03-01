import React from "react";
import AppBar from "@material-ui/core/AppBar";
//import MainPage from "./MainPage";
import Button from "@material-ui/core/Button";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import withState from "recompose/withState";
import toRenderProps from "recompose/toRenderProps";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme, withTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

//overall theme color and etc.
const blueDream = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: "#2196f3"
    },
    //overrides goes into
    overrides: {
      Button: {
        raisedPrimary: {
          color: "white"
        }
      }
    }
  }
});

const styles = {
  navButtons: {
    marginLeft: 20
  },
  tabButton: {
    color: "white"
  },
  dropMenu: {
    color: "black"
  }
};
const WithState = toRenderProps(withState("anchorEl", "updateAnchorEl", null));

function Navbar(props) {
  const { classes } = props;
  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        const handleClose = () => {
          updateAnchorEl(null);
        };
        // need to fix cover of sub menu
        return (
          <MuiThemeProvider theme={blueDream}>
            <AppBar color="primary" position="static" title="Brand">
              <Toolbar>
                <h1>Insight People</h1>
                <div className={classes.navButtons}>
                  <Button label="Schedule">
                    <Link to="/schedule" replace>
                      Schedule
                    </Link>
                  </Button>
                  <Button
                    className={classes.tabButton}
                    label="Leave"
                    aria-owns={open ? "render-props-menu" : undefined}
                    aria-haspopup="true"
                    onClick={event => {
                      updateAnchorEl(event.currentTarget);
                    }}
                  >
                    Leave Tracker
                  </Button>
                  <Menu
                    id="render-props-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      {/* replace */}
                      <Link
                        style={styles.dropMenu}
                        to="/leave/leaveList"
                        replace
                      >
                        Leave List
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        style={styles.dropMenu}
                        to="/leave/addLeave"
                        replace
                      >
                        Add Leave
                      </Link>
                    </MenuItem>
                  </Menu>
                  <Button
                    className={classes.tabButton}
                    label="Approval"
                    aria-owns={open ? "render-props-menu" : undefined}
                    aria-haspopup="true"
                    onClick={event => {
                      updateAnchorEl(event.currentTarget);
                    }}
                  >
                    My Approvals
                  </Button>
                  <Menu
                    id="render-props-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      {/* replace */}
                      <Link
                        style={styles.dropMenu}
                        to="/approval/myApprovals"
                        replace
                      >
                        My Approvals
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        style={styles.dropMenu}
                        to="/approval/myRequests"
                        replace
                      >
                        My Requests
                      </Link>
                    </MenuItem>
                  </Menu>
                  <Button label="Settings">
                    <Link to="/settings" replace>
                      Settings
                    </Link>
                  </Button>
                </div>
              </Toolbar>
            </AppBar>
          </MuiThemeProvider>
        );
      }}
    </WithState>
  );
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Navbar);
