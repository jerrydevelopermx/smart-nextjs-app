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

function Campaigns(props) {
  console.log(props);
  const { loading, error, data } = useQuery(
    queries.GET_CAMPAIGNS_DATA_BY_DEPT,
    {
      variables: {
        departmentID: props.pageId,
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
    { field: "campaignnumber", headerName: "Number", width: 140 },
    { field: "departmentid", headerName: "Dept", width: 130 },
    {
      field: "campaigntype",
      headerName: "Type",
      width: 90,
    },
    { field: "campaignoccurrence", headerName: "Ocurrence", width: 140 },
    { field: "gridpositionindex", headerName: "Position", width: 140 },
    { field: "promotedfromdatime", headerName: "From", width: 140 },
    { field: "promotedtodatime", headerName: "To", width: 140 },
    { field: "campaignstatus", headerName: "Status", width: 140 },
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
              <EditButton component="a">Edit</EditButton>
            </Link>
            <DeleteButton>Delete</DeleteButton>
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
          <h3>Campaigns - Creation and Maintenance</h3>
          <Link
            href={`/[id]/admin/[section]/[params]`}
            as={`/${
              props.pageId == 0 ? "main" : props.pageId
            }/admin/campaigns/add`}
          >
            <AddButton component="a">Add Campaign</AddButton>
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
