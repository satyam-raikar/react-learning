import React from "react";

import Todo from "../projects/Todo";
import TimeOfDay from "../projects/TimeOfDay";
import ContactCard from "../projects/ContactCard";
import Joke from "../projects/Joke";

export default function fContent() {
  return (
    <div>
      <TimeOfDay />
      <br />
      <hr />
      <p>Project Joke - </p>
      <Joke
        que="What's the best thing about Switzerland?"
        ans="I don't know, but the flag is a big plus!"
      />
      <Joke
        que="Did you hear about the mathematician who's afraid of negative numbers?"
        ans="He'll stop at nothing to avoid them!"
      />
      <br />
      <hr />
      <p>Project TODO List -</p>
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
