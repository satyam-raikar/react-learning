import React from "react"
import jokesData from "./jokesData"

export default function Joke(props){

return(

<div className="joke-item">
<p> Question : {props.que}</p>
<p> Answer : {props.ans}</p>
<br/>
</div>

)


}