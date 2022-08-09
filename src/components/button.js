import React from "react";
import utils from "../utils.js";
import store from '../store';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    let modalContainer = document.getElementById("modal");
    const { dataLoaded }=store.getState().dataLoaded;
    if (dataLoaded) {
      return;
    }

    modalContainer.classList.toggle("hidden");
    store.dispatch({ type:"DATA_LOADING", loading: true });

    utils.loadData(() => {
      store.dispatch({ type:"DATA_LOADING", loading: false });
      store.dispatch({ type:"TOGGLE_DATALOADED"});
    });
  }
  render() {
    return <button onClick={this.handleOnClick}>Load Data</button>;
  }
}
