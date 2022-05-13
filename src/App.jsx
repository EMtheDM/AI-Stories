import "./App.css";
import Prompt from "./components/Prompt/Prompt";
import ResponseList from "./components/ResponseList/ResponseList";
import { useState, useEffect } from "react";

function App() {
  const [responseHistory, setResponseHistory] = useState(
    localStorage.getItem("responses")
      ? JSON.parse(localStorage.getItem("responses"))
      : []
  );

  const saveResponse = (newResponse) => {
    setResponseHistory([newResponse, ...responseHistory]);
  };

  useEffect(() => {
    localStorage.setItem("responses", JSON.stringify(responseHistory));
  }, [responseHistory]);

  return (
    <div className="App">
      <Prompt saveResponse={saveResponse} />
      <ResponseList responseHistory={responseHistory} />
    </div>
  );
}

export default App;
