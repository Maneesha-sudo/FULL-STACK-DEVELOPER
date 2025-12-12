import {useState} from "react";
function MessageCard(props){
    return(
        <div style={{backgroundColor: "grey"}}>
        <h2>title: {props.title}</h2>
       <h2>message: {props.message}</h2>
       </div>

    )
}
export default MessageCard;