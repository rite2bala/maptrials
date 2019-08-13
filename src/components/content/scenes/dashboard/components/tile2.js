import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
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
    height: 90,
    width: 150
  }
}));

export default function Tile2() {
  // const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography
        gutterBottom
        variant="subtitle1"
        align="center"
        color="primary"
      >
        Pending allocation
      </Typography>
      <Divider />
      <Typography
        component="p"
        variant="subtitle1"
        align="center"
        gutterBottom={true}
      >
        3
      </Typography>
    </Paper>
  );
}
