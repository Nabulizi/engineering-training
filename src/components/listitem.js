import React from "react";

export default function ListItem(props){
    return <li >        
        <a href={props.link}><span className={`badge text-bg-${props.icon}`}>{props.iconText}</span>{props.title}</a>
    </li>
}


// className={props.icon}   ,