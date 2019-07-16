import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import "date-fns";
//import Grid from '@material-ui/core/Grid';
//import Button from '@material-ui/core/Button';
import Fab from "@material-ui/core/Fab";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CountryDropdown } from "react-country-region-selector";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const currencies = [
  {
    value: "Yes",
    label: "Yes"
  },
  {
    value: "No",
    label: "No"
  }
];
var Country: "";
export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    Product: "",
    Strength: "",
    Unit: "",
    Molecule: "",
    PackSize: "",
    Franchise: "",
    Country: "",
    Source: "",
    BulkMaterialCode: "",
    MARSCode: "",
    FisherPartNumber: "",
    Owner: "",
    ExpiryDate: ""
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const today = new Date().toISOString().substring(0, 10);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div style={{ gridColumnEnd: "span 3" }}>
          <h1 style={{ color: "teal" }}>New request for central repository</h1>
          <form className={classes.container} autoComplete="off">
            <TextField
              id="CreateDate"
              label="Request creation date"
              type="date"
              defaultValue={today}
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              onChangeCapture
            />

            <TextField
              id="Product"
              label="Product Name"
              className={classes.textField}
              value={values.Product}
              onChange={handleChange("Product")}
              margin="normal"
            />

            <TextField
              id="Strength"
              label="Strength of product"
              className={classes.textField}
              value={values.Strength}
              onChange={handleChange("Strength")}
              margin="normal"
            />
            <TextField
              id="Unit"
              label="Presentation (Unit)"
              className={classes.textField}
              value={values.Unit}
              onChange={handleChange("Unit")}
              margin="normal"
            />
            <TextField
              id="Molecule"
              label="Molecule"
              className={classes.textField}
              value={values.Molecule}
              onChange={handleChange("Molecule")}
              margin="normal"
            />
            <TextField
              id="PackSize"
              label="PackSize"
              value={values.PackSize}
              onChange={handleChange("PackSize")}
              type="number"
              defaultValue="1"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              value={Country}
              id="Country"
              label="Country"
              value={values.Country}
              className={classes.textField}
              onChange={handleChange("Country")}
              margin="normal"
            />
            <TextField
              id="Franchise"
              label="Franchise"
              value={values.Franchise}
              onChange={handleChange("Franchise")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="Source"
              label="Source"
              value={values.Source}
              onChange={handleChange("Source")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="date"
              label="Expiry Date"
              type="date"
              className={classes.textField}
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="BulkMatCode"
              label="Bulk Material Code"
              value=""
              onChange={handleChange("BulkMatCode")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="FisherPartNum"
              label="Fisher Part Number"
              value=""
              onChange={handleChange("FisherPartNum")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="Owner"
              label="Owner"
              value=""
              onChange={handleChange("Owner")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="Status"
              label="Status"
              value=""
              onChange={handleChange("Status")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="ActiveInd"
              select
              label="Active Indicator"
              className={classes.textField}
              value={values.ActiveInd}
              onChange={handleChange("ActiveInd")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select your response"
              margin="normal"
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </form>
          <Fab
            variant="extended"
            aria-label="Delete"
            color="primary"
            className={classes.fab}
          >
            Submit
          </Fab>
        </div>
      </Container>
    </React.Fragment>
  );
}
