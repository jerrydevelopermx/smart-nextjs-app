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
import { useTranslation } from "next-i18next";

function Departments(props) {
  const { t } = useTranslation("admin");
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
    { field: "departmentid", headerName: t("Department ID"), width: 140 },
    { field: "departmentname", headerName: t("Name"), width: 130 },
    {
      field: "deptstatus",
      headerName: t("Status"),
      width: 80,
    },
    { field: "createddatime", headerName: t("Created"), width: 130 },
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
              href={`/[id]/admin/departments/[params]`}
              as={`/${
                props.pageId == 0 ? "main" : props.pageId
              }/admin/departments/edit/${params.getValue("departmentid")}`}
            >
              <EditButton component="a">{t("Edit")}</EditButton>
            </Link>
            <Link href="">
              <DeleteButton>{t("Delete")}</DeleteButton>
            </Link>
            <Link
              href={`/[id]/admin/departments/[params]`}
              as={`/${
                props.pageId == 0 ? "main" : props.pageId
              }/admin/departments/cms/${params.getValue("departmentid")}`}
            >
              <CmsButton component="a">CMS</CmsButton>
            </Link>
            <Link
              href={`/[id]/admin/departments/[params]`}
              as={`/${
                props.pageId == 0 ? "main" : props.pageId
              }/admin/departments/campaigns/${params.getValue("departmentid")}`}
            >
              <CampaignsButton component="a">{t("Campaigns")}</CampaignsButton>
            </Link>
            <Link
              href={`/[id]/admin/departments/[params]`}
              as={`/${
                props.pageId == 0 ? "main" : props.pageId
              }/admin/departments/inventory/${params.getValue("departmentid")}`}
            >
              <InventoryButton component="a">{t("Inventory")}</InventoryButton>
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
          <Container style={{ textAlign: "center" }}>
            <h2>{`${t("Departments")} - ${t("Creation and Maintenance")}`}</h2>
          </Container>
          <Link
            href={`/[id]/admin/departments/[params]`}
            as={`/${
              props.pageId == 0 ? "main" : props.pageId
            }/admin/departments/add`}
          >
            <AddButton component="a">{t("New Department")}</AddButton>
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
