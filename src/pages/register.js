import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../context/context";
import { addUserInfos } from "../reducer/action";

function Register(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(StateContext);
  const navigate = useNavigate();

  const submitBtn = (e) => {
    e.preventDefault();
    const newObj = { name, email, password };
    dispatch(addUserInfos(newObj));
    navigate("/login");
  };

  return (
    <div>
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ismingizni kiriting"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Emailingizni kiriting"
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parolni kiriting"
          type="text"
        />

        <button onClick={submitBtn} type="submit">
          {" "}
          Register account
        </button>
      </form>
    </div>
  );
}

export default Register;
