import React, { useState, useRef } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import { useParams } from "react-router";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import appFunctions from "../../../js/functions";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import queries from "../../../graphql/queries";
import mutations from "../../../graphql/mutations";

function DepartmentEditForm(props) {
  let department = {
    departmentName: "",
    departmentID: "",
  };

  let { id, section, action, resourceId } = useParams();
  const { loading, error, data } = useQuery(queries.GET_DEPARTMENT_DATA_BY_ID, {
    skip: action === "add",
    variables: {
      deptId: resourceId,
    },
  });

  const [addEdit] = useMutation(mutations.ADD_DEPT);

  let styledButton = {
    root: {
      "&:hover": {
        backgroundColor: appFunctions.getHoverColor(
          props.styles.mobilenavbar.paper.background
        ),
      },
      color: props.styles.mobilenavbar.paper.color,
      backgroundColor: props.styles.topbar.background,
    },
  };

  const SubmitButton = withStyles((theme) => styledButton)(Button);

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: props.styles.mobilenavbar.paper.background,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: props.styles.mobilenavbar.paper.background,
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: props.styles.mobilenavbar.paper.background,
        },
      },
    },
  })(TextField);

  const CssCheckbox = withStyles({
    root: {
      color: props.styles.mobilenavbar.paper.background,
      "&$checked": {
        color: props.styles.mobilenavbar.paper.background,
      },
    },
    checked: {},
  })(Checkbox);

  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  return (
    <>
      <Container component="main" maxWidth="md">
        <form
          onSubmit={(e) => {
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

            //input.value = '';
          }}
        >
          {/* 
            let fields = [
    {
      id: "siteFacebookLink",
      name: "siteFacebookLink",
      value: content.siteFacebookLink,
      label: "Facebook",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "siteInstagramLink",
      name: "siteInstagramLink",
      value: content.siteInstagramLink,
      label: "Instagram",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "siteTwitterLink",
      name: "siteTwitterLink",
      value: content.siteTwitterLink,
      label: "Twitter",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "sitePinterestLink",
      name: "sitePinterestLink",
      value: content.sitePinterestLink,
      label: "Pinterest",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "siteCopyright",
      name: "siteCopyright",
      value: content.siteCopyright,
      label: "Copyright",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
  ];
          */}
          <h3>{action.charAt(0).toUpperCase() + action.slice(1)} Department</h3>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={4}>
              <CssTextField
                autoFocus
                fullWidth
                variant="outlined"
                margin="normal"
                id="departmentName"
                name="departmentName"
                label="Department Name"
                defaultValue={
                  data && data.c ? data.department.departmentName : ""
                }
                inputRef={(node) => {
                  department.departmentName = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="category"
                label="Category"
                id="category"
                defaultValue={
                  data && data.department ? data.department.departmentID : ""
                }
                inputRef={(node) => {
                  department.departmentID = node;
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="MI"
                label="Contract Link"
                id="MI"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="city"
                label="Placeholder since"
                id="city"
                defaultValue={
                  data && data.department
                    ? data.department.placeHolderSinceDate
                    : ""
                }
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="state"
                label="Placeholder to"
                id="state"
                defaultValue={
                  data && data.department
                    ? data.department.placeHolderThruDate
                    : ""
                }
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="zipCode"
                label="Placeholder type"
                id="zipCode"
                defaultValue={
                  data && data.department ? data.department.placeHolderType : ""
                }
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="country"
                label="Placeholder code"
                id="country"
                defaultValue={
                  data && data.department ? data.department.placeHolderCode : ""
                }
              />
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={4} md={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="email"
                label="Logo"
                id="email"
                defaultValue={data && data.user ? data.user.username : ""}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Default Image"
                id="password"
                defaultValue={data && data.user ? data.user.password : ""}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={6}>
              <FormControlLabel
                control={
                  <CssCheckbox defaultValue="remeinmber" color="primary" />
                }
                label="Is Campaigning"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="email"
                label="Campaign"
                id="email"
                defaultValue={data && data.user ? data.user.username : ""}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="city"
                label="Grid default position"
                id="city"
                defaultValue={data && data.user ? data.user.cityName : ""}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="state"
                label="Grid promoted position"
                id="state"
                defaultValue={data && data.user ? data.user.stateCode : ""}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="zipCode"
                label="Priority Number"
                id="zipCode"
                defaultValue={data && data.user ? data.user.postalCode : ""}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={12}
              style={{ padding: "30px", textAlign: "center" }}
            >
              <SubmitButton type="submit">Submit </SubmitButton>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default DepartmentEditForm;
