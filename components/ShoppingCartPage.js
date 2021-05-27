import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import appFunctions from "../js/functions";
import { useTranslation } from "next-i18next";

function ShoppingCartPage(props) {
  const { t } = useTranslation("common");
  let cartItems = [
    {
      image: "bag1.jpg",
      store: "Bags Store",
      description: "Bag 1 - SSED ",
      price: "$ 125.00",
    },
    {
      image: "bag3.jpg",
      store: "Bags Store",
      description: "Bag 3 - XAS/TUU ",
      price: "$ 105.00",
    },
    {
      image: "bag4.jpg",
      store: "Bags Store",
      description: "Bag 4 - SAUSCHAIUHO ",
      price: "$ 195.00",
    },
  ];
  let styledCLoseButton = {
    root: {
      "&:hover": {
        backgroundColor: appFunctions.getHoverColor(
          props.styles.closebutton.root.background
        ),
      },
      color: props.styles.closebutton.root.color,
      backgroundColor: props.styles.closebutton.root.background,
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
        {t("Shopping Cart")}
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
      <DialogContent style={props.styles.body}>
        {cartItems.map((item, index) => (
          <Grid
            key={"grid-" + index}
            container
            spacing={3}
            style={{ borderBottom: "1px solid #ccc " }}
          >
            <Grid item xs={4} sm={4} md={4} style={{ textAlign: "center" }}>
              <img
                src={`/imgs/${item.image}`}
                alt=""
                style={{ height: "110px" }}
              />
            </Grid>
            <Grid
              item
              style={{
                textAlign: "center",
                marginTop: "auto",
                marginBottom: "auto",
              }}
              xs={4}
              sm={4}
              md={4}
            >
              <div>{item.store}</div>
              <div>{item.description}</div>
              <div>
                <IconButton>
                  <RemoveCircleIcon />
                </IconButton>
                1
                <IconButton>
                  <AddCircleIcon />
                </IconButton>
              </div>
            </Grid>
            <Grid
              item
              style={{
                textAlign: "center",
                marginTop: "auto",
                marginBottom: "auto",
              }}
              xs={4}
              sm={4}
              md={4}
            >
              <div>
                {item.price}
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </div>
              <div></div>
            </Grid>
          </Grid>
        ))}
        <Grid container spacing={3}>
          <Grid item xs={4} sm={4} md={4}></Grid>
          <Grid item xs={4} sm={4} md={4} style={{ textAlign: "center" }}>
            Subtotal
          </Grid>
          <Grid item xs={4} sm={4} md={4} style={{ textAlign: "center" }}>
            $ 425.00
          </Grid>
        </Grid>

        <DialogActions>
          <CloseButton
            variant="contained"
            color="primary"
            onClick={props.onClose}
          >
            {t("Close")}
          </CloseButton>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default ShoppingCartPage;
