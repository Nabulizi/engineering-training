import React from "react";

export default function ListItem(props){
    return <li className="item" ><a href={props.link} className={props.icon}>     
     {props.title} 
    </a></li>
}