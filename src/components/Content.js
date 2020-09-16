import React from "react";

import Todo from "../projects/Todo";
import TimeOfDay from "../projects/TimeOfDay";
import ContactCard from "../projects/ContactCard";
import Joke from "../projects/Joke";
import jokesData from "../projects/jokesData";

export default function fContent() {

   const jokeComponents = jokesData.map(joke => <Joke que={joke.que} ans={joke.ans}/>)
      

  return (
    <div>
      <TimeOfDay />
      <br />
      <hr />
      <p>Project Joke - </p>
      {jokeComponents}
     

      <br />
      <hr />
      <p>Project TODO List -</p>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <br />
      <hr />
      <p>Project Contact Card -</p>
      <ContactCard
        contact={{
          name: "Mr. Whiskerson",
          imgUrl: "https://placekitten.com/300/200",
          phone: "(212) 555-1234",
          email: "mr.whiskaz@catnap.meow"
        }}
      />

      <ContactCard
        contact={{
          name: "Fluffykins",
          imgUrl: "https://placekitten.com/400/200",
          phone: "(212) 555-2345",
          email: "fluff@me.com"
        }}
      />
      <ContactCard
        contact={{
          name: "Destroyer",
          imgUrl: "https://placekitten.com/400/300",
          phone: "(212) 555-3456",
          email: "ofworlds@yahoo.com"
        }}
      />

      <ContactCard
        contact={{
          name: "Felix",
          imgUrl: "https://placekitten.com/200/100",
          phone: "(212) 555-4567",
          email: "thecat@hotmail.com"
        }}
      />
      <br />
      <hr />
    </div>
  );
}

      
