import React from "react";
import Link from "next/link";
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
      width: 700,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <>
            <Link
              href=""
              as={
                props.pageId === "0"
                  ? `/admin/departments/${params.getValue(
                      "departmentid"
                    )}/edit/${params.getValue("id")}`
                  : `/store/${props.pageId}/admin/departments/${params.getValue(
                      "id"
                    )}/edit`
              }
            >
              <EditButton component="a">Edit</EditButton>
            </Link>
            <Link href="">
              <DeleteButton>Delete</DeleteButton>
            </Link>
            <Link
              href=""
              as={`/admin/departments/${params.getValue("departmentid")}/cms`}
            >
              <CmsButton component="a">CMS</CmsButton>
            </Link>
            <Link
              href=""
              as={`/admin/departments/${params.getValue(
                "departmentid"
              )}/campaigns`}
            >
              <CampaignsButton component="a">Campaigns</CampaignsButton>
            </Link>
            <Link
              href=""
              as={`/admin/departments/${params.getValue(
                "departmentid"
              )}/inventory`}
            >
              <InventoryButton component="a">Inventory</InventoryButton>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <Container component="main" maxWidth="lg">
      {props.action === undefined ? (
        <>
          <h3>Departments - Creation and Maintenance</h3>
          <Link
            href={`/[id]/admin/[section]/[params]`}
            as={`/${
              props.pageId == 0 ? "main" : props.pageId
            }/admin/departments/add`}
          >
            <AddButton component="a">Add department</AddButton>
          </Link>
          <DataTable columns={columns} rows={data.departments} />
        </>
      ) : (
        <>
          <EditForms
            type="DEPARTMENT"
            action={props.action}
            styles={props.styles}
          />
        </>
      )}
    </Container>
  );
}
export default Departments;
