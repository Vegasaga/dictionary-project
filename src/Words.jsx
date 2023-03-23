import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonics";
import "./Words.css";

export default function WordData(props) {
  if (props.results) {
    return (
      <div className="WordData">
        <section>
          <ul className="phonetics">
            <li>
              <h2>{props.results.word}</h2>
            </li>
            <li>
              <Phonetic phonetics={props.results.phonetics[0]} />
            </li>
          </ul>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meanings meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
