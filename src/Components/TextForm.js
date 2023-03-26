import React, { useState } from 'react'

export default function TextForms(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    props.showAlert("Converted to uppercase!!","success")
    setText(newText)
  }

  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!!","success")
  }

  const handleCopy = () => {
    // console.log("Uppercase was clicked" + text);
    let text = document.getElementById("my-box")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text was copied to clipboard!!","success")
  }

  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let text = ""
    setText(text)
    props.showAlert("Text area is cleared!!","success")
  }

  const handleExtraSpaces = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces is removed!!","success")
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value)
  }

  const [text, setText] = useState("")

  // text = "New text" // Wrong way to change the text
  // setText("new text"); //Correct way to change the text

  return (
    <div className='container' style={{color: props.mode==='dark'?'white'
    :'#042743'}}>

      <h1>{props.heading}</h1>

      <div className="mb-3">

        <textarea className="form-control" value={text} id="my-box" onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='dark'?'grey'
    :'white',color:props.mode==='dark'?'white'
    :'#042743'}}></textarea>

      </div>

      <button className="btn btn-primary my-2 " onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>


      <div className="container" style={{color: props.mode==='dark'?'white'
    :'black'}}>

        <h2 className='my-2 '>Your text summary</h2>

        <p>{text.split(" ").length-1} words and {text.length} Characters</p>
        <p>{text.split(" ").length*0.008} Minutes to read</p>
        {/* <p>{text.match(/[aeiou]/gi).length} Vowels are there</p> */}

        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something To Preview It Here!!'}</p>

      </div>
    </div>
  )
}
