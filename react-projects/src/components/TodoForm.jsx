import { useState, useEffect } from "react";

function TodoForm({ giveInput, handleUpdateTodo, isEdit, editingTodo }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    }
  }, [editingTodo]);

  function handleSubmit() {
    if (input.trim() === "") return;

    if (isEdit) {
      handleUpdateTodo(input);
    } else {
      giveInput(input);
    }

    setInput("");
  }

  return (
    <>
      <h1>Todo Application</h1>

      <div
        className="text-area"
        style={{
          width: 500,
          height: 100,
          backgroundColor: "grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="What do you need to do?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        &nbsp;
        <button onClick={handleSubmit}>{isEdit ? "Update" : "Add"}</button>
      </div>
    </>
  );
}

export default TodoForm;
