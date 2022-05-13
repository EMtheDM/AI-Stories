import "./ResponseList.css";
import Response from "../Response/Response";

const ResponseList = ({ responseHistory }) => {
  if (responseHistory.length < 1)
    return <p className="no-response-text">No responses yet...</p>;

  return (
    <ul>
      {responseHistory.map((response) => (
        <li>
          <Response
            prompt={response.prompt}
            response={response.response}
            key={response.date}
          />
        </li>
      ))}
    </ul>
  );
};

export default ResponseList;
