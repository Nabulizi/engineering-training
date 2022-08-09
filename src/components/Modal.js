import React from "react";
import utils from "../utils.js";
import store from '../store';
import { connect } from "react-redux";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading===false) {
        return;
      }
    return <div id="modal" ></div>;
  }
}

const mapStateToProps=(state)=>{
    return{
        loading:state.loading
    }
}

export default connect(mapStateToProps)(Modal)
