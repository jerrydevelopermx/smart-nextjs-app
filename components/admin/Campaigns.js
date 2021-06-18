import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DataTable from "../common/DataTable";
import { CellParams } from "@material-ui/data-grid";
import CampaignEditForm from "./forms/CampaignEditForm";
import queries from "../../graphql/queries";
import EditForms from "../EditForms";
import { useTranslation } from "next-i18next";

function Campaigns(props) {
  console.log(props);
  const { t } = useTranslation("admin");
  const { loading, error, data } = useQuery(
    queries.GET_CAMPAIGNS_DATA_BY_DEPT,
    {
      variables: {
        departmentID: props.deptId ? props.deptId : props.pageId,
      },
    }
  );
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  let addButton = {
    root: {
      "&:hover": {
        backgroundColor: props.buttons.add.root.hover.backgroundColor,
      },
      color: props.buttons.add.root.color,
      backgroundColor: props.buttons.add.root.backgroundColor,
    },
  };
  let editButton = {
    root: {
      "&:hover": {
        backgroundColor: props.buttons.change.root.hover.backgroundColor,
      },
      color: props.buttons.change.root.color,
      backgroundColor: props.buttons.change.root.backgroundColor,
    },
  };
  let deleteButton = {
    root: {
      "&:hover": {
        backgroundColor: props.buttons.delete.root.hover.backgroundColor,
      },
      color: props.buttons.delete.root.color,
      backgroundColor: props.buttons.delete.root.backgroundColor,
    },
  };

  const AddButton = withStyles((theme) => addButton)(Button);
  const EditButton = withStyles((theme) => editButton)(Button);
  const DeleteButton = withStyles((theme) => deleteButton)(Button);

  const columns = [
    { field: "id", headerName: "ID", width: 70, key: "campaignID" },
    { field: "campaignnumber", headerName: t("Number"), width: 140 },
    { field: "departmentid", headerName: t("Dept"), width: 130 },
    {
      field: "campaigntype",
      headerName: t("Type"),
      width: 90,
    },
    { field: "campaignoccurrence", headerName: t("Ocurrence"), width: 140 },
    { field: "gridpositionindex", headerName: t("Position"), width: 140 },
    { field: "promotedfromdatime", headerName: t("From Date"), width: 140 },
    { field: "promotedtodatime", headerName: t("To Date"), width: 140 },
    { field: "campaignstatus", headerName: t("Status"), width: 140 },
    {
      field: "",
      headerName: "",
      sortable: false,
      width: 200,
      disableClickEventBubbling: true,
      //valueGetter: (params) =>
      // `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
      renderCell: (params) => {
        return (
          <>
            <Link
              href={`/[id]/admin/[section]/[params]`}
              as={`/${
                props.pageId == 0 ? "main" : props.pageId
              }/admin/campaigns/edit/${params.getValue("id")}`}
            >
              <EditButton component="a">{t("Edit")}</EditButton>
            </Link>
            <DeleteButton>{t("Delete")}</DeleteButton>
          </>
        );
      },
    },

    /*{
      field: "",
      headerName: "",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        const onClick = () => {
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow = {};

          fields.forEach((f) => {
            thisRow[f] = params.getValue(f);
          });

          return alert(JSON.stringify(thisRow, null, 4));
        };

        return <Button onClick={onClick}>Click</Button>;
      },
    },*/
  ];

  return (
    <Container component="main" maxWidth="lg">
      {props.action === undefined ? (
        <>
          <Container style={{ textAlign: "center" }}>
            <h2>{`${t("Campaigns")} - ${t("Creation and Maintenance")} `}</h2>
          </Container>
          <Link
            href={`/[id]/admin/[section]/[params]`}
            as={`/${
              props.pageId == 0 ? "main" : props.pageId
            }/admin/campaigns/add`}
          >
            <AddButton component="a">{t("Add Campaign")}</AddButton>
          </Link>
          <DataTable
            columns={columns}
            rows={data.campaigns}
            rowkey="campaignID"
          />
        </>
      ) : (
        <EditForms
          type="CAMPAIGN"
          action={props.action}
          styles={props.styles}
        />
      )}
    </Container>
  );
}
export default Campaigns;
