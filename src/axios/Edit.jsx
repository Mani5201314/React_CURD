import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  let { id } = useParams();
  let [values, setvalue] = useState({ name: "", email: "" });

  useEffect(() => {
    axios.get("http://localhost:4000/users/" + id, values).then(res => {
      setvalue(res.data);
    });
  }, []);

  let change = e => {
    setvalue({ ...values, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  function send(e) {
    e.preventDefault();
    axios.put("http://localhost:4000/users/" + id, values).then(res => {
      navigate("/");
    }, []);
  }

  return (
    <center>
      <h1>Update</h1>
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

          <button onClick={send}>Update user</button>
        </form>
      </div>
    </center>
  );
};

export default Edit;
