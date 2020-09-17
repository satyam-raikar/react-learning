import React from "react";

import Todo from "../projects/Todo";
import TimeOfDay from "../projects/TimeOfDay";
import ContactCard from "../projects/ContactCard";
import Joke from "../projects/Joke";
import jokesData from "../projects/jokesData";
import Product from "../projects/Product"
import productsData from "../projects/productsData"
import todoData from "../projects/todoData"

export default function fContent() {

   const jokeComponents = jokesData.map(joke => <Joke que={joke.que} ans={joke.ans}/>)
      
  const productComponent = productsData.map(p => <Product name={p.name} price={p.price} description={p.description}/>)

  const todoComponent = todoData.map(thing => < Todo key={thing.id} task={thing.text} status={thing.completed}/>)

  return (
    <div>
      <TimeOfDay />

      {productComponent}

      <br />
      <hr />
      <p>Project Joke - </p>
      {jokeComponents}
     

      <br />
      <hr />
      <p>Project TODO List -</p>
      {todoComponent}
      
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

      
