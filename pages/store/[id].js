import { useRouter } from "next/router";
import Container from "@material-ui/core/Container";
import client from "../../apollo-client";
import queries from "../../graphql/queries";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Slider from "../../components/common/Slider";
import VideoGallery from "../../components/common/VideoGallery";
import appStyles from "../../styles/app.js";
import js from "../../js/components.js";

export async function getServerSideProps(context) {
  const { data } = await client.query({
    query: queries.GET_HOME_PAGE_INFO,
    variables: { storeId: context.query.id === "home" ? 0 : context.query.id },
  });

  return {
    props: {
      data: data,
    },
  };
}

function StorePage(props) {
  console.log(props);
  const router = useRouter();
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
      <main>
        <Slider
          id="home-scroll"
          autoplay={true}
          type="topSlider"
          maxHeight="350px"
          slides={props.data.page.slides}
          styles={props.data.page.styles.slider}
          appStyles={appStyles.slider}
        />
        <Container style={appStyles.container} maxWidth={false}>
          CONTENT
          <VideoGallery
            //inputRef={videoRef}
            video={props.data.page.video}
            styles={props.data.page.styles.video}
            appStyles={appStyles.video}
          />
          <Slider
            id="events-scroll"
            maxHeight="350px"
            autoplay={true}
            slides={props.data.page.offers}
            styles={props.data.page.styles.slider}
            appStyles={appStyles.slider}
          />
        </Container>
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

export default StorePage;
/*
function Stores() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Store {id} </h1>;
}
export default Stores;
*/
