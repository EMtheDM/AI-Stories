import "./Prompt.css";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import {
  Container,
  Box,
  Paper,
  Grid,
  FormControl,
  TextField,
  Button,
  Input,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

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
          <h1>AI Poetry</h1>
          <FormControl>
            <TextField
              sx={{
                width: 1000,
              }}
              margin="normal"
              type="text"
              label="Write poetry here!"
              multiline
              maxRows={4}
              value={prompt}
              onChange={({ target }) => handleChange(target.value)}
              id="fullWidth"
            />
            {!isLoading && (
              <LoadingButton variant="outlined" onClick={handleSubmit}>
                Submit
              </LoadingButton>
            )}
            {isLoading && (
              <LoadingButton loading variant="outlined" onClick={handleSubmit}>
                Writing Poetry...
              </LoadingButton>
            )}
          </FormControl>
        </Grid>
      </Container>
    </>
  );
};

export default Prompt;
