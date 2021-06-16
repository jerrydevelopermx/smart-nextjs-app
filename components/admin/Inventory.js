import React, { useState } from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { CellParams } from "@material-ui/data-grid";
import { Container, Paper, Tabs, Tab, Button } from "@material-ui/core";
import DataTable from "../common/DataTable";
import ReplenishmentOrder from "./forms/ReplenishmentOrder";
import EditForms from "../EditForms";
import TabPanel from "./TabPanel";
import GraphqlLoading from "../common/GraphqlLoading";
import GraphqlError from "../common/GraphqlError";
import queries from "../../graphql/queries";
import computedStyles from "../../styles/computedStyles";
import { useTranslation } from "next-i18next";

function Inventory(props) {
  const { t } = useTranslation("admin");
  let changeButtonCSS = computedStyles.changeButton(props);
  let deleteButtonCSS = computedStyles.deleteButton(props);
  let addButtonCSS = computedStyles.addButton(props);
  let activeTabCSS = computedStyles.activeTab(props);

  const [orderPageModal, setOrderPageModal] = useState({
    open: false,
    action: "",
    id: 0,
  });
  const [activeTab, setActiveTab] = React.useState(0);

  const { loading, error, data } = useQuery(
    queries.GET_INVENTORY_DATA_BY_DEPT,
    {
      variables: {
        departmentID: props.pageId,
      },
    }
  );

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  if (loading) return <GraphqlLoading />;
  if (error) return <GraphqlError />;

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "productnumber", headerName: t("Number"), width: 100 },
    { field: "productsku", headerName: "SKU", width: 120 },
    {
      field: "productshortname",
      headerName: t("Short Name"),
      width: 120,
    },
    { field: "productdescription", headerName: t("Description"), width: 160 },
    { field: "prodcategorycode", headerName: t("Category"), width: 120 },
    { field: "prodsubcategorycode", headerName: t("Subcategory"), width: 120 },

    /* { field: "brandcode", headerName: "Brd", width: 70 },
    { field: "modelcode", headerName: "Mod", width: 70 },
    { field: "yearcode", headerName: "Yr", width: 50 },
    { field: "stylecode", headerName: "Stl", width: 50 },
    { field: "gendercode", headerName: "Gnd", width: 50 },
    { field: "packagingcode", headerName: "Pck", width: 50 },
    { field: "materialcode", headerName: "Mat", width: 50 },
    { field: "colorcode", headerName: "Col", width: 50 },
    { field: "sizecode", headerName: "Sze", width: 50 },
    { field: "flavorcode", headerName: "Flv", width: 50 },*/

    {
      field: "",
      headerName: t("Actions"),
      sortable: false,
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <>
            <Link
              href=""
              as={
                props.pageId === "0"
                  ? `/admin/inventory/edit/${params.getValue("id")}`
                  : `/store/${
                      props.pageId
                    }/admin/inventory/edit/${params.getValue("id")}`
              }
            >
              <Button
                className={changeButtonCSS.root}
                style={{ margin: "10px" }}
                component="a"
              >
                {t("Edit")}
              </Button>
            </Link>
            <Button className={deleteButtonCSS.root} style={{ margin: "10px" }}>
              {t("Delete")}
            </Button>
          </>
        );
      },
    },
  ];

  const replenishmentsColumns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "repgendatime", headerName: t("Date"), width: 120 },
    { field: "supplierid", headerName: t("Supplier"), width: 100 },
    {
      field: "replenishmentordernr",
      headerName: t("Rep. Order Num"),
      width: 120,
    },
    { field: "replineitemnr", headerName: t("Invoice"), width: 100 },
    { field: "quantityordered", headerName: t("Quantity"), width: 100 },
    { field: "actualunitcost", headerName: t("Unit Cost"), width: 100 },
    { field: "quantityreceived", headerName: t("MSRP"), width: 90 },
    { field: "productid", headerName: "SKU", width: 90 },
    {
      field: "",
      headerName: t("Actions"),
      sortable: false,
      width: 250,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <>
            <Button
              className={changeButtonCSS.root}
              style={{ margin: "10px" }}
              onClick={() => openOrderPage("edit", params.getValue("id"))}
            >
              {t("Edit")}
            </Button>
            <Button className={deleteButtonCSS.root} style={{ margin: "10px" }}>
              {t("Delete")}
            </Button>
          </>
        );
      },
    },
  ];
  function closeOrderPage() {
    setOrderPageModal({
      ...orderPageModal,
      open: false,
    });
  }

  function openOrderPage(action, id) {
    setOrderPageModal({
      ...orderPageModal,
      open: true,
      action: action,
      id: id,
    });
  }
  return (
    <Container component="main" maxWidth="lg">
      <>
        <Container style={{ textAlign: "center" }}>
          <h2>{t("Inventory Management")}</h2>
        </Container>
        <Paper square>
          <Tabs
            TabIndicatorProps={{ className: activeTabCSS.indicator }}
            value={activeTab}
            onChange={handleTabChange}
            aria-label="Inventory tabs"
          >
            <Tab label={t("Product Maintenance")} {...a11yProps(0)} />
            <Tab label={t("Product Replenishment")} {...a11yProps(1)} />
          </Tabs>
        </Paper>
        <TabPanel value={activeTab} index={0}>
          {props.action === undefined ? (
            <>
              <Link
                href=""
                as={
                  props.pageId === "0"
                    ? "/admin/inventory/add"
                    : `/store/${props.pageId}/admin/inventory/add`
                }
              >
                <Button className={addButtonCSS.root} component="a">
                  {t("New Product")}
                </Button>
              </Link>

              <DataTable columns={columns} rows={data.productos} />
            </>
          ) : (
            <EditForms
              type="PRODUCT"
              action="add"
              styles={props.styles}
              appButtons={props.appButtons}
            />
          )}
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <>
            <Button
              className={addButtonCSS.root}
              onClick={() => openOrderPage("add", undefined)}
            >
              {t("New Order")}
            </Button>
            <DataTable
              columns={replenishmentsColumns}
              rows={data.replenishments}
            />{" "}
          </>
          <ReplenishmentOrder
            appButtons={props.buttons}
            open={orderPageModal.open}
            params={orderPageModal}
            styles={props.styles}
            onClose={closeOrderPage}
          />
        </TabPanel>
      </>
    </Container>
  );
}
export default Inventory;
