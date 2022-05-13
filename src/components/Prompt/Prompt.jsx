import "./Prompt.css";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

// Create API Configuration using API key
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const Prompt = ({ saveResponse }) => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getResponse = () => {
    try {
      openai
        .createCompletion("text-curie-001", {
          prompt: prompt,
          max_tokens: 100,
          temperature: 1,
          top_p: 1,
          echo: true,
          presence_penalty: 0,
          frequency_penalty: 0,
        })
        .then((data) => {
          const response = data.data.choices[0].text;
          const newResponse = {
            prompt: prompt,
            response: response.split("\n\n")[1],
            date: Date.now(),
          };
          setIsLoading(false);
          saveResponse(newResponse);
        });
    } catch (err) {
      console.error(err);
    }
  };

  //   What happens when Submit button is clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    getResponse();
    setPrompt("");
  };

  //   handleChange function
  const handleChange = (input) => {
    setPrompt(input);
  };

  return (
    <>
      <div>
        <h1>AI Poetry</h1>
        <form>
          <input
            type="text"
            value={prompt}
            onChange={({ target }) => handleChange(target.value)}
            placeholder="Write poetry here!"
          />
          {!isLoading && <button onClick={handleSubmit}>Submit</button>}
          {isLoading && (
            <button onClick={handleSubmit}>Writing Poetry...</button>
          )}
        </form>
      </div>
    </>
  );
};

export default Prompt;
