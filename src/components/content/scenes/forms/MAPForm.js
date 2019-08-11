import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import "date-fns";
//import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
//import Fab from "@material-ui/core/Fab";
//import { config } from "./config.json";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
//import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    width: 200
  },
  textField1: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    width: 250
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
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Product = [
  {
    value: "COSENTYX",
    label: "COSENTYX"
  },
  {
    value: "INC280",
    label: "INC280"
  },
  {
    value: "KISQALI",
    label: "KISQALI"
  },
  {
    value: "MEKINIST",
    label: "MEKINIST"
  },
  {
    value: "TAFINLAR",
    label: "TAFINLAR"
  },
  {
    value: "RYDAPT",
    label: "RYDAPT"
  }
];

const Strength = [
  {
    value: "75mg",
    label: "75mg"
  },
  {
    value: "150mg",
    label: "150mg"
  },
  {
    value: "100mg",
    label: "100mg"
  },
  {
    value: "200mg",
    label: "200mg"
  },

  {
    value: "30mg/ml",
    label: "30mg/ml"
  },

  {
    value: "2mg",
    label: "2mg"
  },

  {
    value: "75mg",
    label: "75mg"
  },

  {
    value: "25mg",
    label: "25mg"
  },

  {
    value: "25mg/ML",
    label: "25mg/ML"
  }
];
const Molecule = [
  {
    value: "Secukinumab (AIN457)",
    label: "Secukinumab (AIN457)"
  },
  {
    value: "Capmatinib",
    label: "Capmatinib"
  },
  {
    value: "Ribociclib (LEE011)",
    label: "Ribociclib (LEE011)"
  },
  {
    value: "MEKINIST",
    label: "MEKINIST"
  },
  {
    value: "Trametinib (TMT212)",
    label: "Trametinib (TMT212)"
  },
  {
    value: "Dabrafenib (DRB436)",
    label: "Dabrafenib (DRB436)"
  },
  {
    value: "Midostaurin (PKC412)",
    label: "Midostaurin (PKC412)"
  }
];
const Country = [
  {
    value: "India",
    label: "India"
  },
  {
    value: "Spain",
    label: "Spain"
  },
  {
    value: "Switzerland",
    label: "Switzerland"
  },

  {
    value: "Croatia",
    label: "Croatia"
  },
  {
    value: "Korea",
    label: "Korea"
  },
  {
    value: "Peru",
    label: "Peru"
  },
  {
    value: "Greece",
    label: "Greece"
  },
  {
    value: "Italy",
    label: "Italy"
  },
  {
    value: "Germany",
    label: "Germany"
  },
  {
    value: "Ireland",
    label: "Ireland"
  },

  {
    value: "Others",
    label: "Others"
  }
];
const Source = [
  {
    value: "GCS",
    label: "GCS"
  },
  {
    value: "NTO",
    label: "NTO"
  }
];

const Owner = [
  {
    value: "HCP",
    label: "HCP"
  },
  {
    value: "Patient",
    label: "Patient"
  },
  {
    value: "CPO",
    label: "CPO"
  }
];
const MAPType = [
  {
    value: "IPR",
    label: "IPR"
  },
  {
    value: "PTA",
    label: "PTA"
  },
  {
    value: "COHORT",
    label: "COHORT"
  }
];

