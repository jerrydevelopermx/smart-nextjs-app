import React from "react";
import { useQuery } from "@apollo/client";
import Container from "@material-ui/core/Container";
import DataTable from "../common/DataTable";
import queries from "../../graphql/queries";
import { useTranslation } from "next-i18next";

function UserQueries(props) {
  const { t } = useTranslation("admin");
  const { loading, error, data } = useQuery(queries.GET_USERS_DATA_QUERIES);
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "username", headerName: t("Username"), width: 180 },
    { field: "userAlias", headerName: "Alias", width: 130 },
    {
      field: "userType",
      headerName: t("User Type"),
      width: 100,
    },
    {
      field: "departmentID",
      headerName: t("Dept"),
      width: 80,
    },
    { field: "legalPerson", headerName: t("Legal Person"), width: 120 },
    { field: "userLastName", headerName: t("Last name"), width: 120 },
    { field: "userFirstName", headerName: t("First Name"), width: 120 },
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
    { field: "userStatus", headerName: t("Status"), width: 80 },
  ];
  return (
    <Container component="main" maxWidth="xl">
      <>
        <Container style={{ textAlign: "center" }}>
          <h2>{`${t("Users")} - ${t("Queries and Lists")}`}</h2>
        </Container>
        <DataTable columns={columns} rows={data.users} />
      </>
    </Container>
  );
}

export default UserQueries;
