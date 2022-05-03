import React, { useState } from "react";
import userLog from "./UserLog";
import "./createobj.css";

function CreateObj() {
  const [data, setData] = useState({ id: "", title: "", year: "" });

  const changeHandle = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
    // console.log(e.target);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    userLog.push(data);
    setData({ id: "", title: "", year: "" });
    console.log(userLog);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <label htmlFor="id">ID</label>
        <input value={data.id} onChange={changeHandle} id="id" type="text" />
        <br />
        <label htmlFor="title">title</label>
        <input
          value={data.title}
          onChange={changeHandle}
          id="title"
          type="text"
        />
        <br />
        <label htmlFor="year">Year</label>
        <input
          value={data.year}
          onChange={changeHandle}
          id="year"
          type="number"
        />
        <br />
        <button type="submit">SUBMIT</button>
      </form>

      <div className="obj">
        {userLog.map((x) => {
          return (
            <div className="newobj" key={Math.random()}>
              <p>id: {x.id}</p>
              <p>title: {x.title}</p>
              <p>year: {x.year}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CreateObj;
