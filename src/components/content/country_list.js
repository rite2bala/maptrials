import React from "react";
import PropTypes from "prop-types";
import deburr from "lodash/deburr";
import Downshift from "downshift";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";

const suggestions = [
  { label: "Afghanistan" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Anguilla" },
  { label: "Antigua , Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Aruba" },
  { label: "Australia" },
  { label: "Austria" },
  { label: "Azerbaijan" },
  { label: "Bahamas" },
  { label: "Bahrain" },
  { label: "Bangladesh" },
  { label: "Barbados" },
  { label: "Belarus" },
  { label: "Belgium" },
  { label: "Belize" },
  { label: "Benin" },
  { label: "Bermuda" },
  { label: "Bhutan" },
  { label: "Bolivia" },
  { label: "Bosnia , Herzegovina" },
  { label: "Botswana" },
  { label: "Brazil" },
  { label: "British Virgin Islands" },
  { label: "Brunei" },
  { label: "Bulgaria" },
  { label: "Burkina Faso" },
  { label: "Burundi" },
  { label: "Cambodia" },
  { label: "Cameroon" },
  { label: "Canada" },
  { label: "Cape Verde" },
  { label: "Cayman Islands" },
  { label: "Chad" },
  { label: "Chile" },
  { label: "China" },
  { label: "Colombia" },
  { label: "Congo" },
  { label: "Cook Islands" },
  { label: "Costa Rica" },
  { label: "Cote D Ivoire" },
  { label: "Croatia" },
  { label: "Cruise Ship" },
  { label: "Cuba" },
  { label: "Cyprus" },
  { label: "Czech Republic" },
  { label: "Denmark" },
  { label: "Djibouti" },
  { label: "Dominica" },
  { label: "Dominican Republic" },
  { label: "Ecuador" },
  { label: "Egypt" },
  { label: "El Salvador" },
  { label: "Equatorial Guinea" },
  { label: "Estonia" },
  { label: "Ethiopia" },
  { label: "Falkland Islands" },
  { label: "Faroe Islands" },
  { label: "Fiji" },
  { label: "Finland" },
  { label: "France" },
  { label: "French Polynesia" },
  { label: "French West Indies" },
  { label: "Gabon" },
  { label: "Gambia" },
  { label: "Georgia" },
  { label: "Germany" },
  { label: "Ghana" },
  { label: "Gibraltar" },
  { label: "Greece" },
  { label: "Greenland" },
  { label: "Grenada" },
  { label: "Guam" },
  { label: "Guatemala" },
  { label: "Guernsey" },
  { label: "Guinea" },
  { label: "Guinea Bissau" },
  { label: "Guyana" },
  { label: "Haiti" },
  { label: "Honduras" },
  { label: "Hong Kong" },
  { label: "Hungary" },
  { label: "Iceland" },
  { label: "India" },
  { label: "Indonesia" },
  { label: "Iran" },
  { label: "Iraq" },
  { label: "Ireland" },
  { label: "Isle of Man" },
  { label: "Israel" },
  { label: "Italy" },
  { label: "Jamaica" },
  { label: "Japan" },
  { label: "Jersey" },
  { label: "Jordan" },
  { label: "Kazakhstan" },
  { label: "Kenya" },
  { label: "Kuwait" },
  { label: "Kyrgyz Republic" },
  { label: "Laos" },
  { label: "Latvia" },
  { label: "Lebanon" },
  { label: "Lesotho" },
  { label: "Liberia" },
  { label: "Libya" },
  { label: "Liechtenstein" },
  { label: "Lithuania" },
  { label: "Luxembourg" },
  { label: "Macau" },
  { label: "Macedonia" },
  { label: "Madagascar" },
  { label: "Malawi" },
  { label: "Malaysia" },
  { label: "Maldives" },
  { label: "Mali" },
  { label: "Malta" },
  { label: "Mauritania" },
  { label: "Mauritius" },
  { label: "Mexico" },
  { label: "Moldova" },
  { label: "Monaco" },
  { label: "Mongolia" },
  { label: "Montenegro" },
  { label: "Montserrat" },
  { label: "Morocco" },
  { label: "Mozambique" },
  { label: "Namibia" },
  { label: "Nepal" },
  { label: "Netherlands" },
  { label: "Netherlands Antilles" },
  { label: "New Caledonia" },
  { label: "New Zealand" },
  { label: "Nicaragua" },
  { label: "Niger" },
  { label: "Nigeria" },
  { label: "Norway" },
  { label: "Oman" },
  { label: "Pakistan" },
  { label: "Palestine" },
  { label: "Panama" },
  { label: "Papua New Guinea" },
  { label: "Paraguay" },
  { label: "Peru" },
  { label: "Philippines" },
  { label: "Poland" },
  { label: "Portugal" },
  { label: "Puerto Rico" },
  { label: "Qatar" },
  { label: "Reunion" },
  { label: "Romania" },
  { label: "Russia" },
  { label: "Rwanda" },
  { label: "Saint Pierre , Miquelon" },
  { label: "Samoa" },
  { label: "San Marino" },
  { label: "Satellite" },
  { label: "Saudi Arabia" },
  { label: "Senegal" },
  { label: "Serbia" },
  { label: "Seychelles" },
  { label: "Sierra Leone" },
  { label: "Singapore" },
  { label: "Slovakia" },
  { label: "Slovenia" },
  { label: "South Africa" },
  { label: "South Korea" },
  { label: "Spain" },
  { label: "Sri Lanka" },
  { label: "St Kitts , Nevis" },
  { label: "St Lucia" },
  { label: "St Vincent" },
  { label: "St. Lucia" },
  { label: "Sudan" },
  { label: "Suriname" },
  { label: "Swaziland" },
  { label: "Sweden" },
  { label: "Switzerland" },
  { label: "Syria" },
  { label: "Taiwan" },
  { label: "Tajikistan" },
  { label: "Tanzania" },
  { label: "Thailand" },
  { label: "Timor L'Este" },
  { label: "Togo" },
  { label: "Tonga" },
  { label: "Trinidad , Tobago" },
  { label: "Tunisia" },
  { label: "Turkey" },
  { label: "Turkmenistan" },
  { label: "Turks , Caicos" },
  { label: "Uganda" },
  { label: "Ukraine" },
  { label: "United Arab Emirates" },
  { label: "United Kingdom" },
  { label: "United States" },
  { label: "United States Minor Outlying Islands" },
  { label: "Uruguay" },
  { label: "Uzbekistan" },
  { label: "Venezuela" },
  { label: "Vietnam" },
  { label: "Virgin Islands (US)" },
  { label: "Yemen" },
  { label: "Zambia" },
  { label: "Zimbabwe" }
];
function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput
        },
        ...InputProps
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestionProps) {
  const {
    suggestion,
    index,
    itemProps,
    highlightedIndex,
    selectedItem
  } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || "").indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 400 : 400
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired
};

