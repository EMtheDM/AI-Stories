import "./ResponseList.css";
import Response from "../Response/Response";
import { Paper, Grid, ListItem } from "@mui/material";

const ResponseList = ({ responseHistory }) => {
  return (
    <Grid
      className="listGrid"
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <h2 className="history">History:</h2>
      <Grid>
        {responseHistory.map((response) => (
          <ListItem className="responseList">
            <Paper elevation={3} className="listPaper">
              <Response
                prompt={response.prompt}
                response={response.response}
                key={response.date}
              />
            </Paper>
          </ListItem>
        ))}
      </Grid>
    </Grid>
  );
};

export default ResponseList;
