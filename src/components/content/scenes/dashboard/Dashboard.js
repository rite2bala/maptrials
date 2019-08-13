import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Tile1 from "./components/tile1";
import Tile2 from "./components/tile2";
import Tile3 from "./components/tile3";
import Tile4 from "./components/tile4";
//import Tile5 from "./components/tile5";
import Chart1 from "./components/chart";
import Divider from "@material-ui/core/Divider";

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
      <Typography variant="h5" component="h2">
        Managed Access Program
      </Typography>
      <br />
      <Divider />
      <br />
      <Typography variant="subtitle1" component="h2">
        Inventory Dashboard
      </Typography>
      <br />
      <br />
      <Grid container justify="space-evenly" spacing={2}>
        <Grid key="1" item spacing={1}>
          <Tile1 />
        </Grid>

        <Grid key="2" item spacing={2}>
          <Tile2 />
        </Grid>

        <Grid key="3" item spacing={2}>
          <Tile3 />
        </Grid>

        <Grid key="4" item spacing={2}>
          <Tile4 />
        </Grid>
      </Grid>

      <br />
      <br />
      <Grid fluid>
        <Grid item>
          <Paper className={classes.paper}>
            <Chart1 />
          </Paper>
        </Grid>
        <Grid item xs="3" sm="6">
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h2">
              Hello World 2
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
