import React from "react";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function ReviewPage(props) {
  let styledCLoseButton = {
    root: {
      /*  "&:hover": props.styles.closeButton.root.hover,
      color: props.styles.closeButton.root.color,
      backgroundColor: props.styles.closeButton.root.backgroundColor,*/
    },
  };

  const CloseButton = withStyles((theme) => styledCLoseButton)(Button);

  return (
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={props.open}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle style={props.styles.header} id="max-width-dialog-title">
        Review and Confirm
        <IconButton
          aria-label="close"
          style={{
            position: "absolute",
            right: "8px",
            top: "8px",
            color: "#fff",
          }}
          onClick={props.onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent style={props.styles.body}>REVIEW PRODUCTS</DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={props.onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ReviewPage;
