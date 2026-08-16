import "./faq.css";

function Faq({ question, answer, open, onToggle, id }) {
  return (
    <>
      <div className="box">
        <h2>{question}</h2>

        <button onClick={() => onToggle(id)}>
          {open ? "-" : "+"}
        </button>
      </div>

      {open && <p>{answer}</p>}
    </>
  );
}

export default Faq;