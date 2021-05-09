import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "next-i18next";

function Slider(props) {
  const { t } = useTranslation("common");
  const useStyles = makeStyles((theme) => ({
    margin: {
      [theme.breakpoints.only("xs")]: {
        // 600-959
        marginTop: "70px",
      },
      [theme.breakpoints.up("sm")]: {
        // 600-959
        marginTop: "70px",
      },
      [theme.breakpoints.up("md")]: {
        //960 - 1279
        marginTop: "80px",
      },

      [theme.breakpoints.up("lg")]: {
        //1280 - 1919
        marginTop: "100px",
      },
      [theme.breakpoints.up("xl")]: {
        //>= 1920
        marginTop: "130px",
      },
    },
    align: {
      textAlign: "center",
    },
  }));
  const classes = useStyles();

  return (
    <div
      id={props.id}
      className={props.type === "topSlider" ? classes.margin : classes.align}
      style={props.styles}
    >
      {props.id === "events-scroll" ? <h4>{t("Promos and Events")}</h4> : null}
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={props.autoplay}
        infiniteLoop={true}
        stopOnHover={true}
        emulateTouch={true}
        dynamicHeight={false}
        showStatus={false}
        useKeyboardArrows={true}
        transitionTime={550}
      >
        {props.slides &&
          props.slides.length > 0 &&
          props.slides.map((item, index) => (
            <div key={index}>
              <img
                style={{ maxHeight: props.maxHeight }}
                src={`/imgs/${item.img}`}
                alt="1"
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default Slider;
