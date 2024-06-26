import React from "react";
import "./Todos.css";
import { MdAutoMode } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";

function Todos({ note, toggleComplete, handleDelete, handleEdit }) {
  const [newDescription, setNewDescription] = React.useState(note.description);
  const HandleEdit = (e) => {
    e.preventDefault();
    console.log(e);
    if (note.completed === true) {
      setNewDescription(note.description);
    } else {
      note.description = "";
      setNewDescription(e.target.value);
    }
  };

  return (
    <div className="todo">
      <input
        style={{ textDecoration: note.completed && "line-through" }}
        type="text"
        value={note.description === "" ? newDescription : note.description}
        className="list"
        onChange={HandleEdit}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(note)}
        >
          <MdCheckCircle className="MdAutoMode" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(note, newDescription)}
        >
          <MdAutoMode className="MdAutoMode" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(note.id)}>
          <MdCancel className="MdAutoMode" />
        </button>
      </div>
    </div>
  );
}
export default Todos;
