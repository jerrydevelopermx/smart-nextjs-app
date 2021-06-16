import React, { useState, useEffect } from "react";
import { Button, Grid, Container } from "@material-ui/core";
import FormFieldsGroup from "./FormFieldsGroup";
import computedStyles from "../../../styles/computedStyles";
import styles from "../../../styles/app";
import { useTranslation } from "next-i18next";

function DeptEditForm(props) {
  const { t } = useTranslation("admin");
  let textFieldCSS = computedStyles.textField(props);
  let submitButtonCSS = computedStyles.submitButton(props);

  const [department, setDepartment] = useState({
    campaignid: null,
    campaigning: null,
    contactid: null,
    contractlink: null,
    createdbyid: null,
    createddatime: null,
    departmentid: null,
    departmentname: null,
    departmentnumber: null,
    deptcategorynumber: null,
    deptdefaultimagelink: null,
    deptLogoLink: null,
    deptprioritynumber: null,
    deptstatus: null,
    griddefaultpositionindex: null,
    gridpromotedpositionindex: null,
    id: null,
    modifiedbyid: null,
    modifieddatime: null,
    placeholdercode: null,
    placeholdersincedate: null,
    placeholderthrudate: null,
    placeholdertype: null,
  });

  useEffect(() => {
    setDepartment(props.data && props.data.department);
  }, [props.data]);

  function handleChange(event) {
    setDepartment({
      ...department,
      [event.target.name]: event.target.value,
    });
  }
  let fields = [
    {
      id: "departmentName",
      name: "departmentName",
      value: (department && department.departmentname) || "",
      label: t("Name"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "deptCategoryNumber",
      name: "deptCategoryNumber",
      value: (department && department.deptcategorynumber) || "",
      label: t("Category"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "contractLink",
      name: "contractLink",
      value: (department && department.contractlink) || "",
      label: t("Contract Link"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "placeHolderSinceDate",
      name: "placeHolderSinceDate",
      value: (department && department.placeholdersincedate) || "",
      label: t("Placeholder Since"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "placeHolderThruDate",
      name: "placeHolderThruDate",
      value: (department && department.placeholderthrudate) || "",
      label: t("Placeholder to"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "placeHolderType",
      name: "placeHolderType",
      value: (department && department.placeholdertype) || "",
      label: t("Placeholder type"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "placeHolderCode",
      name: "placeHolderCode",
      value: (department && department.placeholdercode) || "",
      label: t("Placeholder code"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "deptLogoLink",
      name: "deptLogoLink",
      value: (department && department.deptlogolink) || "",
      label: t("Hover Logo"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "deptDefaultImageLink",
      name: "deptDefaultImageLink",
      value: (department && department.deptdefaultimagelink) || "",
      label: "Default Image",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "gridDefaultPositionIndex",
      name: "gridDefaultPositionIndex",
      value: (department && department.griddefaultpositionindex) || "",
      label: t("Grid default position"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "gridPromotedPositionIndex",
      name: "gridPromotedPositionIndex",
      value: (department && department.gridpromotedpositionindex) || "",
      label: t("Grid promoted position"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "deptPriorityNumber",
      name: "deptPriorityNumber",
      value: (department && department.deptprioritynumber) || "",
      label: t("Priority number"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "campaigning",
      name: "campaigning",
      value: (department && department.campaigning) || "",
      label: t("Is campaigning"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "campaignID",
      name: "campaignID",
      value: (department && department.campaignid) || "",
      label: t("Campaign"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
  ];

  function handleSave() {
    console.log(department);
    /*updateSiteContent({
      variables: {
        id: props.pageId,
        content: content,
      },
    }).then(
      (res) => {
        toast.success(
          "Content updated succesfully!",
          components.toastifyConfig
        );
      },
      (err) => console.log(err)
    ); */
  }
  return (
    <>
      <Container component="main" maxWidth="md">
        <form
          onSubmit={(e) => {
            /*
            e.preventDefault();
            console.log(department);
            addEdit({
              variables: {
                department: {
                  departmentName: department.departmentName.value,
                  departmentID: parseInt(department.departmentID.value),
                },
              },
              update: (cache, { data: { addEdit } }) => {
                const data = cache.readQuery({
                  query: queries.GET_DEPARTMENTS_DATA,
                });
                console.log(data, addEdit);
                cache.writeQuery({
                  query: queries.GET_DEPARTMENTS_DATA,
                  data: {
                    departments: data.departments.concat([addEdit]), //[addEdit, ...data.departments],
                  },
                });
              },
              onCompleted: () => console.log("done"),
            });

            //input.value = ''; */
          }}
        >
          <Container style={{ textAlign: "center" }}>
            <h2>
              {t(
                `${
                  props.action.charAt(0).toUpperCase() + props.action.slice(1)
                } Department`
              )}
            </h2>
          </Container>

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

export default DeptEditForm;
