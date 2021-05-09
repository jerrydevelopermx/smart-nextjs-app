import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core/";
import FormFieldsGroup from "./FormFieldsGroup";
import computedStyles from "../../../styles/computedStyles";
import styles from "../../../styles/app";

function ReplenishmentForm(props) {
  let textFieldCSS = computedStyles.textField(props);
  let submitButtonCSS = computedStyles.submitButton(props);
  const [replenishmentOrder, setReplenishmentOrder] = useState({
    replenishmentordernr: "",
    productid: "",
    supplierid: "",
    repgendatime: "",
    quantityordered: "",
  });

  useEffect(() => {
    setReplenishmentOrder(props.data && props.data.replenishment);
  }, [props.data]);

  let fields = [
    {
      id: "replenishmentordernr",
      name: "replenishmentordernr",
      value:
        (replenishmentOrder && replenishmentOrder.replenishmentordernr) || "",
      label: "Order",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "productid",
      name: "productid",
      value: (replenishmentOrder && replenishmentOrder.productid) || "",
      label: "Product Number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "supplierid",
      name: "supplierid",
      value: (replenishmentOrder && replenishmentOrder.supplierid) || "",
      label: "Supplier #",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "repgendatime",
      name: "repgendatime",
      value: (replenishmentOrder && replenishmentOrder.repgendatime) || "",
      label: "Date",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "quantityordered",
      name: "quantityordered",
      value: (replenishmentOrder && replenishmentOrder.quantityordered) || "",
      label: "Quantity",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
  ];

  function handleChange(event) {}
  function handleSave() {
    console.log(replenishmentOrder);
  }

  return (
    <>
      <FormFieldsGroup fields={fields} css={textFieldCSS.root} />
      <Grid item xs={12} sm={6} md={12} style={styles.cmsSubmitButton}>
        <Button className={submitButtonCSS.root} onClick={handleSave}>
          Submit
        </Button>
      </Grid>
    </>
  );
}

export default ReplenishmentForm;
