import React from "react";
import Synonyms from "./Synonym";
import "./Meanings.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition} </div>
            <ul>
              <li>
                <div className="example">{definition.example}</div>
              </li>
            </ul>
          </div>
        );
      })}
      <div className="synonyms">
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
