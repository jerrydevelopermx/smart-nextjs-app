import React from "react";
import { useQuery } from "@apollo/client";
import Container from "@material-ui/core/Container";
import DataTable from "../common/DataTable";
import queries from "../../graphql/queries";

function UserEvents(props) {
  const { loading, error, data } = useQuery(queries.GET_EVENTS_DATA);
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "usertype", headerName: "User Type", width: 100 },
    { field: "departmentid", headerName: "Dept", width: 100 },
    { field: "fullname", headerName: "Name", width: 150 },
    { field: "cellphonenumber", headerName: "Phone #", width: 100 },
    { field: "userstatus", headerName: "Status", width: 80 },
    { field: "eventcategory", headerName: "Category", width: 100 },
    { field: "eventtype", headerName: "Type", width: 100 },
    { field: "activity", headerName: "Activity", width: 150 },
    { field: "eventstart", headerName: "Start", width: 120 },
    { field: "eventend", headerName: "End", width: 120 },
    { field: "eventoutcome", headerName: "Outcome", width: 100 },
    { field: "devicename", headerName: "Device", width: 100 },
    /* { field: "deviceIPaddress", headerName: "IP Address", width: 150 },*/
    { field: "eventseverity", headerName: "Severity", width: 150 },
    { field: "eventstatus", headerName: "Event Status", width: 150 },
  ];
  return (
    <Container component="main" maxWidth="xl">
      <>
        <h3>Users - Activity Tracker</h3>
        <DataTable columns={columns} rows={data.events} />
      </>
    </Container>
  );
}

export default UserEvents;
