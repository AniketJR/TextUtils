import React, {useState} from 'react'

export default function TextForm(props) {

    const[text,setText] = useState('');

    //grab and set the text value in text variable
    const funOnChange = (event) =>{
        setText(event.target.value);
    }

    //convert to uppercase and set it as the value of text variable
    const funUpperCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    //convert to lowercase and set it as the value of text variable
    const funLowerCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    //copy the text in the textbox
    const funCopy = () =>{
        let text = document.getElementById('my-box');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    //remove extra spaces
    const funRemoveExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    //set the value of text variable to blank
    const funClearText = () =>{
        let newText = '';
        setText(newText);
    }


    return (
        <>
        <div className=" my-5 container">
            <div className="mb-3">
                <label htmlFor="my-box" className="form-label"><h3>Enter your text:</h3></label>
                <textarea className="form-control" id="my-box" rows="8" value={text} onChange={funOnChange}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={funUpperCase}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={funLowerCase}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={funCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={funRemoveExtraSpaces}>Remove extra spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={funClearText}>Clear text</button>
        </div>
        <div className='my-4 container'>
            <h3>Summary:</h3>
            <p>Words: {text.length>0 ? text.trim().split(/\s+/).length : 0}</p>
            <p>Characters : {text.length}</p>
            <p>Average reading time: {0.004 * (text.length>0 ? text.trim().split(" ").length : 0)} minutes</p>
            <h4>Preview:</h4>
            <p>{text.length>0? text: "Enter your text to see the preview"}</p>
        </div>
        </>
    )
}
