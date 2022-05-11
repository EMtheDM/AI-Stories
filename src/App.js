import * as React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Container,
  FormGroup,
  List,
  ListItem,
  ListItemText,
  FormControlLabel,
  Grid,
  Typography,
  Box,
  ListItemIcon,
} from "@mui/material/";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useState } from "react";
import "./App.css";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

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
      <Container maxWidth="sm">
        <TextareaAutosize
          aria-label="minimum height"
          minRows={12}
          placeholder="Enter poetry here"
          style={{ width: 500 }}
        />
        <Button variant="contained">Submit For Poetry</Button>
      </Container>
      <Container maxWidth="sm">
        <Demo>
          <List dense={dense}>
            {generate(
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            )}
          </List>
        </Demo>
      </Container>
    </div>
  );
}

export default App;
