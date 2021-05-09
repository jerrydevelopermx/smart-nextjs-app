import React from "react";
import { useQuery } from "@apollo/client";
import Container from "@material-ui/core/Container";
import DataTable from "../common/DataTable";
import queries from "../../graphql/queries";

function UserQueries(props) {
  const { loading, error, data } = useQuery(queries.GET_USERS_DATA_QUERIES);
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "username", headerName: "Username", width: 180 },
    { field: "userAlias", headerName: "Alias", width: 130 },
    {
      field: "userType",
      headerName: "User type",
      width: 100,
    },
    {
      field: "departmentID",
      headerName: "Dept",
      width: 80,
    },
    { field: "legalPerson", headerName: "Legal Person", width: 120 },
    { field: "userLastName", headerName: "Last Name", width: 120 },
    { field: "userFirstName", headerName: "First Name", width: 120 },
    { field: "store", headerName: "STR", width: 70 },
    { field: "storeContact", headerName: "STRC", width: 75 },
    { field: "supplier", headerName: "SUP", width: 70 },
    { field: "supplierContact", headerName: "SUPC", width: 75 },
    { field: "shipper", headerName: "SHP", width: 70 },
    { field: "shipperContact", headerName: "SHPC", width: 75 },
    { field: "pymntChannel", headerName: "PYC", width: 70 },
    { field: "pymntChContact", headerName: "PYCC", width: 75 },
    { field: "member", headerName: "MBR", width: 70 },
    { field: "customer", headerName: "CUST", width: 75 },
    { field: "subscriber", headerName: "SUBS", width: 75 },
    { field: "blogger", headerName: "BLGR", width: 75 },
    { field: "userStatus", headerName: "Status", width: 80 },
  ];
  return (
    <Container component="main" maxWidth="xl">
      <>
        <h3>Users - Queries and Lists</h3>
        <DataTable columns={columns} rows={data.users} />
      </>
    </Container>
  );
}

export default UserQueries;
