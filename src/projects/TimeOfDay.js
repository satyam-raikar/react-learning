

import React from "react";

export default function wish(){
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  const styles = {

    fontSize: 20
  }

  if (hours < 12){
    timeOfDay="Morning"
    styles.color = "orange"
  } 
  else if  (hours >= 12 && hours <=17){
    timeOfDay="AfterNoon"
     styles.color = "red"
  }
  else {
    timeOfDay="Night"
     styles.color = "black"
  }



return(

  <h1 style = {styles} className = "wish"> Its {timeOfDay}</h1>
)

}


