import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavHashLink as NavLink } from "react-router-hash-link";
import appFunctions from "../../js/functions";
import { withStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";

function ResetPasswordForm(props) {
  const { t } = useTranslation("common");
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

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t("Reset Password")}
        </Typography>
        <form className={classes.form} noValidate>
          <CssTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={t("Email Address")}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <div>{t("ResetInstructions")}</div>
          <Grid
            container
            spacing={1}
            style={{
              margin: "20px 0",
              textAlign: "center",
            }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <SubmitButton>{t("Submit")}</SubmitButton>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Link
                href="/[id]/[section]"
                as={
                  "/" + (props.pageId == 0 ? "main" : props.pageId) + "/login"
                }
              >
                <a className={classes.links} variant="body2">
                  {t("Back to Login")}
                </a>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default ResetPasswordForm;
