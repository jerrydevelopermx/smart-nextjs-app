import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Button, TextField } from "@material-ui/core";
import appFunctions from "../../js/functions";

function ContactForm(props) {
  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: props.styles.background,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: props.styles.background,
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: props.styles.background,
        },
      },
    },
  })(TextField);

  let submitButton = {
    root: {
      "&:hover": {
        backgroundColor: appFunctions.getHoverColor(props.styles.background),
      },
      color: props.styles.color,
      backgroundColor: props.styles.background,
    },
  };
  const SubmitButton = withStyles(() => submitButton)(Button);

  return (
    <Container component="main" maxWidth="md">
      <div style={{ textAlign: "center" }}>
        <h2>Or you can drop us a message</h2>
      </div>

      <form noValidate>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="fullName"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="company"
              label="Company"
              name="company"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              multiline
              rows={4}
            />
          </Grid>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sm={6}
              md={12}
              style={{ padding: "30px", textAlign: "center" }}
            >
              <SubmitButton type="submit">Submit </SubmitButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default ContactForm;