const Presentation = [
  {
    value: "PFS",
    label: "PFS"
  },
  {
    value: "FCT",
    label: "FCT"
  },
  {
    value: "100ML Solution",
    label: "100ML Solution"
  },
  {
    value: "HNGC",
    label: "HNGC"
  },
  {
    value: "SGC",
    label: "SGC"
  },
  {
    value: "50ML Solution",
    label: "50ML Solution"
  }
];
const CMRID = [
  { value: "John", label: "John" },
  { value: "Sherlock", label: "Sherlock" },
  { value: "Oliver", label: "Oliver" },
  { value: "Harry", label: "Harry" },
  { value: "Jacob", label: "Jacob" }
];
//const uuidv4 = require("uuid/v4");
const today = new Date().toISOString().substring(0, 10);
const uuidv4 = require("uuid/v4");

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    MAPSystemIdentifier: uuidv4(),
    MAPID: "",
    MAPType: "",
    RequestDate: today,
    NoOfPatients: "",
    CountryOfRequest: "",
    CMRID: "",
    /*BulkMatCode: "",
    BatchNum: "",
    FisherPartNum: "",
  */
    Presentation: "",
    Product: "",
    Unit: "",
    Strength: "",
    Molecule: "",
    Quantity: "",
    DiseaseToBeTreated: "",
    RationalForRequest: "",
    Owner: "PLS PSM",
    AddnRemarks: "" //,
    //   CreateDate: today
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  var data = JSON.stringify(values, null, 2);
  function handleClick() {
    alert(`You Submitted \n\n${data}`);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div style={{ gridColumnEnd: "span 3" }}>
          <h1 style={{ color: "teal" }}>MAP request from </h1>
          <form className={classes.container} autoComplete="off">
            <div>
              <TextField
                required
                id="MAPID"
                label="MAP ID"
                className={classes.textField}
                value={values.MAPID}
                onChange={handleChange("MAPID")}
                margin="normal"
              />

              <TextField
                required
                id="MAPType"
                select
                label="MAPType"
                className={classes.textField}
                value={values.MAPType}
                onChange={handleChange("MAPType")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select your response"
                margin="normal"
              >
                {MAPType.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                required
                id="NoOfPatients"
                label="No. of patients"
                value={values.NoOfPatients}
                onChange={handleChange("NoOfPatients")}
                type="number"
                defaultValue="1"
                className={classes.textField}
                margin="normal"
              />

              <TextField
                required
                id="CountryOfRequest"
                select
                label="Country of request"
                className={classes.textField}
                value={values.CountryOfRequest}
                onChange={handleChange("CountryOfRequest")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select your response"
                margin="normal"
              >
                {Country.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                required
                id="CMRID"
                select
                label="CMRID"
                className={classes.textField}
                value={values.CMRID}
                onChange={handleChange("CMRID")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select your response"
                margin="normal"
              >
                {CMRID.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                required
                id="Presentation"
                select
                label="Presentation  (Unit)"
                className={classes.textField}
                value={values.Presentation}
                onChange={handleChange("Presentation")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select your response"
                margin="normal"
              >
                {Presentation.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              {/* 
              <TextField
                required
                id="BulkMatCode"
                label="Bulk Material Code"
                value={values.BulkMatCode}
                onChange={handleChange("BulkMatCode")}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                required
                id="BatchNum"
                label="Batch Number"
                value={values.BatchNum}
                onChange={handleChange("BatchNum")}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                required
                id="FisherPartNum"
                label="Fisher part number"
                value={values.FisherPartNum}
                onChange={handleChange("FisherPartNum")}
                className={classes.textField}
                margin="normal"
              />*/}

              <TextField
                required
                id="Product"
                select
                label="Product"
                className={classes.textField}
                value={values.Product}
                onChange={handleChange("Product")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select your response"
                margin="normal"
              >
                {Product.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                required
                id="Strength"
                select
                label="Strength"
                className={classes.textField}
                value={values.Strength}
                onChange={handleChange("Strength")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select your response"
                margin="normal"
              >
                {Strength.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                required
                id="Molecule"
                select
                label="Molecule"
                className={classes.textField}
                value={values.Molecule}
                onChange={handleChange("Molecule")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Please select your response"
                margin="normal"
              >
                {Molecule.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                required
                id="Quantity"
                label="Quantity"
                value={values.Quantity}
                onChange={handleChange("Quantity")}
                type="number"
                defaultValue="1"
                className={classes.textField}
                margin="normal"
              />
              <TextField
                required
                id="DiseaseToBeTreated"
                label="Disease / condition"
                value={values.DiseaseToBeTreated}
                onChange={handleChange("DiseaseToBeTreated")}
                className={classes.textField}
                margin="normal"
              />
            </div>
            <div>
              <Divider />
              <TextField
                required
                id="RationalForRequest"
                label="Rationale For Request"
                multiline
                variant="outlined"
                rows="4"
                value={values.RationalForRequest}
                onChange={handleChange("RationalForRequest")}
                className={classes.textField1}
                margin="normal"
              />
              <TextField
                required
                id="AddnRemarks"
                label="Additional Remarks"
                value={values.AddnRemarks}
                multiline
                variant="outlined"
                rows="4"
                onChange={handleChange("AddnRemarks")}
                className={classes.textField1}
                margin="normal"
              />
            </div>
          </form>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            className={classes.submit}
            size="inherit"
            onClick={handleClick}
          >
            Submit
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
}
