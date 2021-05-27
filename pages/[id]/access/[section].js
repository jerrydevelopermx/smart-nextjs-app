import { useRouter } from "next/router";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import { useQuery } from "@apollo/client";
import appStyles from "../../../styles/app.js";
import queries from "../../../graphql/queries.js";
import js from "../../../js/components.js";
import LoginForm from "../../../components/common/LoginForm";
import RegisterForm from "../../../components/common/RegisterForm";
import ResetPasswordForm from "../../../components/common/ResetPasswordForm";
import { initializeApollo } from "../../../lib/apolloClient";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: queries.GET_PAGE_INFO,
    variables: {
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
        "admin",
      ])),
    },
  };
}

function CredentialsPage(props) {
  const router = useRouter();
  const { id, section } = router.query;

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
      <main style={{ marginTop: "120px" }}>
        {section === "login" ? (
          <LoginForm
            styles={props.data.page.styles.header}
            pageId={props.data.page.id}
          />
        ) : section === "signup" ? (
          <RegisterForm styles={props.data.page.styles.header} />
        ) : (
          <ResetPasswordForm
            styles={props.data.page.styles.header}
            pageId={props.data.page.id}
          />
        )}
      </main>
      <Footer
        appStyles={appStyles.footer}
        styles={props.data.page.styles.footer}
        content={js.footer}
        socialMedia={props.data.page.footer}
      />
    </div>
  );
}

export default CredentialsPage;
