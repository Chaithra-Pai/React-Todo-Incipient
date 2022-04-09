import React, { useState } from "react";

function Input(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={input}
              placeholder="Update Task"
              aria-label="Update Task"
              aria-describedby="addon-wrapping"
              onChange={handleChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={input}
              placeholder="New Task"
              aria-label="New Task"
              aria-describedby="addon-wrapping"
              onChange={handleChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </span>
          </div>
        </>
      )}
    </form>
  );
}

export default Input;
