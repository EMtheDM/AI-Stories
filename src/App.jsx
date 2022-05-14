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

  const deleteResponse = (id) => {
    if (
      window.confirm(
        `Are you sure you want to delete response? This cannot be undone!`
      )
    ) {
      setResponseHistory(
        responseHistory.filter((response) => response.date !== id)
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("responses", JSON.stringify(responseHistory));
  }, [responseHistory]);

  return (
    <div className="App">
      <Prompt saveResponse={saveResponse} />
      <ResponseList
        responseHistory={responseHistory}
        deleteResponse={deleteResponse}
      />
    </div>
  );
}

export default App;
