import React, { useState } from "react";
import Alert from './Alert';

export default function Textarea(props) {
  const [text, settext] = useState("");
  let handleChange = (event) => {
    return settext(event.target.value);
  };
  
    let convertToUppercase = () => {
      settext(text.toUpperCase());
      props.handleAlert('Text changed to uppercase!');
    };

  let handleClear = () => {
    settext("");
    props.handleAlert("Text cleared!");
  }

  let handleLowercase=()=>{
    settext(text.toLowerCase());
    props.handleAlert('Text changed to lowercase!');
  }

  let handleCopy = () => {
    text.select();
    navigator.clipboard.writeText(text.value);
    props.handleAlert('Copied to clipboard!');
  }
  let handleSpacing = () => {
    settext(text.split(/[ ]+/).join(" "));
    props.handleAlert("Extra space removed!");
  }
  let handleFirstUppercase =() => {
    settext(text.split(/[ ]+/).map(item => item.charAt(0).toUpperCase().concat(item.slice(1))).join(" "));
    props.handleAlert("First letter of every word converted to uppercase!");
  };

  return (
    <>
      <div className={`container mb-3 text-${props.mode==='light' ? 'dark':'light'}`}>
        <h2 className="my-3">Enter Text Below!</h2>
      </div>
      <div className="container mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          placeholder="Start typing here..."
          onChange={handleChange}
          value={text}
        ></textarea>
        {/* we have used text state variable in value here rather than using it within textarea opening and closing tags
         because otherwise text within textarea will not render the changes that happen to text variable after completion of any onClick event */}
        <button className="btn btn-primary my-3" onClick={convertToUppercase}>
          Convert To UPPERCASE
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLowercase}>
          Convert To lowercase
        </button>
        <button className="btn btn-primary my-3" onClick={handleFirstUppercase}>
          1st letter To UPPERCASE
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleSpacing}>Remove Spacing</button>
        <button className="btn btn-primary my-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleClear}>Clear Text</button>
      </div>

      <div className="container"><Alert alert={props.alert}/></div>
      
      <div className={`container mb-3 text-${props.mode==='light' ? 'dark':'light'}`}>
        <h3>Summary</h3>
        <p>No. of words: <strong>{text.length === 0 ? 0:text.split(" ").length}</strong></p>
        <p>No. of characters: <strong>{text.length}</strong></p>
      </div>
      <div className={`container mb-3 text-${props.mode==='light' ? 'dark':'light'}`}>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter text to preview !"}</p>
      </div>
    </>
  );
}
