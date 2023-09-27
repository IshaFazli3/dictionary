import React from "react"; 

export default function Phonetic(props) {
  return (
    <div calssName="Phonetic">
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );

}