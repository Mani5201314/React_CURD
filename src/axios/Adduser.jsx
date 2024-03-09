import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
const Adduser = () => {
  let [values, setvalue] = useState({ name: "", email: "", id: "" });

  let change = e => {
    setvalue({ ...values, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  function send(e) {
    e.preventDefault();
    axios.post("http://localhost:4000/users", values).then(res => {
      navigate("/");
    });
  }

  return (
    <center>
      <div className="box">
        <form action="">
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={values.name}
            onChange={change}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            placeholder=" Enter email"
            value={values.email}
            onChange={change}
          />
          <br />

          <button onClick={send}>Add user</button>
        </form>
      </div>
    </center>
  );
};

export default Adduser;
