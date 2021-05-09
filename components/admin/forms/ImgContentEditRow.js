import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";

function ImgContentEditRow(props) {
  return (
    <Grid container spacing={1}>
      <Grid
        item
        container
        align="center"
        justify="center"
        direction="column"
        xs={12}
        sm={6}
        md={4}
      >
        <TextField
          disabled
          className={props.css}
          variant="outlined"
          margin="normal"
          fullWidth
          id={`${props.id}Url`}
          label={props.label}
          name={`${props.id}Url`}
          defaultValue={props.defaultValue}
          style={{ marginTop: "30px" }}
        />
      </Grid>
      <Grid
        item
        container
        align="center"
        justify="center"
        direction="row"
        xs={12}
        sm={3}
        md={props.defaultValue.length > 0 ? 4 : 1}
        style={{ textAlign: "center" }}
      >
        <>
          {props.defaultValue.length > 0 ? (
            <img
              alt="contentEditImage"
              src={`${process.env.PUBLIC_URL}` + props.defaultValue}
              style={{ width: "180px" }}
            />
          ) : null}
        </>
      </Grid>
      <Grid
        item
        container
        align="center"
        justify="center"
        direction="column"
        xs={12}
        sm={3}
        md={1}
      >
        <>
          <Button className={props.cssButton}>
            {props.defaultValue.length > 0 ? "Change" : "Add"}
          </Button>
        </>
      </Grid>
    </Grid>
  );
}

{
}

export default ImgContentEditRow;
