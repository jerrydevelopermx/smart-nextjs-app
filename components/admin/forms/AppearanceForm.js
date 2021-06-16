import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  Button,
  TextField,
  Grid,
  Container,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import components from "../../../js/components";
import mutations from "../../../graphql/mutations";
import ColorPicker from "../../common/ColorPicker";
import computedStyles from "../../../styles/computedStyles";
import { useTranslation } from "next-i18next";

function AppearanceForm(props) {
  const { t } = useTranslation(["admin"]);
  const [updateAppearance] = useMutation(mutations.UPDATE_SITE_APPEARANCE);

  const [appearance, setAppearance] = useState({
    siteBodyColorRGB: props.data.sitebodycolorrgb,
    siteBodyFontColorText: props.data.sitebodyfontcolortext,
    siteMainColorRGB: props.data.sitemaincolorrgb,
    siteMainFontColorText: props.data.sitemainfontcolortext,
    siteFontNameText: props.data.sitefontnametext,
  });
  const [colorPickersStatus, setColorPickersStatus] = useState({
    bodyColor: false,
    bodyFontColor: false,
    mainColor: false,
    mainFontColor: false,
  });
  let submitButtonCSS = computedStyles.submitButton(props);
  let changeButtonCSS = computedStyles.changeButton(props);

  function handleClick(type) {
    setColorPickersStatus({ ...colorPickersStatus, ...{ [type]: true } });
  }

  function handleMainFontChange(color) {
    setAppearance({
      ...appearance,
      ...{
        siteMainFontColorText: `rgb(${color.rgb.r}, ${color.rgb.g},${color.rgb.b})`,
      },
    });
    setColorPickersStatus({
      ...colorPickersStatus,
      ...{ mainFontColor: false },
    });
  }

  function handleMainChange(color) {
    setAppearance({
      ...appearance,
      ...{
        siteMainColorRGB: `rgb(${color.rgb.r}, ${color.rgb.g},${color.rgb.b})`,
      },
    });
    setColorPickersStatus({ ...colorPickersStatus, ...{ mainColor: false } });
  }

  function handleBodyFontChange(color) {
    setAppearance({
      ...appearance,
      ...{
        siteBodyFontColorText: `rgb(${color.rgb.r}, ${color.rgb.g},${color.rgb.b})`,
      },
    });
    setColorPickersStatus({
      ...colorPickersStatus,
      ...{ bodyFontColor: false },
    });
  }

  function handleBodyChange(color) {
    setAppearance({
      ...appearance,
      ...{
        siteBodyColorRGB: `rgb(${color.rgb.r}, ${color.rgb.g},${color.rgb.b})`,
      },
    });
    setColorPickersStatus({ ...colorPickersStatus, ...{ bodyColor: false } });
  }

  function handleSelectChange(event) {
    setAppearance({
      ...appearance,
      ...{
        siteFontNameText: event.target.value,
      },
    });
  }

  function handleSave() {
    updateAppearance({
      variables: {
        id: props.pageId,
        appearance: appearance,
      },
    }).then(
      (res) => {
        toast.success(
          "Appearance updated succesfully!",
          components.toastifyConfig
        );
      },
      (err) => console.log(err)
    );
  }
  function handleClose(type) {
    setColorPickersStatus({ ...colorPickersStatus, ...{ [type]: false } });
  }

  return (
    <>
      <Container component="main" maxWidth="xl">
        <Grid container spacing={1}>
          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={2}
          >
            <img
              src={"/" + props.data.sitelogolink}
              alt=""
              style={{ width: "100px" }}
            />
          </Grid>
          <Grid item xs={4} sm={6} md={9}>
            <TextField
              disabled
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={t("Logo URL")}
              name="logUrl"
              defaultValue={props.data.sitelogolink}
            />
          </Grid>

          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={1}
          >
            <Button className={changeButtonCSS.root}>{t("Change")}</Button>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              disabled
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="bodyColor"
              label={t("Body Color")}
              id="bodyColor"
              defaultValue={appearance.siteBodyColorRGB}
            />
          </Grid>
          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={1}
          >
            <ColorPicker
              color={appearance.siteBodyColorRGB}
              onClick={() => handleClick("bodyColor")}
              onClose={() => handleClose("bodyColor")}
              active={colorPickersStatus.bodyColor}
              onChangeComplete={handleBodyChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              disabled
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="bodyTextColor"
              label={t("Body Font Color")}
              id="bodyTextColor"
              defaultValue={appearance.siteBodyFontColorText}
            />
          </Grid>
          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={1}
          >
            <ColorPicker
              color={appearance.siteBodyFontColorText}
              onClick={() => handleClick("bodyFontColor")}
              onClose={() => handleClose("bodyFontColor")}
              active={colorPickersStatus.bodyFontColor}
              onChangeComplete={handleBodyFontChange}
            />
          </Grid>
          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={4}
          >
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                {t("Font")}
              </InputLabel>
              <Select
                native
                label="Age"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
                value={appearance.siteFontNameText}
                onChange={handleSelectChange}
              >
                <option aria-label="None" value="" />
                <option value={"Verdana"}>Verdana</option>
                <option value={"Roboto"}>Roboto</option>
                <option value={"Sans Serif"}>Sans Serif</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              disabled
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="mainComponentsColors"
              label={t("Main Components Color")}
              id="mainComponentsColor"
              defaultValue={appearance.siteMainColorRGB}
            />
          </Grid>
          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={2}
          >
            <ColorPicker
              color={appearance.siteMainColorRGB}
              onClick={() => handleClick("mainColor")}
              onClose={() => handleClose("mainColor")}
              active={colorPickersStatus.mainColor}
              onChangeComplete={handleMainChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              disabled
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="mainComponentsTextColor"
              label={t("Main Components Font Color")}
              id="mainComponentsTextColor"
              defaultValue={appearance.siteMainFontColorText}
            />
          </Grid>
          <Grid
            container
            item
            align="center"
            justify="center"
            direction="column"
            xs={12}
            sm={3}
            md={2}
          >
            <ColorPicker
              color={appearance.siteMainFontColorText}
              onClick={() => handleClick("mainFontColor")}
              onClose={() => handleClose("mainFontColor")}
              active={colorPickersStatus.mainFontColor}
              onChangeComplete={handleMainFontChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={12}
            style={{ padding: "30px", textAlign: "center" }}
          >
            <Button className={submitButtonCSS.root} onClick={handleSave}>
              {t("Submit")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AppearanceForm;
