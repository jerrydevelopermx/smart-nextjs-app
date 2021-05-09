import React, { useState, useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { useParams } from "react-router";
import { Grid, Container, Button } from "@material-ui/core/";
import mutations from "../../../graphql/mutations";
import queries from "../../../graphql/queries";
import computedStyles from "../../../styles/computedStyles";
import FormFieldsGroup from "./FormFieldsGroup";
import styles from "../../../styles/app";
import ImgContentEditRow from "./ImgContentEditRow";

function ProductEditForm(props) {
  console.log(props);
  let { action } = useParams();
  let textFieldCSS = computedStyles.textField(props);
  let submitButtonCSS = computedStyles.submitButton(props);
  let changeButtonCSS = computedStyles.changeButton(props);
  let checkboxCSS = computedStyles.checkbox(props);
  console.log(checkboxCSS);
  const [categories, setCategories] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [product, setProduct] = useState({
    productnumber: "",
    departmentid: "",
    productsku: "",
    productean: "",
    productshortname: "",
    productdescription: "",
    prodcategorycode: "", //dropdown
    prodsubcategorycode: "", //dropdown
    brandcode: "", //dropdown
    modelcode: "", //dropdown
    yearcode: "", //dropdown
    stylecode: "", //dropdown
    gendercode: "", //dropdown
    packagingcode: "", //dropdown
    materialcode: "", //dropdown
    colorCode: "", //dropdown
    sizeCode: "", //dropdown
    flavorCode: "", //dropdown
    attribMask: "", //  NO
    attributeMapCode: "", //_NO
    prodUOMCode: "",
    prodUnitsInStockNumber: "",
    inventoryCostMethod: "",
    prodUnitCostAmount: "",
    prodMSRPAmount: "",
    prodUnitPriceAmount: "",
    prodCurrencyType: "", //dropdown
    prodDiscountType: "", //dropdown
    prodDiscountCondition: "",
    prodDiscountNumber: "",
    prodPriceCorrectionFactor: "",
    prodUnitsOnOrder: "",
    prodReplenishType: "", //dropdown
    prodUISThresholdNumber: "",
    pendReplenOrderNumber: "",
    prodRankingType: "", //dropdown
    prodStatus: "", //dropdown
    prodLocation1Text: "",
    prodLocation2Text: "",
    prodSpecifications: "",
    prodNotes: "",
    prodDefaultContentLink: "",
    prodDefaultHoverLink: "",
    supplier1ID: "", //dropdown
    supplier1ProdID: "", //dropdown
    supplier2ID: "", //dropdown
    supplier2ProdID: "", //dropdown
    campaigning: false, //checkbox
    campaignID: "", //dropdown
    gridPromotedPositionIndex: "",
    gridDefaulPositiontIndex: "",
    prodPriorityNumber: "",
  });

  useEffect(() => {
    setProduct(props.data && props.data.producto);
    setCategories(props.data && props.data.prodCategories);
    setCampaigns(props.data && props.data.campaigns);
  }, [props.data]);

  const [getSubcategories, { data }] = useLazyQuery(
    queries.GET_SUBCATEGORIES_BY_CATEGORY_ID
  );

  let fields = [
    {
      id: "productnumber",
      name: "productnumber",
      value: (product && product.productnumber) || "",
      label: "Product Number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "productshortname",
      name: "productshortname",
      value: (product && product.productshortname) || "",
      label: "Short Name",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "productsku",
      name: "productsku",
      value: (product && product.productsku) || "",
      label: "SKU",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "productean",
      name: "productean",
      value: (product && product.productean) || "",
      label: "EAN",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodUOMCode",
      name: "prodUOMCode",
      value: (product && product.prodUOMCode) || "",
      label: "UOM Code",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodRankingType",
      name: "prodRankingType",
      value: (product && product.prodRankingType) || "",
      label: "Ranking type",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },

    // ************
    {
      isTextarea: true,
      id: "productdescription",
      name: "productdescription",
      value: (product && product.productdescription) || "",
      label: "Description",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      isTextarea: true,
      id: "prodSpecifications",
      name: "prodSpecifications",
      value: (product && product.prodSpecifications) || "",
      label: "Specifications",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      isTextarea: true,
      id: "prodNotes",
      name: "prodNotes",
      value: (product && product.prodNotes) || "",
      label: "Notes",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      type: "dropdown",
      options: categories,
      valueKey: "prodcategorycode",
      labelKey: "prodcategoryname",
      id: "prodcategorycode",
      name: "prodcategorycode",
      value: (product && product.prodcategorycode) || "",
      label: "Category",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      type: "dropdown",
      options: data && data.prodSubcategories,
      valueKey: "prodsubcategorycode",
      labelKey: "prodsubcategoryname",
      id: "prodsubcategorycode",
      name: "prodsubcategorycode",
      value: (product && product.prodsubcategorycode) || "",
      label: "Subcategory",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      type: "dropdown",
      options: [
        { value: "1", label: "Active" },
        { value: "2", label: "On Sale" },
        { value: "3", label: "Not available" },
        { value: "4", label: "Out of Stock" },
        { value: "5", label: "Backordered" },
        { value: "6", label: "Suspended" },
        { value: "7", label: "Outdated" },
        { value: "8", label: "Decommisioned" },
        { value: "9", label: "Invalid" },
      ],
      valueKey: "value",
      labelKey: "label",
      id: "prodStatus",
      name: "prodStatus",
      value: (product && product.prodStatus) || "",
      label: "Status",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      type: "subtitle",
      label: "Location",
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      type: "subtitle",
      label: "Supplier",
      grid: { xs: 6, sm: 3, md: 8 },
    },
    {
      id: "prodLocation1Text",
      name: "prodLocation1Text",
      value: (product && product.prodLocation1Text) || "",
      label: "Row number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodLocation2Text",
      name: "prodLocation2Text",
      value: (product && product.prodLocation2Text) || "",
      label: "Shelve number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "supplier1ID",
      name: "supplier1ID",
      value: (product && product.supplier1ID) || "",
      label: "Supplier 1",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "supplier1ProdID",
      name: "supplier1ProdID",
      value: (product && product.supplier1ProdID) || "",
      label: "Prod # S1",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "supplier2ID",
      name: "supplier2ID",
      value: (product && product.supplier2ID) || "",
      label: "Supplier 2",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "supplier2ProdID",
      name: "supplier2ProdID",
      value: (product && product.supplier2ProdID) || "",
      label: "Prod # S2",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },

    // ************
    {
      type: "subtitle",
      label: "Attributes",
      grid: { xs: 6, sm: 3, md: 12 },
    },
    {
      id: "brandcode",
      name: "brandcode",
      value: (product && product.brandcode) || "",
      label: "Brand",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "modelcode",
      name: "modelcode",
      value: (product && product.modelcode) || "",
      label: "Model",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "yearcode",
      name: "yearcode",
      value: (product && product.yearcode) || "",
      label: "Year",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "stylecode",
      name: "stylecode",
      value: (product && product.stylecode) || "",
      label: "Style",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "gendercode",
      name: "gendercode",
      value: (product && product.gendercode) || "",
      label: "Gender",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "packagingcode",
      name: "packagingcode",
      value: (product && product.packagingcode) || "",
      label: "Packaging Code",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "materialcode",
      name: "materialcode",
      value: (product && product.materialcode) || "",
      label: "Material",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "colorCode",
      name: "colorCode",
      value: (product && product.colorCode) || "",
      label: "Color",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "sizeCode",
      name: "sizeCode",
      value: (product && product.sizeCode) || "",
      label: "Size",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      id: "flavorCode",
      name: "flavorCode",
      value: (product && product.flavorCode) || "",
      label: "Flavor",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      type: "subtitle",
      label: "Stock in Units",
      grid: { xs: 6, sm: 3, md: 4 },
    },
    {
      type: "subtitle",
      label: "Stock in Money",
      grid: { xs: 6, sm: 3, md: 8 },
    },
    {
      id: "prodUnitsInStockNumber",
      name: "prodUnitsInStockNumber",
      value: (product && product.prodUnitsInStockNumber) || "",
      label: "Available",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodReplenishType",
      name: "prodReplenishType",
      value: (product && product.prodReplenishType) || "",
      label: "Restock criteria",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodUnitCostAmount",
      name: "prodUnitCostAmount",
      value: (product && product.prodUnitCostAmount) || "",
      label: "Unit Cost",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodMSRPAmount",
      name: "prodMSRPAmount",
      value: (product && product.prodMSRPAmount) || "",
      label: "MSRP",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodUnitPriceAmount",
      name: "prodUnitPriceAmount",
      value: (product && product.prodUnitPriceAmount) || "",
      label: "Unit price",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodCurrencyType",
      name: "prodCurrencyType",
      value: (product && product.prodCurrencyType) || "",
      label: "Currency",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodUISThresholdNumber",
      name: "prodUISThresholdNumber",
      value: (product && product.prodUISThresholdNumber) || "",
      label: "Restock Threshold",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "pendReplenOrderNumber",
      name: "pendReplenOrderNumber",
      value: (product && product.pendReplenOrderNumber) || "",
      label: "Replenishmnt order",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodDiscountType",
      name: "prodDiscountType",
      value: (product && product.prodDiscountType) || "",
      label: "Discount code",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodDiscountCondition",
      name: "prodDiscountCondition",
      value: (product && product.prodDiscountCondition) || "",
      label: "Discount condition",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodDiscountNumber",
      name: "prodDiscountNumber",
      value: (product && product.prodDiscountNumber) || "",
      label: "Amount or %",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodPriceCorrectionFactor",
      name: "prodPriceCorrectionFactor",
      value: (product && product.prodPriceCorrectionFactor) || "",
      label: "Correction factor",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "prodUnitsOnOrder",
      name: "prodUnitsOnOrder",
      value: (product && product.prodUnitsOnOrder) || "",
      label: "Product units",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },

    {
      type: "subtitle",
      label: "Product Visibility",
      grid: { xs: 6, sm: 3, md: 12 },
    },
    {
      id: "gridDefaulPositiontIndex",
      name: "gridDefaulPositiontIndex",
      value: (product && product.gridDefaulPositiontIndex) || "",
      label: "Default position",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      id: "gridPromotedPositionIndex",
      name: "gridPromotedPositionIndex",
      value: (product && product.gridPromotedPositionIndex) || "",
      label: "Promoted position",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },

    {
      id: "prodPriorityNumber",
      name: "prodPriorityNumber",
      value: (product && product.prodPriorityNumber) || "",
      label: "Priority number",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 2 },
    },
    {
      type: "checkbox",
      id: "campaigning",
      name: "campaigning",
      value: (product && product.campaigning) || "",
      label: "Is Campaigning",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
    {
      type: "dropdown",
      options: campaigns,
      valueKey: "id",
      labelKey: "campaignNumber",
      id: "campaignID",
      name: "campaignID",
      value: (product && product.campaignID) || "",
      label: "Campaign",
      required: false,
      onChange: handleChange,
      grid: { xs: 6, sm: 3, md: 3 },
    },
  ];

  function handleChange(event) {
    console.log(event.target.name, event.target.value, event.target.checked);
    setProduct({
      ...product,
      [event.target.name]:
        event.target.name !== "campaigning"
          ? event.target.value
          : event.target.checked,
    });

    console.log(product);

    if (event.target.name === "prodcategorycode") {
      getSubcategories({
        variables: {
          categoryCode: event.target.value,
        },
        onCompleted: (data) => {
          console.log("data ", data);
        },
      });
    }
  }
  function handleSave() {
    console.log(product);
  }

  return (
    <>
      <Container component="main" maxWidth="xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //addTodo({ variables: { type: input.value } });
            //input.value = '';
          }}
        >
          <h3>{action.charAt(0).toUpperCase() + action.slice(1)} Product</h3>
          <FormFieldsGroup
            fields={fields}
            css={textFieldCSS.root}
            cssCheckbox={checkboxCSS.root}
          />
          {[
            { name: "prodDefaultContentLink", label: "Default Image" },
            { name: "prodDefaultHoverLink", label: "Hover Image" },
          ].map((field, index) => (
            <ImgContentEditRow
              key={field.name}
              id={field.name}
              label={field.label}
              css={textFieldCSS.root}
              style={styles.cmsSlidesPreview}
              cssButton={changeButtonCSS.root}
              defaultValue={(product && product[field.name]) || ""}
            />
          ))}
          <h4 style={{ margin: "3px" }}>Product Gallery</h4>
          {[
            { name: "img1ContentLink", label: "Image 1" },
            { name: "img2ContentLink", label: "Image 2" },
            { name: "img3ContentLink", label: "Image 3" },
            { name: "img4ContentLink", label: "Image 4" },
            { name: "img5ContentLink", label: "Image 5" },
          ].map((field, index) => (
            <ImgContentEditRow
              key={field.name}
              id={field.name}
              label={field.label}
              css={textFieldCSS.root}
              style={styles.cmsSlidesPreview}
              cssButton={changeButtonCSS.root}
              defaultValue={(product && product.prodDefaultContentLink) || ""}
            />
          ))}
          <Grid item xs={12} sm={6} md={12} style={styles.cmsSubmitButton}>
            <Button className={submitButtonCSS.root} onClick={handleSave}>
              Submit
            </Button>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default ProductEditForm;
