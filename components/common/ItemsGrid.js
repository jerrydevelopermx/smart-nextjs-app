import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import ShoppingCartPage from "../ShoppingCartPage";
import CheckoutPage from "../CheckoutPage";
import Button from "@material-ui/core/Button";
import computedStyles from "../../styles/computedStyles";
import { useTranslation } from "next-i18next";

function ItemsGrid(props) {
  const { t } = useTranslation("common");
  let addToCartButtonCSS = computedStyles.addToCartButton(props.appStyles);
  let viewMoreButtonCSS = computedStyles.viewMoreButton(props.appStyles);
  let checkoutButtonCSS = computedStyles.checkoutButton(props.appStyles);

  const [details, setDetails] = useState({
    open: false,
    productId: "",
    pageId: "",
  });
  const [modalsStatus, setModalsStatus] = useState({
    shoppingCart: false,
    checkout: false,
    review: false,
  });
  const [hovers, setHovers] = useState([]);

  useEffect(() => {
    setHovers(props.items.map(() => false));
  }, [props.items]);

  function changeState(id, pageId) {
    setDetails({ open: true, productId: id, pageId: pageId });
  }
  function closeModal() {
    setDetails({ open: false, productId: "", pageId: "" });
  }
  function toggleHover(id, flag) {
    setHovers(hovers.map((hover, index) => (index === id ? flag : hover)));
  }

  function setModals(id, action) {
    let page = {};
    page[id] = action;
    setModalsStatus({ ...modalsStatus, ...page });
  }
  return (
    <Grid container spacing={4}>
      <ShoppingCartPage
        open={modalsStatus.shoppingCart}
        styles={props.modalStyles}
        onClose={() => setModals("shoppingCart", false)}
      />
      <CheckoutPage
        open={modalsStatus.checkout}
        styles={props.modalStyles}
        onClose={() => setModals("checkout", false)}
      />

      {props.items.map((item, index) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <Card>
            {item.type === "store" ? (
              <Link href="/[id]" as={`/${item.id}`}>
                <div
                  onMouseOver={() => toggleHover(index, true)}
                  onMouseOut={() => toggleHover(index, false)}
                  onClick={() => toggleHover(index, true)}
                  style={{
                    position: "relative",
                    cursor: "pointer",
                    zIndex: 0,
                    "&:hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  <CardMedia
                    style={props.appStyles.grid.cardMedia}
                    image={`/imgs/${item.coverimage}`}
                    title={item.name}
                  />
                  <div
                    style={{
                      position: "absolute",
                      backgroundColor: "rgba(52, 52, 52, 0.4)",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 5,
                      color: "#fff",
                      display: hovers[index] ? "block" : "none",
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <h3>{item.name}</h3>
                      <div>
                        <img
                          style={{ maxHeight: "120px" }}
                          src={`/imgs/${item.hoverimage}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div
                onMouseOver={() => toggleHover(index, true)}
                onMouseOut={() => toggleHover(index, false)}
                onClick={() => toggleHover(index, true)}
                style={{
                  position: "relative",
                  cursor: "pointer",
                  zIndex: 0,
                }}
              >
                <CardMedia
                  style={props.appStyles.grid.cardMedia}
                  image={`/imgs/${item.coverimage}`}
                  title={item.name}
                />
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(52, 52, 52, 0.4)",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 5,
                    color: "#fff",
                    display: hovers[index] ? "block" : "none",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <h3>{item.name}</h3>
                    <div>{item.description.substring(0, 50)}...</div>
                    <div style={{ marginTop: "30px" }}>
                      <Link
                        href="/"
                        style={{
                          height: "35px",
                          backgroundColor: "#228b22",
                          color: "white",
                          border: "1px solid #228b22",
                          borderRadius: "5px",
                          textDecoration: "none",
                          padding: "5px",
                          margin: "5px",
                        }}
                      >
                        <Button
                          className={addToCartButtonCSS.root}
                          onClick={(e) => {
                            e.preventDefault();
                            setModals("shoppingCart", true);
                          }}
                        >
                          {t("Add to Cart")}
                        </Button>
                      </Link>
                      <Link
                        href="/"
                        style={{
                          height: "35px",
                          backgroundColor: "#cccc00",
                          color: "white",
                          border: "1px solid #cccc00",
                          borderRadius: "5px",
                          textDecoration: "none",
                          padding: "5px",
                          margin: "5px",
                        }}
                      >
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            setModals("checkout", true);
                          }}
                          className={checkoutButtonCSS.root}
                        >
                          {t("Checkout")}
                        </Button>
                      </Link>
                      <Link
                        as={"/" + props.pageId + "/product/" + item.id}
                        href="/[id]/product/[productId]"
                        style={{
                          height: "35px",
                          backgroundColor: "red",
                          color: "white",
                          border: "1px solid red",
                          borderRadius: "5px",
                          textDecoration: "none",
                          padding: "5px",
                          margin: "5px",
                        }}
                      >
                        <Button className={viewMoreButtonCSS.root}>
                          {t("View More")}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ItemsGrid;
