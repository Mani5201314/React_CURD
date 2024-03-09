import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../css/add.css";

const Get = () => {
  let [state, setState] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/users").then(res => {
      console.log(res);
      setState(res.data);
    });
  }, []);

  const del = m => {
    axios.delete(`http://localhost:4000/users/${m}`).then(() => {
      setState(state.filter(user => user.id !== m));
    });
  };
  const navigate = useNavigate();
  function add() {
    navigate("/add");
  }
  // function del(id) {
  //   axios.delete("http://localhost:9090/users/" + id).then(res => {
  //     console.log(res)
  //   })
  //   navigate("/")
  // }
  // const navigate1 = useNavigate();
  // function edit() {
  //   navigate1("/edit");
  // }

  return (
    <div>
      <center>
        <h1 style={{ color: "red" }}>React Curd</h1>

        <button onClick={add}>Add+</button>

        <br />
        <br />

        <table border={1} rules="all">
          <tbody>
            {state.map(x => {
              return (
                <>
                  <tr style={{ color: "crimson" }}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td style={{ textAlign: "center" }}>
                      <button>
                        <Link to={`/edit/${x.id}`}>Update</Link>
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button onClick={() => del(x.id)}>Delete</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Get;
