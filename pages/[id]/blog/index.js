import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ReactHtmlParser from "react-html-parser";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import GraphqlLoading from "../../../components/common/GraphqlLoading";
import GraphqlError from "../../../components/common/GraphqlError";
import appStyles from "../../../styles/app.js";
import queries from "../../../graphql/queries.js";
import js from "../../../js/components.js";
import { initializeApollo } from "../../../lib/apolloClient";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: queries.GET_CONTENT_BY_SECTION_AND_PAGE,
    variables: {
      sectionId: "blog",
      storeId: context.query.id === "main" ? 0 : context.query.id,
    },
  });

  return {
    props: {
      data: data,
      ...(await serverSideTranslations(data.page.lang, [
        "common",
        "header",
        "footer",
      ])),
    },
  };
}

function BlogPage({ ...props }) {
  console.log(props);
  const router = useRouter();
  const { section, id } = router.query;

  const useStyles = makeStyles((theme) => ({
    header: {
      [theme.breakpoints.only("xs")]: {
        marginTop: "70px",
      },
      [theme.breakpoints.up("sm")]: {
        marginTop: "70px",
      },
      [theme.breakpoints.up("md")]: {
        marginTop: "80px",
      },

      [theme.breakpoints.up("lg")]: {
        marginTop: "100px",
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "130px",
      },
    },
  }));
  const classes = useStyles();

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
        styles={props.data.page.styles.header}
        modalStyles={props.data.page.styles.modalstyles}
        appStyles={appStyles.header}
        fontFamily={props.data.page.styles.body.fontfamily}
      />
      <Container component="main" maxWidth="lg" className={classes.header}>
        {props.data.siteHtmlContent &&
          ReactHtmlParser(props.data.siteHtmlContent.content)}
      </Container>
      <Footer
        appStyles={appStyles.footer}
        styles={props.data.page.styles.footer}
        content={js.footer}
        socialMedia={props.data.page.footer}
      />
    </div>
  );
}

export default BlogPage;
