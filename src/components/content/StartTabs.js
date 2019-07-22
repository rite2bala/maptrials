import React from "react";
import PropTypes from "prop-types";
//import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextFields from "./form";
import Container from "@material-ui/core/Container";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box mx="auto" p={5}>
        {children}
      </Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function StartTabs() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Container maxWidth="lg">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Managed Access Program"
          centered
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Create New Request" {...a11yProps(1)} />
          <Tab label="View Existing Requests" {...a11yProps(2)} />
          <Tab label="Statistics" {...a11yProps(3)} />
          <Tab label="Closed Requests" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Welcome to Managed Access program
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TextFields />
        </TabPanel>
        <TabPanel value={value} index={2}>
          No Requests raised yet
        </TabPanel>

        <TabPanel value={value} index={3}>
          No Statistics to display
        </TabPanel>
        <TabPanel value={value} index={4}>
          No closed requests
        </TabPanel>
      </Container>
    </div>
  );
}
