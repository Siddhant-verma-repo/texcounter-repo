import React, { useState } from "react";
{
  /* <link rel="stylesheet" href="Texform.css" /> */
}
export default function Texform(props) {
  const [text, setText] = useState("");

  //to change text when we write in text area
  const handleonchange = (event) => {
    // setText("you have cllick handon change")
    setText(event.target.value);
  };
  //this end here

  //To capitalize all the letter
  const handupclick = () => {
    console.log("you have click hand on click " + text);
    let n = text.toUpperCase();
    // setText("upper is clicked")
    setText(n);
  };
  //Capitalize end here

  //To converting small letter
  const handownclick = () => {
    console.log("Convert character in small ");
    let s = text.toLowerCase();
    setText(s);
  };
  // small letter end here

  //To remove all the letters
  const clearclick = () => {
    console.log("Clear Text");
    // let clear=text.replace(text,"");
    let clear = "";
    setText(clear);
    props.showalert("All text is deleted","success");
  };
  //this end here

  //To rever all letter
  const reverseclick = () => {
    console.log("Reverse text");
    let rev = text.split("").reverse().join("");
    setText(rev);
  };
  //this end here

  //To encode text
  const encodeclick = () => {
    let t = text;
    setText(btoa(t));
  };
  //this end here

  //To decode text
  const decodeclick = () => {
    let t = text;
    setText(atob(t));
  };
  //this end here

  //to capitalize first letter of every word
  const handleAa = () => {
    props.showalert("Capitalized all first letter of every word","success")
    let words = text.split(" ");
    let joinedWords = [];
    let capWord;

    words.forEach(function (element) {
      if (element[0] !== undefined) {
        capWord = element[0].toUpperCase() + element.slice(1).toLowerCase();
        joinedWords += capWord + " ";
      }
    });
    setText(joinedWords);
  };
  //this end here

  //To copy the text clipboard
  const copytclick = () => {
    let tex = document.getElementById('box');
    tex.select();
    navigator.clipboard.writeText(tex.value);
  }
  const removeextraspace = () => {
    let ntext = text.split(/[  ]+/);
    setText(ntext.join(" "));
  }
  //this end here

  // text="theh"//wrog way to use to change text
  // setText("enter");
  return (
    <>
      <div className="container" style={{color:props.Mode==='dark'?'white':'#332244'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="box" className="form-label">
            {props.title}
          </label>
          <textarea
            className="form-control"
            id="box"
            rows="5"
            
             style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'#332244'}}
            value={text}
            onChange={handleonchange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-0" onClick={handupclick}>
          {" "}
          Capital letter
        </button>
        <button className="btn btn-primary mx-4" onClick={handownclick}>
          {" "}
          Small letter
        </button>
        <button className="btn btn-primary my-2 " onClick={clearclick}>
          {" "}
          Clear Text
        </button>
        <button className="btn btn-primary my-2 mx-4" onClick={reverseclick}>
          {" "}
          Reverse Text
        </button>
        <button className="btn btn-primary my-2 " onClick={encodeclick}>
          {" "}
          Encode Text
        </button>
        <button className="btn btn-primary my-2 mx-4" onClick={decodeclick}>
          {" "}
          Decode Text
        </button>
        <button className="btn btn-primary my-2 " onClick={handleAa}>
          {" "}
          Capital
        </button>
        <button className="btn btn-primary mx-4 " onClick={copytclick}>
          {" "}
          Copy Text
        </button>
        <button className="btn btn-primary my-2 " onClick={removeextraspace}>
          {" "}
          Remove Extra Spaces
        </button>
      </div>
      <div className="container" style={{color:props.Mode==='dark'?'white':'#332244'}}>
        <h2>Text Count</h2>
        <p>
          {" "}
          <b>{text.split(" ").length - 1} </b>
          words and <b> {text.length}</b> Character
        </p>
        <p>
          {" "}
          Reading time will take {0.008 * (text.split(" ").length - 1)} Minutes
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Write something in above text box to preview:"}</p>
        {/* we can write simple {text}or */}
      </div>
    </>
  );
}
