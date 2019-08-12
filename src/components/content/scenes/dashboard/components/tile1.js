import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3, 2)
  },
  control: {
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(3, 2),
    height: 70
  }
}));

export default function Tile1() {
  // const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" component="h3">
        Hello
      </Typography>
      <Typography component="p">Paper 1</Typography>
    </Paper>
  );
}
