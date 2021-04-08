import React from "react";
import { DataGrid } from "@material-ui/data-grid";

function DataTable(props) {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;
