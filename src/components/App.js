import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layouts";
import Content from "./content";
//export default props => <div className="App">Hi</div>;

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}
