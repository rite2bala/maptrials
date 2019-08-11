import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3, 2)
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function SpacingGrid() {
  // const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container justify="center">
        <Paper>
          <Typography variant="h5" component="h3">
            Hello
          </Typography>
        </Paper>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </Grid>
    </Grid>
  );
}
