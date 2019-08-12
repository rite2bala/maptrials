import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Tile1 from "./components/tile1";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3, 2)
    //margin: auto
  },
  control: {
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(6, 6)
  }
}));

export default function SpacingGrid() {
  // const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h3" component="h2">
        Managed Access Program - Inventory Dashboard
      </Typography>
      <br />

      <Grid container justify="space-evenly" spacing={2}>
        <Grid key="1" item spacing={1}>
          <Tile1 />
        </Grid>

        <Grid key="2" item spacing={2}>
          <Tile1 />
        </Grid>

        <Grid key="3" item spacing={2}>
          <Tile1 />
        </Grid>

        <Grid key="4" item spacing={2}>
          <Tile1 />
        </Grid>
        <Grid key="5" item spacing={2}>
          <Tile1 />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container justify="space-evenly" spacing={2}>
        <Grid item xs="4" sm="6">
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h2">
              Hello
            </Typography>
            <Typography component="p">Paper 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs="3" sm="6">
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h2">
              Hello
            </Typography>
            <Typography component="p">Paper 1</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
