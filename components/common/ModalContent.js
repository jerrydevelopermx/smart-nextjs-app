import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import ReactHtmlParser from "react-html-parser";
import appFunctions from "../../js/functions";
import components from "../../js/components";
import ContactForm from "./ContactForm";

function ModalContent(props) {
  console.log(props);

  const useStyles = makeStyles((theme) => ({
    modalPaper: {
      minHeight: "80vh",
      maxHeight: "80vh",
    },
    modal: {
      [theme.breakpoints.only("xs")]: {
        // 0-599
        top: "70px !important",
      },
      [theme.breakpoints.up("sm")]: {
        // 600-959
        //top: "70px !important",
      },
      [theme.breakpoints.only("md")]: {
        //960 - 1279
        top: "70px !important",
      },

      [theme.breakpoints.only("lg")]: {
        //1280 - 1919
        top: "80px !important",
        "&:after": {
          position: "absolute",
          content: `''`,
          left: getLeftPosition(props.status.sectionId),
          top: "12px",
          width: "0",
          height: "0",
          //borderTop: "10px solid black",
          borderBottom: "15px solid " + props.styles.header.background,
          borderRight: "15px solid transparent",
          borderLeft: "15px solid transparent",
        },
      },
      [theme.breakpoints.up("xl")]: {
        //>= 1920
        top: "80px !important",
        "&:after": {
          position: "absolute",
          content: `''`,
          left: getLeftPosition(props.status.sectionId),
          top: "53px",
          width: "0",
          height: "0",
          //borderTop: "10px solid black",
          borderBottom: "15px solid " + props.styles.header.background,
          borderRight: "15px solid transparent",
          borderLeft: "15px solid transparent",
        },
      },
      fontFamily: props.fontFamily,
    },
  }));
  const classes = useStyles();

  let styledCLoseButton = {
    root: {
      "&:hover": {
        backgroundColor: appFunctions.getHoverColor(
          props.styles.closebutton.root.background
        ),
      },
      color: props.styles.closebutton.root.color,
      backgroundColor: props.styles.closebutton.root.background,
      fontFamily: props.fontFamily,
    },
  };

  const CloseButton = withStyles((theme) => styledCLoseButton)(Button);

  function getLeftPosition(action) {
    let ourServices = ["mission", "who", "board", "features", "membership"];

    if (action === "contact") {
      return "33.5%";
    }
    if (action === "blog") {
      return "78%";
    }
    if (ourServices.indexOf(action) !== -1) {
      return "19%";
    }
  }
  return (
    <Dialog
      classes={{ paper: classes.modalPaper }}
      className={classes.modal}
      fullWidth={true}
      maxWidth="xl"
      open={props.open}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle
        disableTypography="true"
        style={{
          color: props.styles.header.color,
          background: props.styles.header.background,
          fontFamily: props.fontFamily,
        }}
        id="max-width-dialog-title"
      >
        {components.modalTitles[props.status.sectionId]}
        <IconButton
          aria-label="close"
          style={{
            position: "absolute",
            right: "8px",
            top: "8px",
            color: props.styles.header.color,
          }}
          onClick={props.onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent style={props.styles.body}>
        {props.content && ReactHtmlParser(props.content.content)}
        {props.status.sectionId === "contactUs" ? (
          <ContactForm
            styles={props.styles.header}
            pageId={props.status.storeId}
          />
        ) : null}
      </DialogContent>
      <DialogActions>
        <CloseButton
          variant="contained"
          color="primary"
          onClick={props.onClose}
        >
          Close
        </CloseButton>
      </DialogActions>
    </Dialog>
  );
}

export default ModalContent;
