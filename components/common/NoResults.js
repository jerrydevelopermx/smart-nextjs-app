import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function NoResults(props) {
  const useStyles = makeStyles((theme) => props.appStyles);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.text}> No results found</div>
    </div>
  );
}

export default NoResults;
