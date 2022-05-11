import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState();

  // const onSubmit = (event) => {
  //   event.preventDefault()
  //   const response = await fetch('s', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ text: textInput })
  //   })
  //   const data = await response.json()
  //   setResult(data.result)
  //   setText("")
  // }

  return (
    <div className="App">
      <TextareaAutosize
        aria-label="minimum height"
        minRows={12}
        placeholder="Enter poetry here"
        style={{ width: 800 }}
      />
      <Button variant="contained">Submit For Poetry</Button>
    </div>
  );
}

export default App;
