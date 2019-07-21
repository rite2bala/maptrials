var Country = [
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

var Status = [
  { label: "Available", value: "Available" },
  { label: "Allocated", value: "Allocated" },
  { label: "Expired", value: "Expired" },
  { label: "InTransit", value: "InTransit" },
  { label: "Delivered", value: "Delivered" }
];

if (typeof module !== "undefined") {
  module.exports = [Country, Status];
}
