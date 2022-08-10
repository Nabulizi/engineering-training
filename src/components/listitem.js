import React from "react";

export default function ListItem(props){
    return <li className="item"><a href={props.link}> 
    <button type="button" className={props.icon}></button>
     {props.title} 
    </a></li>
}