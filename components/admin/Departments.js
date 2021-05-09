import React from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DepartmentEditForm from "./forms/DepartmentEditForm";
import DataTable from "../common/DataTable";
import queries from "../../graphql/queries";

import { CellParams } from "@material-ui/data-grid";
import EditForms from "../EditForms";

function Departments(props) {
  const { loading, error, data } = useQuery(queries.GET_DEPARTMENTS_DATA, {
    /*variables: {
      storeId: id !== undefined ? id : 0,
    },*/
  });
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

  let cmsButton = {
    root: {
      "&:hover": {
        backgroundColor: props.buttons.cms.root.hover.backgroundColor,
      },
      color: props.buttons.cms.root.color,
      backgroundColor: props.buttons.cms.root.backgroundColor,
    },
  };

  let campaignsButton = {
    root: {
      "&:hover": {
        backgroundColor: props.buttons.campaigns.root.hover.backgroundColor,
      },
      color: props.buttons.campaigns.root.color,
      backgroundColor: props.buttons.campaigns.root.backgroundColor,
    },
  };
  let inventoryButton = {
    root: {
      "&:hover": {
        backgroundColor: props.buttons.inventory.root.hover.backgroundColor,
      },
      color: props.buttons.inventory.root.color,
      backgroundColor: props.buttons.inventory.root.backgroundColor,
    },
  };

  const AddButton = withStyles((theme) => addButton)(Button);
  const EditButton = withStyles((theme) => editButton)(Button);
  const DeleteButton = withStyles((theme) => deleteButton)(Button);
  const CmsButton = withStyles((theme) => cmsButton)(Button);
  const CampaignsButton = withStyles((theme) => campaignsButton)(Button);
  const InventoryButton = withStyles((theme) => inventoryButton)(Button);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "departmentid", headerName: "Department ID", width: 140 },
    { field: "departmentname", headerName: "Name", width: 130 },
    {
      field: "deptstatus",
      headerName: "Status",
      width: 80,
    },
    { field: "createddatime", headerName: "Created", width: 130 },
    /*{ field: "modifiedDatime", headerName: "Updated", width: 100 },
    { field: "createdByID", headerName: "Created by", width: 100 },*/
    {
      field: "",
      headerName: "",
      sortable: false,
      width: 90,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return (
          <EditButton
            component={NavLink}
            to={
              props.pageId === "0"
                ? `/admin/departments/${params.getValue(
                    "departmentid"
                  )}/edit/${params.getValue("id")}`
                : `/store/${props.pageId}/admin/departments/${params.getValue(
                    "id"
                  )}/edit`
            }
          >
            Edit
          </EditButton>
        );
      },
    },
    {
      field: "",
      headerName: "",
      sortable: false,
      width: 90,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return <DeleteButton>Delete</DeleteButton>;
      },
    },
    {
      field: "",
      headerName: "",
      sortable: false,
      width: 90,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return (
          <CmsButton
            component={NavLink}
            to={`/admin/departments/${params.getValue("departmentid")}/cms`}
          >
            CMS
          </CmsButton>
        );
      },
    },
    {
      field: "",
      headerName: "",
      sortable: false,
      width: 130,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return (
          <CampaignsButton
            component={NavLink}
            to={`/admin/departments/${params.getValue(
              "departmentid"
            )}/campaigns`}
          >
            Campaigns
          </CampaignsButton>
        );
      },
    },
    {
      field: "",
      headerName: "",
      sortable: false,
      width: 130,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return (
          <InventoryButton
            component={NavLink}
            to={`/admin/departments/${params.getValue(
              "departmentid"
            )}/inventory`}
          >
            Inventory
          </InventoryButton>
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
          <h3>Departments - Creation and Maintenance</h3>

          <AddButton
            component={NavLink}
            to={
              props.pageId === "0"
                ? "/admin/departments/add"
                : `/store/${props.pageId}/admin/departments/add`
            }
          >
            Add department
          </AddButton>

          <DataTable columns={columns} rows={data.departments} />
        </>
      ) : (
        <>
          <EditForms type="DEPARTMENT" action="add" styles={props.styles} />
        </>
      )}
    </Container>
  );
}
export default Departments;
//id,        section,     action,    departmentId,  deptSection
//undefined  "campaigns"  undefined     undefined      undefined
//undefined  undefined    undefined        "1"         "campaigns"
