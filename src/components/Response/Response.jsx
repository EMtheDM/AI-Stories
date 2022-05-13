import "./Response.css";
const Response = ({ prompt, response }) => {
  return (
    <>
      <div>
        <div>
          <div className="prompt-card">
            <p>Prompt:</p>
            <p>{prompt}</p>
          </div>
          <div className="response-card">
            <p>Response:</p>
            <p>{response}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Response;
