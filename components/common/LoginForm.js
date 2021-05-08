import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavHashLink as NavLink } from "react-router-hash-link";
import appFunctions from "../../js/functions";
import { withStyles } from "@material-ui/core/styles";
import { useMutation } from "@apollo/client";
import mutations from "../../graphql/mutations";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function LoginForm(props) {
  let history = useHistory();
  let loginForm = {
    email: "",
    password: "",
  };
  const [loginError, setLoginError] = useState("");
  const [login, { loading, error }] = useMutation(mutations.USER_LOGIN);
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: props.styles.mobilenavbar.paper.background,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    links: {
      color: appFunctions.getHoverColor(
        props.styles.mobilenavbar.paper.background
      ),
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  }));
  const classes = useStyles();
  let styledButton = {
    root: {
      "&:hover": {
        backgroundColor: appFunctions.getHoverColor(
          props.styles.mobilenavbar.paper.background
        ),
      },
      color: props.styles.mobilenavbar.paper.color,
      backgroundColor: props.styles.topbar.background,
    },
  };

  const SubmitButton = withStyles((theme) => styledButton)(Button);

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: props.styles.mobilenavbar.paper.background,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: props.styles.mobilenavbar.paper.background,
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: props.styles.mobilenavbar.paper.background,
        },
      },
    },
  })(TextField);

  const CssCheckbox = withStyles({
    root: {
      color: props.styles.mobilenavbar.paper.background,
      "&$checked": {
        color: props.styles.mobilenavbar.paper.background,
      },
    },
    checked: {},
  })(Checkbox);

  function handleLoginResponse(response) {
    if (response.data.login.userName !== null) {
      localStorage.setItem("user", JSON.stringify(response.data.login));
      history.push((id !== undefined ? "/store/" + id : "") + "/admin");
    } else {
      setLoginError("Login failed, try again.");
    }
  }

  function loginSubmit() {
    login({
      variables: {
        username: loginForm.email.value,
        password: loginForm.password.value,
        store: id !== undefined ? parseInt(id) : 0,
      },
    }).then(
      (res) => handleLoginResponse(res),
      (err) => console.log(err)
    );
  }

  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate>
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            inputRef={(node) => {
              loginForm.email = node;
            }}
          />
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={(node) => {
              loginForm.password = node;
            }}
          />
          <FormControlLabel
            control={<CssCheckbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Grid
            container
            spacing={1}
            style={{
              margin: "20px 0",
              textAlign: "center",
            }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <SubmitButton onClick={loginSubmit}>Login</SubmitButton>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{
              margin: "20px 0",
              textAlign: "center",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              style={{ color: "red", fontWeight: "bolder" }}
            >
              {loginError}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              {/*<NavLink
                to={
                  props.pageId > 0
                    ? "/store/" + props.pageId + "/resetpassword"
                    : "/resetpassword"
                }
                className={classes.links}
                variant="body2"
              >
                Forgot password?
              </NavLink> */}
            </Grid>
            <Grid item>
              {/*<NavLink
                className={classes.links}
                to={
                  props.pageId > 0
                    ? "/store/" + props.pageId + "/register"
                    : "/register"
                }
                variant="body2"
              >
                {"Not a member? Join Now!"}
              </NavLink>*/}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default LoginForm;
