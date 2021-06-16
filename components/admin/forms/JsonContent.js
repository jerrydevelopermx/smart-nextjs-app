import React, { useState } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";
import {
  InputLabel,
  Button,
  FormControl,
  Select,
  Grid,
  Container,
} from "@material-ui/core";
import queries from "../../../graphql/queries";
import mutations from "../../../graphql/mutations";
import computedStyles from "../../../styles/computedStyles";
import styles from "../../../styles/app";
import components from "../../../js/components";
import { useTranslation } from "next-i18next";

function JsonContent(props) {
  let submitButtonCSS = computedStyles.submitButton(props);
  const { t } = useTranslation(["admin", "header", "footer"]);
  const [getHTMLContent, { data }] = useLazyQuery(
    queries.GET_HTML_CONTENT_BY_ID_SECTION
  );
  const [updateContent] = useMutation(mutations.UPDATE_HTML_CONTENT);
  const [selectedSection, setSelectedSection] = useState("");
  const [content, setContent] = useState("");

  function handleEditorChange(content, editor) {
    setContent(content);
  }

  function saveContent() {
    updateContent({
      variables: {
        id: props.pageId,
        sectionId: selectedSection,
        content: {
          content: content,
        },
      },
    }).then(
      (res) => {
        toast.success("HTML updated succesfully!", components.toastifyConfig);
      },
      (err) => console.log(err)
    );
  }

  function handleChange(event) {
    getHTMLContent({
      variables: {
        id: props.pageId,
        sectionId: event.target.value,
      },
    });

    setSelectedSection(event.target.value);
  }

  /*if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>; */
  return (
    <Container component="main" maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={6} sm={3} md={6}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">
              {t("Section")}
            </InputLabel>
            <Select
              native
              inputProps={{
                name: "blog",
                id: "outlined-age-native-simple",
              }}
              value={selectedSection}
              onChange={handleChange}
            >
              <option aria-label="None" value="" />
              <option value={"blog"}> {t("header:Blog")}</option>
              <option value={"contactUs"}>{t("header:Contact Us")}</option>
              <option value={"ourMission"}>{t("header:Our Mission")}</option>
              <option value={"whoWeAre"}>{t("header:Who We Are")}</option>
              <option value={"board"}>{t("header:Our Board & Staff")}</option>
              <option value={"features"}>{t("header:Sites Features")}</option>
              <option value={"membership"}>
                {t("header:Sites Membership")}
              </option>
              <option value={"history"}>{t("footer:History")}</option>
              <option value={"sitePolicies"}>
                {t("footer:Site Policies")}
              </option>
              <option value={"membershipPolicies"}>
                {t("footer:Membership Policies")}
              </option>
              <option value={"customersPolicies"}>
                {t("footer:Customers Policies")}
              </option>
              <option value={"visitorsPolicies"}>
                {t("footer:Visitors Policies")}
              </option>
            </Select>
          </FormControl>
          <Editor
            apiKey="pav6ogx2bhi6boahep8gt9hz5tprm5ljw9xmyy4lljbl9bxv"
            init={{
              height: 450,
              width: 1100,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
            }}
            value={data && data.siteHtmlContent.content}
            onEditorChange={handleEditorChange}
          />
        </Grid>
      </Grid>
      {/*<div>{content}</div>*/}
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={12} style={styles.cmsSubmitButton}>
          <Button className={submitButtonCSS.root} onClick={saveContent}>
            {t("Submit")}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default JsonContent;
