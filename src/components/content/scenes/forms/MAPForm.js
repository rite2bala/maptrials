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
import Grid from "@material-ui/core/Grid";

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

//const uuidv4 = require("uuid/v4");
const today = new Date().toISOString().substring(0, 10);

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    CreateDate: today,
    MAPID: "",
    MAPType: "",
    RequestDate: "",
    NoOfPatients: "",
    Countryofrequest: "",
    CMR: "",
    BulkMatCode: "",
    BatchNum: "",
    FisherPartNum: "",
    DrugProd: "",
    Strength: "",
    Molecule: "",
    Quantity: "",
    DiseaseCondn: "",
    Rationale: "",
    Owner: "",
    AddnRemarks: ""
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
              <Grid container>
                <Grid item xs>
                  <TextField
                    required
                    id="MAPID"
                    label="MAP ID"
                    className={classes.textField}
                    value={values.Product}
                    onChange={handleChange("MAPID")}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    required
                    id="MAPType"
                    label="MAP Request Type"
                    select
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
                  />
                </Grid>
                <TextField
                  required
                  id="NoOfPatients"
                  label="NoOfPatients"
                  value={values.NoOfPatients}
                  onChange={handleChange("NoOfPatients")}
                  type="number"
                  defaultValue="1"
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Divider light />
            </div>
            <div>
              <Grid container>
                <Grid item xs>
                  <TextField
                    required
                    id="Countryofrequest"
                    select
                    label="Country of request"
                    className={classes.textField}
                    value={values.Country}
                    onChange={handleChange("Countryofrequest")}
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
                </Grid>
                <Grid item xs>
                  <TextField
                    required
                    id="CMR"
                    label="CMR"
                    value={values.CMR}
                    onChange={handleChange("CMR")}
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    required
                    id="BulkMatCode"
                    label="Bulk Material Code"
                    value={values.BulkMatCode}
                    onChange={handleChange("BulkMatCode")}
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs />
                <TextField
                  required
                  id="BatchNum"
                  label="Batch Number"
                  value={values.BatchNum}
                  onChange={handleChange("BatchNum")}
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Divider light />
            </div>

            <div>
              <Grid item>
                <TextField
                  required
                  id="FisherPartNum"
                  label="Fisher Part Number"
                  value={values.FisherPartNum}
                  onChange={handleChange("FisherPartNum")}
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  required
                  id="DrugProd"
                  label="Drug product"
                  value={values.DrugProd}
                  onChange={handleChange("DrugProd")}
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Divider light />
            </div>
            <div>
              <TextField
                required
                id="Strength"
                label="Strength"
                value={values.Strength}
                onChange={handleChange("Strength")}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                required
                id="Molecule"
                label="Molecule"
                value={values.Molecule}
                onChange={handleChange("Molecule")}
                className={classes.textField}
                margin="normal"
              />
            </div>
            <div>
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
                id="DiseaseCondn"
                label="Disease / condition"
                value={values.DiseaseCondn}
                onChange={handleChange("DiseaseCondn")}
                className={classes.textField}
                margin="normal"
              />

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
            </div>
            <TextField
              required
              id="Rationale"
              label="Rationale"
              multiline
              variant="outlined"
              rows="4"
              value={values.Rationale}
              onChange={handleChange("Rationale")}
              className={classes.textField}
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
              className={classes.textField}
              margin="normal"
            />
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
