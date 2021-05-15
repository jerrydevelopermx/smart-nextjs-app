import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import appFunctions from "../../../js/functions";
import queries from "../../../graphql/queries";
import mutations from "../../../graphql/mutations";
import FormFieldsGroup from "./FormFieldsGroup";
import computedStyles from "../../../styles/computedStyles";
import styles from "../../../styles/app";

function UserEditForm(props) {
  //let user = JSON.parse(localStorage.getItem("user"));
  let textFieldCSS = computedStyles.textField(props);
  let checkboxCSS = computedStyles.checkbox(props);
  let radioCSS = computedStyles.radio(props);
  let submitButtonCSS = computedStyles.submitButton(props);

  let userData = {
    lastName: "",
    firstName: "",
    isstore: false,
    issupplier: false,

    isshipper: false,
    ispymntchannel: false,
  };

  const [user, setUser] = useState({
    username: null,
    password: null,
    useralias: null,
    avatarphotolink: null,
    usertype: null,
    legalperson: false,
    userlastname: null,
    userfirstname: null,
    address1text: null,
    address2text: null,
    cityname: null,
    statecode: null,
    postalcode: null,
    countrycode: null,
    landlinenumber: null,
    faxnumber: null,
    cellphonenumber: null,
    alternateemail: null,
    website: null,
    useridtype: null,
    useridnumber: null,
    userdobdate: null,
    usertaxcode: null,
    usertaxcuitl: null,
    isstore: null,
    isstorecontact: null,
    issupplier: null,
    issuppliercontact: null,
    isshipper: null,
    isshippercontact: null,
    ispymntchannel: null,
    ispymntchcontact: null,
    ismember: null,
    iscustomer: null,
    issubscriber: null,
    isblogger: null,
    userfacebooklink: null,
    usertwitterlink: null,
    userinstagramlink: null,
    userpinterestlink: null,
    subscriptionemail: null,
    createddatime: null,
    modifbyid: null,
    modifdatime: null,
    userstatus: null,
  });

  useEffect(() => {
    setUser(props.data && props.data.user);
  }, [props.data]);

  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function handleSave() {
    console.log(user);
  }

  let fields = [
    {
      id: "userfirstname",
      name: "userfirstname",
      value: (user && user.userfirstname) || "",
      label: "First Name",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "userlastname",
      name: "userlastname",
      value: (user && user.userlastname) || "",
      label: "Last name",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "cellphonenumber",
      name: "cellphonenumber",
      value: (user && user.cellphonenumber) || "",
      label: "Cellphone number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "landlinenumber",
      name: "landlinenumber",
      value: (user && user.landlinenumber) || "",
      label: "Landline number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "faxnumber",
      name: "faxnumber",
      value: (user && user.faxnumber) || "",
      label: "Fax number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      isTextarea: true,
      id: "address1text",
      name: "address1text",
      value: (user && user.address1text) || "",
      label: "Address 1",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      isTextarea: true,
      id: "address2text",
      name: "address2text",
      value: (user && user.address2text) || "",
      label: "Address 2",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "cityname",
      name: "cityname",
      value: (user && user.cityname) || "",
      label: "City name",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "postalcode",
      name: "postalcode",
      value: (user && user.postalcode) || "",
      label: "Postal code",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "statecode",
      name: "statecode",
      value: (user && user.statecode) || "",
      label: "State code",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "countrycode",
      name: "countrycode",
      value: (user && user.countrycode) || "",
      label: "Country code",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "username",
      name: "username",
      value: (user && user.username) || "",
      label: "Username",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
    {
      id: "password",
      name: "password",
      value: (user && user.password) || "",
      label: "Password",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },

    {
      id: "avatarphotolink",
      name: "avatarphotolink",
      value: (user && user.avatarphotolink) || "",
      label: "Avatar",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "useralias",
      name: "useralias",
      value: (user && user.useralias) || "",
      label: "Alias",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      type: "checkbox",
      id: "legalperson",
      name: "legalperson",
      value: (user && user.legalperson) || "",
      label: "Is Legal Person",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "alternateemail",
      name: "alternateemail",
      value: (user && user.alternateemail) || "",
      label: "Alternate email",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "website",
      name: "website",
      value: (user && user.website) || "",
      label: "Website",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      type: "dropdown",
      options: [
        { value: "1", label: "Driver's license" },
        { value: "2", label: "INE" },
      ],
      valueKey: "value",
      labelKey: "label",
      id: "useridtype",
      name: "useridtype",
      value: (user && user.useridtype) || "",
      label: "ID type",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "useridnumber",
      name: "useridnumber",
      value: (user && user.useridnumber) || "",
      label: "ID Number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "userdobdate",
      name: "userdobdate",
      value: (user && user.userdobdate) || "",
      label: "DOB Date",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "usertaxcode",
      name: "usertaxcode",
      value: (user && user.usertaxcode) || "",
      label: "Tax Code",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "usertaxcuitl",
      name: "usertaxcuitl",
      value: (user && user.usertaxcuitl) || "",
      label: "Tax CUITL",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "userfacebooklink",
      name: "userfacebooklink",
      value: (user && user.userfacebooklink) || "",
      label: "Facebook Link",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "usertwitterlink",
      name: "usertwitterlink",
      value: (user && user.usertwitterlink) || "",
      label: "Twitter Link",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "userinstagramlink",
      name: "userinstagramlink",
      value: (user && user.userinstagramlink) || "",
      label: "Instagram Link",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "userpinterestlink",
      name: "userpinterestlink",
      value: (user && user.userpinterestlink) || "",
      label: "Pinterest Link",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      type: "subtitle",
      label: "User Type",
      grid: { xs: 6, sm: 3, md: 12 },
    },
    {
      type: "radiogroup",
      options: [
        { value: "corporate", label: "Corporate" },
        { value: "nonPrivileged", label: "Non Privileged" },
        { value: "privileged", label: "Privileged" },
      ],
      defaultValue: "corporate",
      id: "userType",
      name: "userType",
      value: (user && user.usertype) || "",
      label: "User Type",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },

    /*
   
    {
      type: "dropdown",
      options: [
        { value: "1", label: "Super Admin" },
        { value: "2", label: "Site " },
        { value: "3", label: "Not available" },
        { value: "4", label: "Out of Stock" },
        { value: "5", label: "Backordered" },
        { value: "6", label: "Suspended" },
        { value: "7", label: "Outdated" },
        { value: "8", label: "Decommisioned" },
        { value: "9", label: "Invalid" },
      ],
      valueKey: "value",
      labelKey: "label",
      id: "userType",
      name: "userType",
      value: (user && user.userType) || "",
      label: "User type",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },*/
  ];

  let issupplierView = false;

  const [userType, setUserType] = useState(null);
  const [userRole, setUserRole] = useState("");

  const [updateTodo] = useMutation(mutations.ADD_USER);

  const handleTypeChange = (event) => {
    console.log("mms" + event.target.value);
    setUserType(event.target.value);
  };

  const handleRoleChange = (event) => {};

  const getUserType = (user) => {
    if (parseInt(user.userType) > 0 && parseInt(user.userType) < 8) {
      return "privileged";
    }
    if (user.member || user.customer || user.subscriber) {
      return "nonPrivileged";
    }
    if (user.store || user.supplier || user.shipper || user.pymntChannel) {
      return "corporate";
    }
  };

  let styledRadio = {
    root: {
      color: props.styles.mobilenavbar.paper.background,
      "&$checked": {
        color: props.styles.mobilenavbar.paper.background,
      },
    },
    checked: {},
  };

  const CssRadio = withStyles(() => styledRadio)(Radio);

  return (
    <>
      <Container component="main" maxWidth="lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(userData.lastName.value);
            console.log(userType);
            //addTodo({ variables: { type: input.value } });
            //input.value = '';
          }}
        >
          <h3>
            {props.action.charAt(0).toUpperCase() + props.action.slice(1)} User
          </h3>
          <FormFieldsGroup
            fields={fields}
            css={textFieldCSS.root}
            cssCheckbox={checkboxCSS.root}
            cssRadio={radioCSS.root}
          />
          <Grid item xs={12} sm={6} md={12} style={styles.cmsSubmitButton}>
            <Button className={submitButtonCSS.root} onClick={handleSave}>
              Submit
            </Button>
          </Grid>
          {/*


              corporate => Department (isstore), Supplier (issupplier), Shipper (isshipper), Payment Channel (ispymntchannel)
              privileged => Super User, Site Manager, Site Staff, Deparment Manager, Deparment Admin, Deparment Staff (userType 1-7)
              Non Privileged => Customer (iscustomer), Member (ismember), Subscriber (issubscriber), Blogger (isblogger) 

          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                defaultValue={data && data.user ? data.user.userlastname : ""}
                inputRef={(node) => {
                  userData.lastName = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="firstName"
                label="First Name"
                id="firstName"
                defaultValue={data && data.user ? data.user.userfirstname : ""}
                inputRef={(node) => {
                  userData.firstName = node;
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="MI"
                label="M.I."
                id="MI"
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="dateBirth"
                label="Date of Birth"
                id="dateBirth"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="Address1"
                label="Address 1"
                id="Address1"
                defaultValue={data && data.user ? data.user.address1text : ""}
                inputRef={(node) => {
                  userData.address1text = node;
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="Address1"
                label="Address 1"
                id="Address1"
                defaultValue={data && data.user ? data.user.address2text : ""}
                inputRef={(node) => {
                  userData.address2text = node;
                }}
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
                label="City"
                id="city"
                defaultValue={data && data.user ? data.user.cityname : ""}
                inputRef={(node) => {
                  userData.cityname = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="state"
                label="State"
                id="state"
                defaultValue={data && data.user ? data.user.statecode : ""}
                inputRef={(node) => {
                  userData.statecode = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="zipCode"
                label="Zip Code"
                id="zipCode"
                defaultValue={data && data.user ? data.user.postalcode : ""}
                inputRef={(node) => {
                  userData.postalcode = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="country"
                label="Country"
                id="country"
                defaultValue={data && data.user ? data.user.countrycode : ""}
                inputRef={(node) => {
                  userData.countrycode = node;
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="idType"
                label="ID Type"
                id="idType"
                defaultValue={data && data.user ? data.user.useridtype : ""}
                inputRef={(node) => {
                  userData.useridtype = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="idNumber"
                label="ID Number"
                id="idNumber"
                defaultValue={data && data.user ? data.user.useridnumber : ""}
                inputRef={(node) => {
                  userData.useridnumber = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="taxCode"
                label="Tax Code"
                id="taxCode"
                defaultValue={data && data.user ? data.user.usertaxcode : ""}
                inputRef={(node) => {
                  userData.usertaxcode = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="taxIDNumber"
                label="Tax ID Number"
                id="taxIDNumber"
                defaultValue={data && data.user ? data.user.usertaxcuitl : ""}
                inputRef={(node) => {
                  userData.usertaxcuitl = node;
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="landline"
                label="Landline"
                id="landline"
                defaultValue={data && data.user ? data.user.landlinenumber : ""}
                inputRef={(node) => {
                  userData.landlinenumber = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="cellPhone"
                label="Cell Phone"
                id="cellPhone"
                defaultValue={
                  data && data.user ? data.user.cellphonenumber : ""
                }
                inputRef={(node) => {
                  userData.cellphonenumber = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="faxnumber"
                label="Fax Number"
                id="faxnumber"
                defaultValue={data && data.user ? data.user.faxnumber : ""}
                inputRef={(node) => {
                  userData.faxnumber = node;
                }}
              />
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="dateBirth"
                label="Date of Birth"
                id="city"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="profession"
                label="Profession/Activity"
                id="profession"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="userfacebooklink"
                label="facebook"
                id="userfacebooklink"
                defaultValue={
                  data && data.user ? data.user.userfacebooklink : ""
                }
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="userinstagramlink"
                label="Instagram"
                id="userinstagramlink"
                defaultValue={
                  data && data.user ? data.user.userinstagramlink : ""
                }
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="usertwitterlink"
                label="Twitter"
                id="usertwitterlink"
                defaultValue={
                  data && data.user ? data.user.usertwitterlink : ""
                }
              />
            </Grid>
            <Grid item xs={6} sm={2} md={2}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="userpinterestlink"
                label="Pinterest"
                id="userpinterestlink"
                defaultValue={
                  data && data.user ? data.user.userpinterestlink : ""
                }
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="pageUrl"
                label="Page URL"
                id="pageUrl"
                defaultValue={data && data.user ? data.user.website : ""}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="email"
                label="Email address"
                id="email"
                defaultValue={data && data.user ? data.user.username : ""}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                id="password"
                defaultValue={data && data.user ? data.user.password : ""}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="retypePassword"
                label="Retype Password"
                id="retypePassword"
                defaultValue={data && data.user ? data.user.password : ""}
              />
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  User type {data && data.user ? data.user.userType : null}
                </FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="usertType"
                  row
                  value={
                    userType != null
                      ? userType
                      : data && data.user
                      ? getUserType(data.user)
                      : "corporate"
                  }
                  onChange={handleTypeChange}
                >
                  <FormControlLabel
                    control={<CssRadio />}
                    label="Corporate"
                    value="corporate"
                  />
                  <FormControlLabel
                    control={<CssRadio />}
                    label="Non Privileged"
                    value="nonPrivileged"
                  />
                  {user.userType < 7 ? (
                    <FormControlLabel
                      control={<CssRadio />}
                      label="Privileged"
                      value="privileged"
                    />
                  ) : null}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          {
            {
              
              corporate: (
                <>
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={3} md={3}>
                      <FormControlLabel
                        control={
                          <CssCheckbox
                            value="isstore"
                            color="primary"
                            checked={data && data.user && data.user.store}
                          />
                        }
                        label="Department"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                      <FormControlLabel
                        control={
                          <CssCheckbox
                            value="issupplier"
                            color="primary"
                            checked={data && data.user && data.user.supplier}
                          />
                        }
                        label="Supplier"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                      <FormControlLabel
                        control={
                          <CssCheckbox
                            value="isshipper"
                            color="primary"
                            checked={data && data.user && data.user.shipper}
                          />
                        }
                        label="Shipper"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                      <FormControlLabel
                        control={
                          <CssCheckbox
                            value="ispymntchannel"
                            color="primary"
                            checked={
                              data && data.user && data.user.pymntChannel
                            }
                          />
                        }
                        label="Payment Channel"
                      />
                    </Grid>
                  </Grid>
                  <div>Department</div>
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="landline"
                        label="Name"
                        id="landline"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="cellPhone"
                        label="Category"
                        id="cellPhone"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="nationality"
                        label="Renter Since"
                        id="nationality"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="dateBirth"
                        label="Contract #"
                        id="city"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="profession"
                        label="Grid default position"
                        id="profession"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="profession"
                        label="Grid priority position"
                        id="profession"
                      />
                    </Grid>
                  </Grid>
                  <div>Supplier</div>
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="landline"
                        label="Company name"
                        id="landline"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="cellPhone"
                        label="Payment Method"
                        id="cellPhone"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="nationality"
                        label="Discount %"
                        id="nationality"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="dateBirth"
                        label="Surcharge %¡"
                        id="city"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="dateBirth"
                        label="Category"
                        id="city"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={6}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="profession"
                        label="Additional notes"
                        id="profession"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={6}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="profession"
                        label="Supplier Main Brand Name"
                        id="profession"
                      />
                    </Grid>
                  </Grid>
                  <div>Shipper</div>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={3} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="shipperName"
                        label="Shipper Company Name"
                        id="shipperName"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="hrsFrom"
                        label="Hours from"
                        id="hrsFrom"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="hrsTp"
                        label="Hours to"
                        id="hrsTo"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="deliveryRate"
                        label="Delivery Rate per mile/Km"
                        id="deliveryRate"
                      />
                    </Grid>
                  </Grid>
                  <div>Payment Channel</div>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={3} md={4}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="pymntChannelName"
                        label="Payment Channel Name"
                        id="pymntChannelName"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="contactTitle"
                        label="Contact title"
                        id="contactTitle"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="feeType"
                        label="Fee type"
                        id="feeType"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="feeAmount"
                        label="Fee amount"
                        id="feeAmount"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="syncCycle"
                        label="Sync Cycle"
                        id="syncCycle"
                      />
                    </Grid>
                  </Grid>
                </>
              ),
              
              privileged: (
                <>
                  <h3>Role</h3>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="userRole"
                      name="userRole"
                      row
                      value={userRole}
                      onChange={handleRoleChange}
                    >
                      <FormControlLabel
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "1"
                                : false
                            }
                          />
                        }
                        label="Super User"
                        value="superUser"
                      />
                      <FormControlLabel
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "2"
                                : false
                            }
                          />
                        }
                        label="Site Manager"
                        value="siteManager"
                      />
                      <FormControlLabel
                        control={<CssRadio />}
                        label="Site Admin"
                        value="siteAdmin"
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "3"
                                : false
                            }
                          />
                        }
                      />
                      <FormControlLabel
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "4"
                                : false
                            }
                          />
                        }
                        label="Site Staff"
                        value="siteStaff"
                      />
                      <FormControlLabel
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "5"
                                : false
                            }
                          />
                        }
                        label="Deparment Manager"
                        value="departmentManager"
                      />
                      <FormControlLabel
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "6"
                                : false
                            }
                          />
                        }
                        label="Deparment Admin"
                        value="departmentAdmin"
                      />
                      <FormControlLabel
                        control={
                          <CssRadio
                            checked={
                              data && data.user
                                ? data.user.userType === "7"
                                : false
                            }
                          />
                        }
                        label="Deparment Staff"
                        value="departmentStaff"
                      />
                    </RadioGroup>
                  </FormControl>
                </>
              ),
              
              nonPrivileged: (
                <>
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={3} md={4}>
                      <FormControlLabel
                        control={
                          <CssCheckbox value="remeinmber" color="primary" />
                        }
                        label="Member"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={4}>
                      <FormControlLabel
                        control={
                          <CssCheckbox value="remember" color="primary" />
                        }
                        label="Customer"
                      />
                    </Grid>
                    <Grid item xs={6} sm={3} md={4}>
                      <FormControlLabel
                        control={
                          <CssCheckbox value="remeinmber" color="primary" />
                        }
                        label="Subscriber"
                      />
                    </Grid>
                    <div>Member</div>
                    <Grid container spacing={1}>
                      <Grid item xs={6} sm={2} md={4}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="facebook"
                          label="Store #"
                          id="Facebook"
                        />
                      </Grid>
                      <Grid item xs={6} sm={2} md={4}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="memberType"
                          label="Member Type"
                          id="memberType"
                        />
                      </Grid>
                      <Grid item xs={6} sm={2} md={4}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="membershipType"
                          label="Membership Type"
                          id="membershipType"
                        />
                      </Grid>
                    </Grid>
                    <div>Customer</div>
                    <Grid container spacing={1}>
                      <Grid item xs={6} sm={2} md={2}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="facebook"
                          label="Store #"
                          id="Facebook"
                        />
                      </Grid>
                      <Grid item xs={6} sm={2} md={2}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="instagram"
                          label="Type"
                          id="instagram"
                        />
                      </Grid>
                      <Grid item xs={6} sm={2} md={2}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="twitter"
                          label="Account number"
                          id="twitter"
                        />
                      </Grid>
                      <Grid item xs={6} sm={2} md={2}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="linkedIn"
                          label="Customership type"
                          id="linkedIn"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4} md={2}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="pageUrl"
                          label="Subscriber?"
                          id="pageUrl"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4} md={2}>
                        <CssTextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="pageUrl"
                          label="Status"
                          id="pageUrl"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <div>Subscriber</div>
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="facebook"
                        label="Site subscriber?"
                        id="Facebook"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="instagram"
                        label="Store #"
                        id="instagram"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={2}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="twitter"
                        label="Subscription type"
                        id="twitter"
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="linkedIn"
                        label="Subscriber since"
                        id="linkedIn"
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                      <CssTextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="pageUrl"
                        label="Status"
                        id="pageUrl"
                      />
                    </Grid>
                  </Grid>
                </>
              ),
            }[
              userType != null
                ? userType
                : data && data.user
                ? getUserType(data.user)
                : "corporate"
            ]
          }
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sm={6}
              md={12}
              style={{ padding: "30px", textAlign: "center" }}
            >
              <SubmitButton type="submit">Submit </SubmitButton>
            </Grid>
        </Grid>*/}
        </form>
      </Container>
    </>
  );
}

export default UserEditForm;
