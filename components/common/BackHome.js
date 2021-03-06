import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { useTranslation } from "next-i18next";

function BackHome(props) {
  const { t } = useTranslation("header");
  const useStyles = makeStyles((theme) => ({
    backDiv: props.appStyles.backHome.div,
    left: {
      [theme.breakpoints.only("xs")]: {
        left: "40%",
      },
      [theme.breakpoints.up("sm")]: {
        left: "5px",
      },
    },
    backImg: props.appStyles.backHome.img,
  }));
  const classes = useStyles();

  return (
    <div className={classes.backDiv + "  " + classes.left}>
      <Link href="/[id]" as={`/main`}>
        <Tooltip title={t("Go to Smart Shop")} aria-label="Go SmartShop">
          <img
            className={classes.backImg}
            src={`/imgs/bevariante1.png`}
            alt={t("Go to Smart Shop")}
          />
        </Tooltip>
      </Link>
    </div>
  );
}

export default BackHome;
