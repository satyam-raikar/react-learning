import React from "react"

export default function Joke(props){

return(

<div className="joke-item">
<p> Question : {props.que}</p>
<p> Answer : {props.ans}</p>
<br/>
</div>

)


}