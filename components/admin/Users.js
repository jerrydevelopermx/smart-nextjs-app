import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DataTable from "../common/DataTable";
import UserEditForm from "./forms/UserEditForm";
import queries from "../../graphql/queries";
import EditForms from "../EditForms";
import { useTranslation } from "next-i18next";

import { CellParams } from "@material-ui/data-grid";

function Users(props) {
  const { t } = useTranslation("admin");
  const { loading, error, data } = useQuery(queries.GET_USERS_DATA);
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
    { field: "id", headerName: "ID", width: 50 },
    { field: "username", headerName: t("Username"), width: 180 },
    { field: "userfirstname", headerName: t("Name"), width: 170 },
    {
      field: "usertype",
      headerName: t("User Type"),
      width: 100,
    },
    {
      field: "departmentid",
      headerName: t("Dept"),
      width: 80,
    },
    { field: "userstatus", headerName: t("Status"), width: 100 },
    { field: "createddatime", headerName: t("Created"), width: 120 },
    { field: "modifdatime", headerName: t("Modified"), width: 120 },
    { field: "modifbyid", headerName: t("Modified by"), width: 100 },

    {
      field: "",
      headerName: "",
      sortable: false,
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <>
            <Link
              href={`/[id]/admin/[section]/[params]`}
              as={`/${
                props.pageId == 0 ? "main" : props.pageId
              }/admin/users/edit/${params.getValue("id")}`}
            >
              <EditButton component="a">{t("Edit")}</EditButton>
            </Link>
            <DeleteButton>{t("Delete")}</DeleteButton>
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
            <h2>{`${t("Users")} - ${t("Creation and Maintenance")}`}</h2>
          </Container>
          <Link
            href={`/[id]/admin/[section]/[params]`}
            as={`/${props.pageId == 0 ? "main" : props.pageId}/admin/users/add`}
          >
            <AddButton component="a">{t("New User")}</AddButton>
          </Link>

          <DataTable columns={columns} rows={data.users} />
        </>
      ) : (
        <EditForms
          type="USER"
          action={props.action}
          styles={props.styles}
          appButtons={props.buttons}
        />
      )}
    </Container>
  );
}
export default Users;
