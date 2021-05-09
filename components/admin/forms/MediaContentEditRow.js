import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import { Player } from "video-react";

function MediaContentEditRow(props) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={5}>
        <TextField
          disabled
          className={props.css}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id={`${props.id}Url`}
          label={props.label}
          name={`${props.id}Url`}
          defaultValue={props.defaultValue}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          className={props.css}
          variant="outlined"
          margin="normal"
          fullWidth
          id={`${props.id}defaultlink`}
          label={`${props.label} Link`}
          name={`${props.id}defaultlink`}
          value={props.value}
          onChange={props.onChange}
        />
      </Grid>
      <Grid
        item
        container
        align="center"
        justify="center"
        direction="column"
        xs={12}
        sm={3}
        md={props.defaultValue.length > 0 ? 4 : 1}
      >
        {props.defaultValue.length > 0 ? (
          props.isVideo ? (
            <Player fluid={true} autoPlay={false} src={props.defaultValue} />
          ) : (
            <img
              alt="contentEditImage"
              src={`${process.env.PUBLIC_URL}` + props.defaultValue}
              style={props.style}
            />
          )
        ) : (
          <Button className={props.cssButton}>Add</Button>
        )}
      </Grid>
    </Grid>
  );
}

{
}

export default MediaContentEditRow;
