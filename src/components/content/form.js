import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import "date-fns";
//import Grid from '@material-ui/core/Grid';

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

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
      <h1 makeStyles> New entry for central repository </h1>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="Product"
          label="Product Name"
          className={classes.textField}
          value=""
          onChange={handleChange("Product")}
          margin="normal"
        />
        <TextField
          id="Strength"
          label="Strength of product"
          className={classes.textField}
          value=""
          onChange={handleChange("Strength")}
          margin="normal"
        />
        <TextField
          id="Presentation"
          label="Presentation (Unit)"
          className={classes.textField}
          value=""
          onChange={handleChange("Presentation")}
          margin="normal"
        />
        <TextField
          id="Molecule"
          label="Molecule"
          className={classes.textField}
          value=""
          onChange={handleChange("Molecule")}
          margin="normal"
        />
        <TextField
          id="PackSize"
          label="PackSize"
          value=""
          onChange={handleChange("PackSize")}
          type="number"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="Franchise"
          label="Franchise"
          value={values.age}
          onChange={handleChange("Franchise")}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="Source"
          label="Source"
          value={values.age}
          onChange={handleChange("Source")}
          className={classes.textField}
          margin="normal"
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
          value={values.currency}
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
    </div>
  );
}
