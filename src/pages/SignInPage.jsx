import React from "react";
import { link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../actions/userActions";

import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { timingSafeEqual } from "crypto";

const styles = themeSignIn => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: themeSignIn.spacing.unit * 3,
    marginRight: themeSignIn.spacing.unit * 3,
    [themeSignIn.breakpoints.up(400 + themeSignIn.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: themeSignIn.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${themeSignIn.spacing.unit * 2}px ${themeSignIn.spacing.unit *
      3}px ${themeSignIn.spacing.unit * 3}px`
  },
  avatar: {
    margin: themeSignIn.spacing.unit,
    backgroundColor: themeSignIn.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: themeSignIn.spacing.unit
  },
  submit: {
    marginTop: themeSignIn.spacing.unit * 3
  }
});

class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    //reset login status
    this.props.dispatch(userActions.signout());

    this.state = {
      email: "",
      password: "",
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    //get email and password from state(set by handelChange) and dispatch it
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  }

  render() {
    const { SigningIn, classes } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={this.handleChange}
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                value={password}
                onChange={this.handleChange}
                autoComplete="current-password"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>

            <Button
              Link
              to="/signup"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

/* function SignIn(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </main>
  );
} */

function mapStateToProps(state) {
  const { SigningIn } = state.authentication;
  return {
    SigningIn
  };
}

const connectedSignInPage = connect(mapStateToProps)(SignInPage);
connectedSignInPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connectedSignInPage);
