import React from "react";
import { useQuery } from "@apollo/client";
import Container from "@material-ui/core/Container";
import DataTable from "../common/DataTable";
import queries from "../../graphql/queries";
import { useTranslation } from "next-i18next";

function UserEvents(props) {
  const { t } = useTranslation("admin");
  const { loading, error, data } = useQuery(queries.GET_EVENTS_DATA);
  if (loading) return <p></p>;
  if (error) return <p>There is an error!</p>;

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "username", headerName: t("Username"), width: 200 },
    { field: "usertype", headerName: t("User Type"), width: 100 },
    { field: "departmentid", headerName: t("Dept"), width: 100 },
    { field: "fullname", headerName: t("Full Name"), width: 150 },
    { field: "cellphonenumber", headerName: t("Phone #"), width: 100 },
    { field: "userstatus", headerName: t("Status"), width: 80 },
    { field: "eventcategory", headerName: t("Category"), width: 100 },
    { field: "eventtype", headerName: t("Type"), width: 100 },
    { field: "activity", headerName: t("Activity"), width: 150 },
    { field: "eventstart", headerName: t("Start"), width: 120 },
    { field: "eventend", headerName: t("End"), width: 120 },
    { field: "eventoutcome", headerName: t("Outcome"), width: 100 },
    { field: "devicename", headerName: t("Device"), width: 100 },
    /* { field: "deviceIPaddress", headerName: "IP Address", width: 150 },*/
    { field: "eventseverity", headerName: t("Severity"), width: 150 },
    { field: "eventstatus", headerName: t("Event Status"), width: 150 },
  ];
  return (
    <Container component="main" maxWidth="xl">
      <>
        <Container style={{ textAlign: "center" }}>
          <h2>{`${t("Users")} - ${t("Activity Tracker")}`}</h2>
        </Container>

        <DataTable columns={columns} rows={data.events} />
      </>
    </Container>
  );
}

export default UserEvents;
