import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useQuery, gql } from "@apollo/client";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import Slider from "./Slider";
import queries from "../../graphql/queries.js";

function ProductDetails(props) {
  let styledCloseButton = {
    root: {
      "&:hover": props.styles.closebutton.root.hover,
      color: props.styles.closebutton.root.color,
      backgroundColor: props.styles.closebutton.root.background,
    },
  };

  let styledCartButton = {
    root: {
      "&:hover": props.buttons.addToCart.root.hover,
      color: props.buttons.addToCart.root.color,
      backgroundColor: props.buttons.addToCart.root.backgroundColor,
    },
  };

  let styledWishButton = {
    root: {
      "&:hover": props.buttons.wishList.root.hover,
      color: props.buttons.wishList.root.color,
      backgroundColor: props.buttons.wishList.root.backgroundColor,
    },
  };
  const CloseButton = withStyles((theme) => styledCloseButton)(Button);
  const CartButton = withStyles((theme) => styledCartButton)(Button);
  const WishListButton = withStyles((theme) => styledWishButton)(Button);

  const { loading, error, data } = useQuery(queries.GET_PRODUCT_PAGE_BY_ID, {
    variables: {
      storeId: props.params.pageId,
      id: props.params.productId,
    },
  });
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  return data.product ? (
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={props.open}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle style={props.styles.header} id="max-width-dialog-title">
        Product detail
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
        <Grid container spacing={3}>
          <Grid item key={props.params.productId} xs={12} sm={6} md={6}>
            <Slider
              autoplay={false}
              maxHeight="250px"
              slides={data.product.gallery}
              styles={{ textAlign: "center" }}
            />
            <Typography variant="h6">{data.product.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6">Description</Typography>
            <Typography variant="body2">{data.product.description}</Typography>
            <Typography variant="h6">Specifications</Typography>
            <Typography variant="body2">
              {data.product.specifications}
            </Typography>
            <Typography variant="h6">Warranties</Typography>
            <Typography variant="body2">{data.product.warranties}</Typography>
          </Grid>
        </Grid>
        <Typography variant="h6" style={{ margin: "15px" }}>
          Attributes
        </Typography>
        <Grid container spacing={2}>
          {data.product.attributes &&
            data.product.attributes.length > 0 &&
            data.product.attributes.map((item, index) => (
              <Grid key={"attr-" + index} item xs={12} sm={3} md={3}>
                <FormControl
                  key={item.name}
                  variant="outlined"
                  style={{
                    width: "100%",
                  }}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    {item.name}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label={item.name}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {item &&
                      item.values &&
                      item.values.map((option, index) => (
                        <MenuItem key={item.name + index} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
            ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <WishListButton color="primary" onClick={props.onClose}>
          Add to Wish List
        </WishListButton>
        <CartButton color="primary" onClick={props.onClose}>
          Add to Cart
        </CartButton>
        <CloseButton color="primary" onClick={props.onClose}>
          Close
        </CloseButton>
      </DialogActions>
    </Dialog>
  ) : null;
}

export default ProductDetails;
