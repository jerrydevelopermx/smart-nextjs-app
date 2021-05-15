import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Button, Grid, Container } from "@material-ui/core";
import { toast } from "react-toastify";
import mutations from "../../../graphql/mutations";
import computedStyles from "../../../styles/computedStyles";
import styles from "../../../styles/app";
import components from "../../../js/components";

import MediaContentEditRow from "./MediaContentEditRow";
import FormFieldsGroup from "./FormFieldsGroup";
import { useTranslation } from "next-i18next";

function ContentForm(props) {
  console.log(props);
  const { t } = useTranslation("admin");
  let textFieldCSS = computedStyles.textField(props);
  let submitButtonCSS = computedStyles.submitButton(props);
  let changeButtonCSS = computedStyles.changeButton(props);
  let urlRefs = {};

  const [content, setContent] = useState({
    sitetitletext: "",
    sitemetadescriptiontext: "",
    bloglink: "",
    tourdefaultlink: "",
    event1defaultlink: "",
    event2defaultlink: "",
    event3defaultlink: "",
    slide1defaultlink: "",
    slide2defaultlink: "",
    slide3defaultlink: "",
    slide4defaultlink: "",
    slide5defaultlink: "",
    sitefacebooklink: "",
    sitetwitterlink: "",
    siteinstagramlink: "",
    sitepinterestlink: "",
    sitecopyright: "",
  });

  const [viewContent, setViewContent] = useState({
    slide1defaultlink: "",
    slide2defaultlink: "",
    slide3defaultlink: "",
    slide4defaultlink: "",
    slide5defaultlink: "",
    tourdefaultlink: "",
    event1defaultlink: "",
    event2defaultlink: "",
    event3defaultlink: "",
  });
  urlRefs = {
    slide1defaultlink: cleanUrlReferences(
      "slide1defaultlink",
      "url",
      props.data.slide1defaultlink
    ),
    slide2defaultlink: cleanUrlReferences(
      "slide2defaultlink",
      "url",
      props.data.slide2defaultlink
    ),
    slide3defaultlink: cleanUrlReferences(
      "slide3defaultlink",
      "url",
      props.data.slide3defaultlink
    ),
    slide4defaultlink: cleanUrlReferences(
      "slide4defaultlink",
      "url",
      props.data.slide4defaultlink
    ),
    slide5defaultlink: cleanUrlReferences(
      "slide5defaultlink",
      "url",
      props.data.slide5defaultlink
    ),
    tourdefaultlink: cleanUrlReferences(
      "tourdefaultlink",
      "url",
      props.data.tourdefaultlink
    ),
    event1defaultlink: cleanUrlReferences(
      "event1defaultlink",
      "url",
      props.data.event1defaultlink
    ),
    event2defaultlink: cleanUrlReferences(
      "event2defaultlink",
      "url",
      props.data.event2defaultlink
    ),
    event3defaultlink: cleanUrlReferences(
      "event3defaultlink",
      "url",
      props.data.event3defaultlink
    ),
  };

  let fieldsGroupTop = [
    {
      id: "sitetitletext",
      name: "sitetitletext",
      value: content.sitetitletext,
      label: t("Browser Tab Label"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "sitemetadescriptiontext",
      name: "sitemetadescriptiontext",
      value: content.sitemetadescriptiontext,
      label: t("Site Description"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      id: "bloglink",
      name: "bloglink",
      value: content.bloglink,
      label: t("Blog Link"),
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
  ];

  let fieldsGroupBottom = [
    {
      id: "sitefacebooklink",
      name: "sitefacebooklink",
      value: content.sitefacebooklink,
      label: "Facebook",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "siteinstagramlink",
      name: "siteinstagramlink",
      value: content.siteinstagramlink,
      label: "Instagram",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "sitetwitterlink",
      name: "sitetwitterlink",
      value: content.sitetwitterlink,
      label: "Twitter",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "sitepinterestlink",
      name: "sitepinterestlink",
      value: content.sitepinterestlink,
      label: "Pinterest",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "sitecopyright",
      name: "sitecopyright",
      value: content.sitecopyright,
      label: "Copyright",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 6 },
    },
  ];

  const [updateSiteContent] = useMutation(mutations.UPDATE_SITE_CONTENT);

  useEffect(() => {
    setViewContent({
      slide1defaultlink: cleanUrlReferences(
        "slide1defaultlink",
        "ref",
        props.data.slide1defaultlink
      ),
      slide2defaultlink: cleanUrlReferences(
        "slide2defaultlink",
        "ref",
        props.data.slide2defaultlink
      ),
      slide3defaultlink: cleanUrlReferences(
        "slide3defaultlink",
        "ref",
        props.data.slide3defaultlink
      ),
      slide4defaultlink: cleanUrlReferences(
        "slide4defaultlink",
        "ref",
        props.data.slide4defaultlink
      ),
      slide5defaultlink: cleanUrlReferences(
        "slide5defaultlink",
        "ref",
        props.data.slide5defaultlink
      ),
      tourdefaultlink: cleanUrlReferences(
        "tourdefaultlink",
        "ref",
        props.data.tourdefaultlink
      ),
      event1defaultlink: cleanUrlReferences(
        "event1defaultlink",
        "ref",
        props.data.event1defaultlink
      ),
      event2defaultlink: cleanUrlReferences(
        "event2defaultlink",
        "ref",
        props.data.event2defaultlink
      ),
      event3defaultlink: cleanUrlReferences(
        "event3defaultlink",
        "ref",
        props.data.event3defaultlink
      ),
    });
    setContent({
      sitetitletext: props.data.sitetitletext,
      sitemetadescriptiontext: props.data.sitemetadescriptiontext,
      bloglink: props.data.bloglink,
      tourdefaultlink: props.data.tourdefaultlink,
      event1defaultlink: props.data.event1defaultlink,
      event2defaultlink: props.data.event2defaultlink,
      event3defaultlink: props.data.event3defaultlink,
      slide1defaultlink: props.data.slide1defaultlink,
      slide2defaultlink: props.data.slide2defaultlink,
      slide3defaultlink: props.data.slide3defaultlink,
      slide4defaultlink: props.data.slide4defaultlink,
      slide5defaultlink: props.data.slide5defaultlink,
      sitefacebooklink: props.data.sitefacebooklink,
      sitetwitterlink: props.data.sitetwitterlink,
      siteinstagramlink: props.data.siteinstagramlink,
      sitepinterestlink: props.data.sitepinterestlink,
      sitecopyright: props.data.sitecopyright,
    });
  }, []);

  function cleanUrlReferences(key, type, url) {
    let splittedUrl = url.split("&ref=");
    urlRefs[key] = splittedUrl[0];
    return type === "url"
      ? splittedUrl[0]
      : splittedUrl[1]
      ? splittedUrl[1]
      : "";
  }
  function handleChange(event) {
    setContent({
      ...content,
      [event.target.name]: event.target.value,
    });
  }
  function handleViewChange(event) {
    setViewContent({
      ...viewContent,
      [event.target.name]: event.target.value,
    });
    let sp = content[event.target.name].split("&ref=");
    setContent({
      ...content,
      [event.target.name]:
        sp[0] + (event.target.value !== "" ? "&ref=" + event.target.value : ""),
    });
  }

  function handleSave() {
    updateSiteContent({
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
    );
  }
  return (
    <>
      <Container component="main" maxWidth="lg">
        <FormFieldsGroup fields={fieldsGroupTop} css={textFieldCSS.root} />
        <h4>{t("Slides")}</h4>
        {[1, 2, 3, 4, 5].map((number) => (
          <MediaContentEditRow
            key={`mediaElement${number}`}
            id={`slide${number}`}
            label={`Slide ${number}`}
            css={textFieldCSS.root}
            style={styles.cmsSlidesPreview}
            cssButton={changeButtonCSS.root}
            defaultValue={urlRefs[`slide${number}defaultlink`]}
            value={viewContent[`slide${number}defaultlink`]}
            onChange={handleViewChange}
          />
        ))}
        <h4>{t("Tour Video")}</h4>
        <MediaContentEditRow
          key={`videoElement1`}
          id={`tour`}
          label={`Video`}
          css={textFieldCSS.root}
          style={styles.cmsSlidesPreview}
          cssButton={changeButtonCSS.root}
          defaultValue={urlRefs[`tourdefaultlink`]}
          value={viewContent[`tourdefaultlink`]}
          isVideo={true}
          onChange={handleViewChange}
        />
        <h4>{t("Events")}</h4>
        {[1, 2, 3].map((number) => (
          <MediaContentEditRow
            key={`eventsElement${number}`}
            id={`event${number}`}
            label={`Event ${number}`}
            css={textFieldCSS.root}
            d
            style={styles.cmsSlidesPreview}
            cssButton={changeButtonCSS.root}
            defaultValue={urlRefs[`event${number}defaultlink`]}
            value={viewContent[`event${number}defaultlink`]}
            onChange={handleViewChange}
          />
        ))}
        <h4>{t("Social Networks")}</h4>
        <FormFieldsGroup fields={fieldsGroupBottom} css={textFieldCSS.root} />
        <Grid item xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
          <Button className={submitButtonCSS.root} onClick={handleSave}>
            {t("Submit")}
          </Button>
        </Grid>
      </Container>
    </>
  );
}

export default ContentForm;
