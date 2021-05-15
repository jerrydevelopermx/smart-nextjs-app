import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/client";
import { Container, Paper, Tabs, Tab, Box } from "@material-ui/core";
import AppearanceForm from "./forms/AppearanceForm";
import ContentForm from "./forms/ContentForm";
import JsonContent from "./forms/JsonContent";
import queries from "../../graphql/queries";
import { useTranslation } from "next-i18next";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function ContentManager(props) {
  const { t } = useTranslation("admin");
  const { loading, error, data } = useQuery(queries.GET_CMS_BY_ID, {
    variables: {
      siteId: props.pageId,
    },
  });
  const useStyles = makeStyles((theme) => ({
    indicator: {
      backgroundColor: props.styles.topbar.background,
    },
  }));
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function getData(data, type) {
    const {
      siteid,
      sitetitletext,
      sitemetadescriptiontext,
      sitelogolink,
      tourdefaultlink,
      event1defaultlink,
      event2defaultlink,
      event3defaultlink,
      bloglink,
      slide1defaultlink,
      slide2defaultlink,
      slide3defaultlink,
      slide4defaultlink,
      slide5defaultlink,
      sitemaincolorrgb,
      sitebodycolorrgb,
      sitefontnametext,
      sitemainfontcolortext,
      sitebodyfontcolortext,
      sitefacebooklink,
      sitetwitterlink,
      siteinstagramlink,
      sitepinterestlink,
      sitecopyright,
    } = data;
    switch (type) {
      case "appearance":
        return {
          siteid,
          sitelogolink,
          sitebodycolorrgb,
          sitebodyfontcolortext,
          sitefontnametext,
          sitemaincolorrgb,
          sitemainfontcolortext,
        };
        break;
      case "content":
        return {
          sitetitletext,
          sitemetadescriptiontext,
          tourdefaultlink,
          event1defaultlink,
          event2defaultlink,
          event3defaultlink,
          bloglink,
          slide1defaultlink,
          slide2defaultlink,
          slide3defaultlink,
          slide4defaultlink,
          slide5defaultlink,
          sitefacebooklink,
          sitetwitterlink,
          siteinstagramlink,
          sitepinterestlink,
          sitecopyright,
        };
        break;
    }
  }
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;
  return (
    <Container component="main" maxWidth="lg">
      <h2>{t("Content Manager System")}</h2>
      <Paper square>
        <Tabs
          TabIndicatorProps={{ className: classes.indicator }}
          value={value}
          onChange={handleChange}
          aria-label="content manager tabs"
        >
          <Tab label={t("Appearance")} {...a11yProps(0)} />
          <Tab label={t("General Content")} {...a11yProps(1)} />
          <Tab label={t("Sections Content")} {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <AppearanceForm
          styles={props.styles}
          appStyles={props.appStyles}
          appButtons={props.appButtons}
          data={getData(data.siteCMS, "appearance")}
          pageId={props.pageId}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContentForm
          styles={props.styles}
          appButtons={props.appButtons}
          data={getData(data.siteCMS, "content")}
          pageId={props.pageId}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <JsonContent styles={props.styles} pageId={props.pageId} />
      </TabPanel>
    </Container>
  );
}

export default ContentManager;
