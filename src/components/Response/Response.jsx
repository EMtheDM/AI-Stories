import "./Response.css";
import { Container, Box, Grid, IconButton } from "@mui/material";
import { IoClose } from "react-icons/io5";

const Response = ({ prompt, response, date, deleteResponse }) => {
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
          <Grid container spacing={0} justifyContent="flex-end">
            <IconButton
              className="closeBtn"
              color="error"
              fontSize="inherit"
              size="large"
              onClick={() => deleteResponse(date)}
            >
              <IoClose />
            </IconButton>
          </Grid>
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
