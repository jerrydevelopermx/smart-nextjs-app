import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { useTranslation } from "next-i18next";

function BackToTop(props) {
  const { t } = useTranslation("common");
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div
      style={{
        display: props.display,
        position: "fixed",
        bottom: "20px",
        right: "30px",
        zIndex: "99",
        border: "none",
        outline: "none",
        backgroundColor: props.backgroundColor,
        opacity: 0.7,
        color: "white",
        cursor: "pointer",
        borderRadius: "10px",
      }}
      onClick={scrollToTop}
    >
      <Tooltip title={t("Back to Top")} aria-label="Back to Top">
        <img src={`/imgs/up-arrow.png`} style={{ height: "70px" }} alt="" />
      </Tooltip>
    </div>
  );
}

export default BackToTop;
