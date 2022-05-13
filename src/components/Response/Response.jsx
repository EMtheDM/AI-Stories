import "./Response.css";
import { Container, Box, Grid } from "@mui/material";

const Response = ({ prompt, response }) => {
  return (
    <>
      <Container className="responseCard" margin="normal">
        <Grid
          className="grid"
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          margin="dense"
        >
          <Box className="box" margin="dense">
            <h3 className="title">Prompt:</h3>
            <p className="input">{prompt}</p>
          </Box>
          <Box className="box">
            <h3 className="title">Response:</h3>
            <p className="input">{response}</p>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Response;
