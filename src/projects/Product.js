import React from "react";

export default function Product(props){
return(
  <div className= "product-item">
  <p> Product Name : {props.name}</p>
  <p> Product Price : {props.price}</p>
  <p> Product Discription : {props.description}</p>
  </div>

)

}