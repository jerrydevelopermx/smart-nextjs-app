import React from "react";
import { useQuery } from "@apollo/client";
import Container from "@material-ui/core/Container";
import DataTable from "../common/DataTable";
import queries from "../../graphql/queries";

function IncidentManager(props) {
  const { loading, error, data } = useQuery(queries.GET_INCIDENTS_DATA);
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "emailaddress", headerName: "Email", width: 180 },
    {
      field: "lastandfirstname",
      headerName: "Name",
      width: 150,
    },
    {
      field: "companyname",
      headerName: "Company",
      width: 150,
    },
    { field: "departmentid", headerName: "Dept", width: 80 },
    { field: "messagetype", headerName: "Message type", width: 150 },
    { field: "messagesubject", headerName: "Message subject", width: 240 },
  ];
  return (
    <Container component="main" maxWidth="xl">
      <>
        <h3>Incident Manager</h3>
        <DataTable columns={columns} rows={data.cuMessages} />
      </>
    </Container>
  );
}

export default IncidentManager;
