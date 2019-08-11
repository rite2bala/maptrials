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
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

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
const Status = [
  {
    value: "Available",
    label: "Available"
  },
  {
    value: "Allocated",
    label: "Allocated"
  },
  {
    value: "Expired",
    label: "Expired"
  },
  {
    value: "InTransit",
    label: "In Transit"
  },
  {
    value: "Delivered",
    label: "Delivered"
  }
];
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
    value: "Midostaurin (PKC412)",
    label: "Midostaurin (PKC412)"
  },
  {
    value: "Dabrafenib (DRB436)",
    label: "Dabrafenib (DRB436)"
  }
];

const uuidv4 = require("uuid/v4");
const today = new Date().toISOString().substring(0, 10);

export default function TextFields() {
  const classes = useStyles();

  var [values, setValues] = React.useState({
    CreateDate: today,
    DrugSystemIdentifier: uuidv4(),
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
    ExpiryDate: "",
    Status: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  var data = JSON.stringify(values, null, 2);

  function handleClick() {
    alert(`You Submitted \n\n${data}`);
    //window.location.reload();
    //uuid_key = uuid_key + 1;
    //handleChange("DrugSystemIdentifier");
    //this.setState({ DrugSystemIdentifier: "" });
    //this.forceUpdate();
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div style={{ gridColumnEnd: "span 3" }}>
          <h1 style={{ color: "teal" }}>New request for central repository</h1>
          <form className={classes.container} autoComplete="off">
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
              id="Unit"
              label="Presentation (Unit)"
              className={classes.textField}
              value={values.Unit}
              onChange={handleChange("Unit")}
              margin="normal"
            />
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
              id="PackSize"
              label="PackSize"
              value={values.PackSize}
              onChange={handleChange("PackSize")}
              type="number"
              defaultValue="1"
              className={classes.textField}
              margin="normal"
              helperText="Number of packs"
            />
            <TextField
              required
              id="Franchise"
              label="Franchise"
              value={values.Franchise}
              onChange={handleChange("Franchise")}
              className={classes.textField}
              margin="normal"
            />

            <TextField
              required
              id="Country"
              select
              label="Country"
              className={classes.textField}
              value={values.Country}
              onChange={handleChange("Country")}
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
              id="Source"
              select
              label="Source"
              className={classes.textField}
              value={values.Source}
              onChange={handleChange("Source")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select your response"
              margin="normal"
            >
              {Source.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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
              id="MARSCode"
              label="MARS Code"
              value={values.MARSCode}
              onChange={handleChange("MARSCode")}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              id="FisherPartNumber"
              label="Fisher Part Number"
              value={values.FisherPartNumber}
              onChange={handleChange("FisherPartNumber")}
              className={classes.textField}
              margin="normal"
            />

            <TextField
              required
              id="date"
              label="Expiry Date"
              type="date"
              className={classes.textField}
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />
            <br />
            <TextField
              required
              id="Owner"
              select
              label="Owner"
              className={classes.textField}
              value={values.Owner}
              onChange={handleChange("Owner")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select your response"
              margin="normal"
            >
              {Owner.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              id="Status"
              select
              label="Status"
              className={classes.textField}
              value={values.Status}
              onChange={handleChange("Status")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Please select your response"
              margin="normal"
            >
              {Status.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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
