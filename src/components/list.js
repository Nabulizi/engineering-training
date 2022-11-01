import React from "react";
import ListItem from "./listitem";
import { connect } from "react-redux";

function List(props) {

    // console.log(props.data.jirasObject);
 if(props.data.jirasObject != undefined){
    return (
        <ul className="group">
          {props.data.jirasObject.map((properties, index) => (
            <ListItem
              key={index}
              link={properties.link}
              title={properties.title}
              icon={properties.icon}
              // status={properties.status}
              iconText={properties.iconText}
            />
          ))}
        </ul>
    );   
 }

}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        data:state.dataLoaded.data
    }
}

export default connect(mapStateToProps)(List)