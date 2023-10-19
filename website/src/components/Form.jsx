import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, age });
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group" style={{ marginBottom: 20 + "px" }}>
          <label htmlFor="Name">Name</label>
          <br />
          <input
            placeholder={"Enter name"}
            className="form-control"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group" style={{ marginBottom: 20 + "px" }}>
          <label htmlFor="Age">Age</label>
          <br />
          <input
            placeholder={"Enter age"}
            className="form-control"
            onChange={(event) => setAge(event.target.value)}
            type="number"
            min="15"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="results"></div>
    </div>
  );
};

export default Form;
