import React from "react";
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

function RegisterForm(props) {
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
    <>
      <Container component="main" maxWidth="md">
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={3} md={5}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Last Name"
              name="LastName"
              autoFocus
              id="custom-css-outlined-input"
            />
          </Grid>
          <Grid item xs={6} sm={3} md={5}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="FirstName"
              label="First Name"
              id="FirstName"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="MI"
              label="M.I."
              id="MI"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Address1"
              label="Address 1"
              id="Address1"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Address1"
              label="Address 1"
              id="Address1"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={3} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="city"
              label="City"
              id="city"
            />
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="state"
              label="State"
              id="state"
            />
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="zipCode"
              label="Zip Code"
              id="zipCode"
            />
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="country"
              label="Country"
              id="country"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={2} md={2}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="landline"
              label="Landline"
              id="landline"
            />
          </Grid>
          <Grid item xs={6} sm={2} md={2}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="cellPhone"
              label="Cell Phone"
              id="cellPhone"
            />
          </Grid>
          <Grid item xs={6} sm={2} md={2}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="nationality"
              label="Nationality"
              id="nationality"
            />
          </Grid>
          <Grid item xs={6} sm={3} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="dateBirth"
              label="Date of Birth"
              id="city"
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="profession"
              label="Profession/Activity"
              id="profession"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={2} md={2}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="facebook"
              label="facebook"
              id="Facebook"
            />
          </Grid>
          <Grid item xs={6} sm={2} md={2}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="instagram"
              label="Instagram"
              id="instagram"
            />
          </Grid>
          <Grid item xs={6} sm={2} md={2}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="twitter"
              label="Twitter"
              id="twitter"
            />
          </Grid>
          <Grid item xs={6} sm={2} md={2}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="linkedIn"
              label="LinkedIn"
              id="linkedIn"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="pageUrl"
              label="Page URL"
              id="pageUrl"
            />
          </Grid>
        </Grid>
        <Typography component="h4" variant="h5">
          Access
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={4}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email address"
              id="email"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="retypePassword"
              label="Retype Password"
              id="retypePassword"
            />
          </Grid>
        </Grid>
        <Typography component="h4" variant="h5">
          Interests (Mark all you want)
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={2} md={2}>
            <FormControlLabel
              control={<CssCheckbox value="remeinmber" color="primary" />}
              label="Sports"
            />
          </Grid>
          <Grid item xs={6} sm={2} md={2}>
            <FormControlLabel
              control={<CssCheckbox value="remember" color="primary" />}
              label="Fashion"
            />
          </Grid>
          <Grid item xs={6} sm={2} md={2}>
            <FormControlLabel
              control={<CssCheckbox value="remeinmber" color="primary" />}
              label="Chothing"
            />
          </Grid>
          <Grid item xs={6} sm={2} md={2}>
            <FormControlLabel
              control={<CssCheckbox value="remember" color="primary" />}
              label="Technology"
            />
          </Grid>
          <Grid item xs={6} sm={2} md={2}>
            <FormControlLabel
              control={<CssCheckbox value="remember" color="primary" />}
              label="Kids"
            />
          </Grid>
          <Grid item xs={6} sm={2} md={2}>
            <FormControlLabel
              control={<CssCheckbox value="remember" color="primary" />}
              label="Jewelry"
            />
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
          <Grid item xs={12} sm={12} md={12}>
            <SubmitButton>Submit</SubmitButton>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default RegisterForm;
