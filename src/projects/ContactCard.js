import React from "react";

export default function ContactCard(props){
return(
<div className= "contacts">
  <img src = {props.contact.imgUrl} />
  <p>Name  : {props.contact.name}</p>
  <p>Number : {props.contact.phone}</p>
  <p>Email : {props.contact.email}</p>
  </div>
)

}