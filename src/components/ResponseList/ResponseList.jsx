import "./ResponseList.css";
import Response from "../Response/Response";

const ResponseList = ({ responseHistory }) => {
  if (responseHistory.length < 1) return <h5>No Poetry Yet</h5>;

  return (
    <ul>
      {responseHistory.map((response) => {
        <li>
          <Response
            prompt={response.prompt}
            response={response.response}
            key={response.date}
          />
        </li>;
      })}
    </ul>
  );
};

export default ResponseList;
