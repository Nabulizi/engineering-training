import React from "react";
import { connect } from "react-redux";

function ErrorMessage(props) {
    console.log('errr prop', props);
    if(props.error){
        return <div className="alert alert-danger" role="alert">This is a danger alert—check it out!</div>;
    }else{
        return ;
    }
}

const mapStateToProps=(state)=>{
    console.log('map state erorr',state);
    return{
        error:state.dataLoaded.error
    }
}

export default connect(mapStateToProps)(ErrorMessage)