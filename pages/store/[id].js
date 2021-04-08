import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Container from "@material-ui/core/Container";
import client from "../../apollo-client";
import queries from "../../graphql/queries";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Slider from "../../components/common/Slider";
import SearchFilter from "../../components/common/SearchFilter";

import VideoGallery from "../../components/common/VideoGallery";
import ItemsGrid from "../../components/common/ItemsGrid";
import BackToTop from "../../components/common/BackToTop";

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
  let gridItems = [];
  const [pageId, setPageId] = useState(0);
  const [filters, setFilters] = useState([]);
  const [categoryFilteredItems, setCategoryFilteredItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(null);
  const [filtersApplied, setFiltersApplied] = useState([]);
  const [linkTop, settLinkTop] = useState("none");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    //const id = props.match.params.id ? props.match.params.id : 0;
    const { id } = router.query;
    setPageId(id);
    setFilteredItems(null);
    setFilters([]);
    window.onscroll = () => {
      settLinkTop(window.pageYOffset > 250 ? "block" : "none");
    };
  }, [id]);
  function categoryChangeHandler({ target }) {
    gridItems = props.data.storeGrid.filter(
      (store) => store.categoryId === target.value
    );
    let category = props.data.page.categories.find(
      (category) => category.id === target.value
    );
    setCategoryFilteredItems(gridItems);
    setFilteredItems(gridItems);
    console.log(category.filters);
    setFilters(category.filters);
  }

  function filterChangeHandler(type, value) {
    console.log(type, value);
    let filtered = categoryFilteredItems.filter((element) => {
      //console.log(filtersApplied);
      if (filtersApplied.length === 0) {
        console.log("solo un filtro");
      } else {
        console.log("mas de un filtro");
      }
      return element[type.toLowerCase()] === value;
    });
    setFiltersApplied([{ type, value }, ...filtersApplied]);
    setFilteredItems(filtered);
  }

  return (
    <div
      style={{
        background: props.data.page.styles.body.background,
        fontFamily: props.data.page.styles.body.fontfamily,
        color: props.data.page.styles.body.color,
      }}
    >
      <BackToTop
        backgroundColor={props.data.page.styles.header.topbar.background}
        display={linkTop}
      />
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
          <SearchFilter
            onCategoryChange={categoryChangeHandler}
            onFilterChange={filterChangeHandler}
            categories={props.data.page.categories}
            filters={filters}
            appStyles={appStyles.searchFilter}
          />
          <ItemsGrid
            items={
              filteredItems !== null ? filteredItems : props.data.storeGrid
            }
            pageId={props.data.page.id}
            appStyles={appStyles}
            modalStyles={props.data.page.styles.modalstyles}
          />
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
