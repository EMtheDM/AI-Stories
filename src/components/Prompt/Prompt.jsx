import "./Prompt.css";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { Container, Grid, FormControl, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

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
      <Container maxWidth="xl">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="start"
          // style={{
          //   minHeight: "100vh",
          // }}
        >
          <h1>
            AI Poetry <IoChatbubbleEllipsesOutline />
          </h1>
          <h2>
            Good Morrow! Welcome to the AI Poetry site, where you can ask an AI
            to write poetry for you!
          </h2>
          <h3>
            Simply tell the AI what you would like your poem to be about below:
          </h3>
          <FormControl>
            <TextField
              sx={{
                width: 600,
              }}
              margin="normal"
              type="text"
              label="Ex: Write a poem about summer"
              multiline
              maxRows={4}
              value={prompt}
              onChange={({ target }) => handleChange(target.value)}
              id="fullWidth"
              className="input"
            />
            {!isLoading && (
              <LoadingButton
                variant="outlined"
                color="primary"
                onClick={handleSubmit}
                sx={{ width: 600, height: 60 }}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                Submit
              </LoadingButton>
            )}
            {isLoading && (
              <LoadingButton
                loading
                variant="outlined"
                color="primary"
                onClick={handleSubmit}
                sx={{ width: 600, height: 60 }}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                Loading...
              </LoadingButton>
            )}
          </FormControl>
        </Grid>
      </Container>
    </>
  );
};

export default Prompt;
