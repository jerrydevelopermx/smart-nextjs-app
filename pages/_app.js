import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default appWithTranslation(App);
