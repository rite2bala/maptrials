import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "70vh",
    bottom: "0",
    postion: "fixed"
  },
  main: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1)
  },
  footer: {
    padding: theme.spacing(0),
    marginTop: "auto",
    backgroundColor: "white"
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" />
        </Container>
      </footer>
    </div>
  );
}
