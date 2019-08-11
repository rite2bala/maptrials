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
  },
  paper: {
    padding: theme.spacing(3, 2)
  }
}));

export default function SpacingGrid() {
  // const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container justify="center">
        <Grid key="1" item spacing={2}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              Hello
            </Typography>
            <Typography component="p">Paper 1</Typography>
          </Paper>
        </Grid>

        <Grid key="2" item spacing={2}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              Hello
            </Typography>
            <Typography component="p">Paper 2</Typography>
          </Paper>
        </Grid>

        <Grid key="3" item spacing={2}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              Hello
            </Typography>
            <Typography component="p">Paper 3</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
