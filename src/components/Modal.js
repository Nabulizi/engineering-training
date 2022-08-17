import React from "react";
import utils from "../utils.js";
import store from '../store';
import { connect } from "react-redux";
import ModalContainer from "./ModalContainer"

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading===false) {
        return;
      }
    return <ModalContainer id="modal" ></ModalContainer>;
  }
}

const mapStateToProps=(state)=>{
    return{
        loading:state.dataLoaded.loading
    }
}

export default connect(mapStateToProps)(Modal)
