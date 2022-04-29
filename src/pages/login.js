import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StateContext } from "../context/context";
import { loggedInAction } from "../reducer/action";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const [todosBasket, setTodosBasket] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoTime, setTodoTime] = useState("");



  const [count, setCount] = useState(0);
  const { state, dispatch } = useContext(StateContext);

  const navigate = useNavigate();

  const submitBtn = (e) => {
    e.preventDefault();
    const checked = state.users.some((item) => {
      return item.email === email && item.password === password;
    });
    if (checked) {
      dispatch(loggedInAction());
      navigate("/");
    } else {
      alert("Please, check your email or password");
    }
  };



  const addCount = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const minCount = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newObj={
      work:todo,
      time:todoTime
    }
setTodosBasket([...todosBasket,newObj])
setTodo("")
setTodoTime("")
  };
  console.log(todo);
  console.log(todosBasket);

  return (
    <div>
      <form>
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

        <button onClick={submitBtn}>Login</button>
      </form>
      <p>
        If you do not have account, please <Link to="/register">click it</Link>
      </p>

      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
      />
       <input
        value={todoTime}
        onChange={(e) => setTodoTime(e.target.value)}
        type="text"
      />


    
      <button onClick={addTodo}>Add todo</button>
      <ol>
      {todosBasket.length>0 ? todosBasket.map(item=>(
        <li>ish:{item.work},vaqti:{item.time} </li>
      ))
        :<li>Vazifalar hozircha yoq</li>
      }
      </ol>
      
      <p>{count}</p>
      <button onClick={addCount}>Plus</button>
      <button onClick={minCount}>Minus</button>
    </div>
  );
}

export default Login;
