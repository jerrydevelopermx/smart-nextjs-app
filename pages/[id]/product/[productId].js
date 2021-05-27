import { useRouter } from "next/router";

import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import Slider from "../../../components/common/Slider";
import { useQuery } from "@apollo/client";
import appStyles from "../../../styles/app.js";
import queries from "../../../graphql/queries.js";
import js from "../../../js/components.js";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import { initializeApollo } from "../../../lib/apolloClient";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: queries.GET_PRODUCT_PAGE_BY_ID,
    variables: {
      storeId: context.query.id === "main" ? 0 : context.query.id,
      productId: context.query.productId,
    },
  });

  console.log(data);

  return {
    props: {
      data: data,
      ...(await serverSideTranslations(data.page.lang, [
        "common",
        "header",
        "footer",
      ])),
    },
  };
}
function ProductPage({ ...props }) {
  const router = useRouter();
  const { id, productId } = router.query;

  const { t } = useTranslation("common");

  let styledCloseButton = {
    root: {
      "&:hover": appStyles.buttons.closeModal.root.hover,
      color: appStyles.buttons.closeModal.root.color,
      backgroundColor: appStyles.buttons.closeModal.root.backgroundColor,
    },
  };

  let styledCartButton = {
    root: {
      "&:hover": appStyles.buttons.addToCart.root.hover,
      color: appStyles.buttons.addToCart.root.color,
      backgroundColor: appStyles.buttons.addToCart.root.backgroundColor,
    },
  };

  let styledWishButton = {
    margin: "20px",
    root: {
      "&:hover": appStyles.buttons.wishList.root.hover,
      color: appStyles.buttons.wishList.root.color,
      backgroundColor: appStyles.buttons.wishList.root.backgroundColor,
    },
  };
  const CloseButton = withStyles((theme) => styledCloseButton)(Button);
  const CartButton = withStyles((theme) => styledCartButton)(Button);
  const WishListButton = withStyles((theme) => styledWishButton)(Button);

  return (
    <div
      style={{
        background: props.data.page.styles.body.background,
        fontFamily: props.data.page.styles.body.fontfamily,
        color: props.data.page.styles.body.color,
      }}
    >
      <Header
        logo={props.data.page.logo}
        blogLink={props.data.page.bloglink}
        menu={js.header}
        pageId={props.data.page.id}
        styles={props.data.page.styles.header}
        modalStyles={props.data.page.styles.modalstyles}
        appStyles={appStyles.header}
        fontFamily={props.data.page.styles.body.fontfamily}
      />
      <main style={{ margin: "120px" }}>
        <Grid container spacing={3}>
          <Grid item key={productId} xs={12} sm={6} md={6}>
            <Slider
              autoplay={false}
              maxHeight="250px"
              slides={props.data.product.gallery}
              styles={{ textAlign: "center" }}
            />
            <Typography variant="h6">{props.data.product.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6">{t("Description")}</Typography>
            <Typography variant="body2">
              {props.data.product.description}
            </Typography>
            <Typography variant="h6">{t("Specifications")}</Typography>
            <Typography variant="body2">
              {props.data.product.specifications}
            </Typography>
            <Typography variant="h6">{t("Warranties")}</Typography>
            <Typography variant="body2">
              {props.data.product.warranties}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h6" style={{ margin: "15px" }}>
          {t("Attributes")}
        </Typography>
        <Grid container spacing={2}>
          {props.data.product.attributes &&
            props.data.product.attributes.length > 0 &&
            props.data.product.attributes.map((item, index) => (
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
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <WishListButton
            style={{ margin: "10px" }}
            color="primary"
            onClick={props.onClose}
          >
            {t("Add to Wish List")}
          </WishListButton>
          <CartButton
            style={{ margin: "10px" }}
            color="primary"
            onClick={props.onClose}
          >
            {t("Add to Cart")}
          </CartButton>
        </div>
      </main>
      <Footer
        appStyles={appStyles.footer}
        styles={props.data.page.styles.footer}
        content={js.footer}
        socialMedia={props.data.page.footer}
      />
    </div>
  );
}

export default ProductPage;
