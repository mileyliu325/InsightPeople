import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
//import MainPage from "./MainPage";
import Button from "@material-ui/core/Button";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
//import withState from "recompose/withState";
//import toRenderProps from "recompose/toRenderProps";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme, withTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { NONAME } from "dns";

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
  buttonWrapper: { display: "inline-block" },
  navButtons: {
    display: "inline-block",
    marginLeft: 20
  },
  tabButton: {
    color: "white"
  },
  dropMenu: {
    color: "black"
  }
};

class NavBar extends Component {
  state = { auth: true, anchorElLv: null, anchorElAprv: null };

  handleLeaveMenuOpen = event => {
    this.setState({ anchorElLv: event.currentTarget });
  };
  handleApprovalMenuOpen = event => {
    this.setState({ anchorElAprv: event.currentTarget });
  };
  handleMenuClose = event => {
    this.setState({ anchorElLv: null, anchorElAprv: null });
  };
  render() {
    const { anchorElLv, anchorElAprv } = this.state;
    const { classes } = this.props;
    const isMenuOpenLv = Boolean(anchorElLv);
    const isMenuOpenAprv = Boolean(anchorElAprv);
    const renderLeaveMenu = (
      <React.Fragment>
        <Button
          className={classes.tabButton}
          label="Leave"
          aria-owns={isMenuOpenLv ? "render-props-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleLeaveMenuOpen}
        >
          Leave Tracker
        </Button>
        <Menu
          anchorEl={anchorElLv}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpenLv}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMenuClose}>
            <Link style={styles.dropMenu} to="/leave/leaveList" replace>
              Leave List
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleMenuClose}>
            <Link style={styles.dropMenu} to="/leave/addLeave" replace>
              Add Leave
            </Link>
          </MenuItem>
        </Menu>
      </React.Fragment>
    );

    const renderApprovalMenu = (
      <React.Fragment>
        <Button
          className={classes.tabButton}
          label="Approval"
          aria-owns={isMenuOpenAprv ? "render-props-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleApprovalMenuOpen}
        >
          Approvals
        </Button>
        <Menu
          anchorEl={anchorElAprv}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpenAprv}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.andleMenuClose}>
            <Link style={styles.dropMenu} to="/approval/myApprovals" replace>
              My Approvals
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleMenuClose}>
            <Link style={styles.dropMenu} to="/approval/myRequests" replace>
              My Requests
            </Link>
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
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

              {renderLeaveMenu}
              {renderApprovalMenu}

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
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NavBar);
