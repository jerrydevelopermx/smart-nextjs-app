import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Grid, Container, Button } from "@material-ui/core";
import mutations from "../../../graphql/mutations";
import computedStyles from "../../../styles/computedStyles";
import FormFieldsGroup from "./FormFieldsGroup";
import styles from "../../../styles/app";
import { useTranslation } from "next-i18next";

function CampaignEditForm(props) {
  const { t } = useTranslation("admin");
  let textFieldCSS = computedStyles.textField(props);
  let submitButtonCSS = computedStyles.submitButton(props);

  const [campaign, setCampaign] = useState({
    campaignnumber: "",
    campaignoccurrence: "",
    campaignstatus: "",
    campaigntype: "",
    departmentid: "",
    productid: "",
    gridpositionindex: "",
    promotedfromdatime: "",
    promotedtodatime: "",
  });

  useEffect(() => {
    setCampaign(props.data && props.data.campaign);
  }, [props.data]);

  let fields = [
    {
      id: "campaignnumber",
      name: "campaignnumber",
      value: (campaign && campaign.campaignnumber) || "",
      label: t("Number"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "campaigntype",
      name: "campaigntype",
      value: (campaign && campaign.campaigntype) || "",
      label: t("Type"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "campaignBelongs",
      name: "campaignBelongs",
      value: (campaign && campaign.departmentid) || "",
      label:
        campaign && campaign.campaigntype === "1"
          ? t("Department")
          : t("Product"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "campaignoccurrence",
      name: "campaignoccurrence",
      value: (campaign && campaign.campaignoccurrence) || "",
      label: t("Ocurrence"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "gridpositionindex",
      name: "gridpositionindex",
      value: (campaign && campaign.gridpositionindex) || "",
      label: t("Grid position"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "promotedfromdatime",
      name: "promotedfromdatime",
      value: (campaign && campaign.promotedfromdatime) || "",
      label: t("From Date"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "promotedtodatime",
      name: "promotedtodatime",
      value: (campaign && campaign.promotedtodatime) || "",
      label: t("To Date"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
  ];
  function handleChange(event) {
    setCampaign({
      ...campaign,
      [event.target.name]: event.target.value,
    });
  }
  function handleSave() {
    console.log(campaign);
  }

  const [updateTodo] = useMutation(mutations.ADD_USER);

  return (
    <>
      <Container style={{ textAlign: "center" }}>
        <h2>
          {t(
            `${
              props.action.charAt(0).toUpperCase() + props.action.slice(1)
            } Campaign`
          )}
        </h2>
      </Container>
      <Container component="main" maxWidth="md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //addTodo({ variables: { type: input.value } });
            //input.value = '';
          }}
        >
          <FormFieldsGroup fields={fields} css={textFieldCSS.root} />
          <Grid item xs={12} sm={6} md={12} style={styles.cmsSubmitButton}>
            <Button className={submitButtonCSS.root} onClick={handleSave}>
              {t("Submit")}
            </Button>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default CampaignEditForm;
