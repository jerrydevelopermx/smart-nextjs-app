import React from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DataTable from "../common/DataTable";
import UserEditForm from "./forms/UserEditForm";
import queries from "../../graphql/queries";
import EditForms from "../EditForms";

import { CellParams } from "@material-ui/data-grid";

function Users(props) {
  console.log(props);
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
    { field: "username", headerName: "Username", width: 180 },
    { field: "userfirstname", headerName: "Name", width: 170 },
    {
      field: "usertype",
      headerName: "User type",
      width: 100,
    },
    {
      field: "departmentid",
      headerName: "Dept",
      width: 80,
    },
    { field: "userstatus", headerName: "Status", width: 100 },
    { field: "createddatime", headerName: "Created", width: 120 },
    { field: "modifdatime", headerName: "Modified", width: 120 },
    { field: "modifbyid", headerName: "Modified by", width: 100 },

    {
      field: "",
      headerName: "",
      sortable: false,
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (params: CellParams) => {
        return (
          <>
            <EditButton
              component={NavLink}
              to={
                props.pageId === "0"
                  ? `/admin/users/edit/${params.getValue("id")}`
                  : `/store/${props.pageId}/admin/users/edit/${params.getValue(
                      "id"
                    )}`
              }
            >
              Edit
            </EditButton>
            <DeleteButton>Delete</DeleteButton>
          </>
        );
      },
    },
  ];

  return (
    <Container component="main" maxWidth="lg">
      {props.action === undefined ? (
        <>
          <h3>Users - Creation and Maintenance</h3>
          <AddButton
            component={NavLink}
            to={
              props.pageId === "0"
                ? "/admin/users/add"
                : `/store/${props.pageId}/admin/users/add`
            }
          >
            Add user
          </AddButton>

          <DataTable columns={columns} rows={data.users} />
        </>
      ) : (
        <EditForms
          type="USER"
          action="add"
          styles={props.styles}
          appButtons={props.buttons}
        />
      )}
    </Container>
  );
}
export default Users;
