import React, { Component, Box } from "react";
import { Header, Footer } from "./layouts";
import Content from "./content";
//import { ImageBackground } from "react-native";
import { Container } from "@material-ui/core";
//import { Paper } from "material-ui";
//export default props => <div className="App">Hi</div>;

export default class extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
      </Container>
    );
  }
}
