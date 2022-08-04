import React from "react";
import utils from "../utils.js";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataloaded: false };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    let modalContainer = document.getElementById("modal");
    if (this.state.dataloaded) {
      return;
    }

    modalContainer.classList.toggle("hidden");

    utils.loadData(() => {
      this.setState({
        dataLoaded: true,
      });
      //   dataLoaded = true;
      resolve();
    });
  }
  render() {
    return <button onClick={this.handleOnClick}>Load Data</button>;
  }
}
