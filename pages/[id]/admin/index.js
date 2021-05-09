import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { initializeApollo } from "../../../lib/apolloClient";
import queries from "../../../graphql/queries";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import LeftNavBar from "../../../components/admin/LeftNavBar";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import appStyles from "../../../styles/app.js";
import js from "../../../js/components.js";

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: queries.GET_HOME_PAGE_INFO,
    variables: { storeId: context.query.id === "main" ? 0 : context.query.id },
  });

  return {
    props: {
      data: data,
      ...(await serverSideTranslations(data.page.lang, [
        "admin",
        "header",
        "footer",
      ])),
    },
  };
}
function AdminHomePage({ ...props }) {
  //let user = JSON.parse(localStorage.getItem("user"));
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;

  return (
    <div
      style={{
        background: props.data.page.styles.body.background,
        fontFamily: props.data.page.styles.body.fontfamily,
        color: props.data.page.styles.body.color,
      }}
    >
      <Header
        logo={props.data.page.logo}
        blogLink={props.data.page.bloglink}
        menu={js.header}
        pageId={props.data.page.id}
        //inputRef={videoRef}
        styles={props.data.page.styles.header}
        modalStyles={props.data.page.styles.modalstyles}
        appStyles={appStyles.header}
        fontFamily={props.data.page.styles.body.fontfamily}
      />
      <main
        style={{
          marginTop: "100px",
          height: "100%",
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            sm={2}
            md={2}
            style={{
              background: props.data.page.styles.header.topbar.background,
            }}
          >
            <Hidden only={["xs"]}>
              <LeftNavBar
                styles={props.data.page.styles.header}
                pageId={props.data.page.id}
                fontFamily={props.data.page.styles.body.fontfamily}
              />
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={2} md={10}></Grid>
        </Grid>
      </main>
      <Footer
        pageId={props.data.page.id}
        appStyles={appStyles.footer}
        styles={props.data.page.styles.footer}
        modalStyles={props.data.page.styles.modalstyles}
        content={js.footer}
        socialMedia={props.data.page.footer}
      />
    </div>
  );
}

export default AdminHomePage;