function getSuggestions(value, { showEmpty = false } = {}) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0 && !showEmpty
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function DownshiftMultiple(props) {
  const { classes } = props;
  const [inputValue, setInputValue] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState([]);

  function handleKeyDown(event) {
    if (
      selectedItem.length &&
      !inputValue.length &&
      event.key === "Backspace"
    ) {
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleChange(item) {
    let newSelectedItem = [...selectedItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputValue("");
    setSelectedItem(newSelectedItem);
  }

  const handleDelete = item => () => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedItem(newSelectedItem);
  };

  return (
    <Downshift
      id="downshift-multiple"
      inputValue={inputValue}
      onChange={handleChange}
      selectedItem={selectedItem}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        isOpen,
        inputValue: inputValue2,
        selectedItem: selectedItem2,
        highlightedIndex
      }) => {
        const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
          onKeyDown: handleKeyDown,
          placeholder: "Select multiple countries"
        });

        return (
          <div className={classes.container}>
            {renderInput({
              fullWidth: true,
              classes,
              label: "Countries",
              InputLabelProps: getLabelProps(),
              InputProps: {
                startAdornment: selectedItem.map(item => (
                  <Chip
                    key={item}
                    tabIndex={-1}
                    label={item}
                    className={classes.chip}
                    onDelete={handleDelete(item)}
                  />
                )),
                onBlur,
                onChange: event => {
                  handleInputChange(event);
                  onChange(event);
                },
                onFocus
              },
              inputProps
            })}

            {isOpen ? (
              <Paper className={classes.paper} square>
                {getSuggestions(inputValue2).map((suggestion, index) =>
                  renderSuggestion({
                    suggestion,
                    index,
                    itemProps: getItemProps({ item: suggestion.label }),
                    highlightedIndex,
                    selectedItem: selectedItem2
                  })
                )}
              </Paper>
            ) : null}
          </div>
        );
      }}
    </Downshift>
  );
}

DownshiftMultiple.propTypes = {
  classes: PropTypes.object.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  container: {
    flexGrow: 1,
    position: "relative"
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  chip: {
    margin: theme.spacing(0.5, 0.25)
  },
  inputRoot: {
    flexWrap: "wrap"
  },
  inputInput: {
    width: "auto",
    flexGrow: 1
  },
  divider: {
    height: theme.spacing(2)
  }
}));

export default function IntegrationDownshift() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Downshift id="downshift-simple">
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem
        }) => {
          const { onBlur, onFocus, ...inputProps } = getInputProps({
            placeholder: "Search for a country (start with a)"
          });

          return (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                label: "Country",
                InputLabelProps: getLabelProps({ shrink: true }),
                InputProps: { onBlur, onFocus },
                inputProps
              })}

              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({ item: suggestion.label }),
                        highlightedIndex,
                        selectedItem
                      })
                    )}
                  </Paper>
                ) : null}
              </div>
            </div>
          );
        }}
      </Downshift>
    </div>
  );
}
