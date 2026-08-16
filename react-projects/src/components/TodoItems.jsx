import { MdDelete, MdEdit } from "react-icons/md";

export default function TodoItems({ todo, handleDelete, handleEdit }) {
  return (
    <>
      {todo.map((el) => (
        <div
          key={el.id}
          className="singleTodo"
          style={{
            width: 500,
            height: 90,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <li>{el.text}</li>
          &nbsp;&nbsp;&nbsp;
          <MdEdit
            size={24}
            style={{ cursor: "pointer", color: "black" }}
            onClick={() => handleEdit(el.id)}
          />
          &nbsp;
          <MdDelete
            size={24}
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => handleDelete(el.id)}
          />
        </div>
      ))}
    </>
  );
}
