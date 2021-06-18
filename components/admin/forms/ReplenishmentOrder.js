import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import EditForms from "../../EditForms";
import { useTranslation } from "next-i18next";

function ReplenishmentOrder(props) {
  const { t } = useTranslation("admin");
  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      open={props.open}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle
        style={props.styles.mobilenavbar.paper}
        id="max-width-dialog-title"
      >
        {t("Replenishment Order")}
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
      <DialogContent>
        <EditForms
          type="REPLENISHMENT"
          action={props.params.action}
          id={props.params.id}
          styles={props.styles}
        />
      </DialogContent>
    </Dialog>
  );
}

export default ReplenishmentOrder;
