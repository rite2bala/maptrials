import React, { Component } from "react";
import { Header, Footer } from "./layouts";
import Content from "./content";
import { ImageBackground } from "react-native";
//export default props => <div className="App">Hi</div>;

export default class extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./images/background.jpg")}
        resizeMode="repeat"
        style={{ width: "100%", opacity: 100, height: "100%" }}
      >
        <Header />
        <Content />
        <Footer />
      </ImageBackground>
    );
  }
}
