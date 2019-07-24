import React, { Component, Box } from "react";
import { Header, Footer } from "./layouts";
import Content from "./content";
import { ImageBackground } from "react-native";
//import { Paper } from "material-ui";
//export default props => <div className="App">Hi</div>;

export default class extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./images/background.jpg")}
        resizeMode="stretch"
        style={{ width: "100%", opacity: 100, height: "100%" }}
      >
        <Header />
        <Content />
        <div />
      </ImageBackground>
    );
  }
}
