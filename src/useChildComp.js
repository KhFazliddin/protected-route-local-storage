import React, { useState } from "react";

function useChildComp(initCount = 0, addingCount) {
  const [basket, setBasket] = useState([]);
  const [todo, setTodo] = useState("");
  const [time, setTime] = useState("");
  const [son, setSon] = useState(initCount);

  const addTodo = (e) => {
    e.preventDefault();
    const newObj = {
      todo,
      time,
    };
    setBasket([...basket, newObj]);
    setTodo("");
    setTime("");
  };

  const addBtn = (e) => {
    e.preventDefault();
    setSon(son + addingCount);
  };

  const minusBtn = (e) => {
    e.preventDefault();
    setSon(son + addingCount);
  };

  const resetBtn = (e) => {
    e.preventDefault();
    setSon(0);
  };

  console.log(basket);
  return [
    todo,
    time,
    setTodo,
    setTime,
    basket,
    addTodo,
    son,
    addBtn,
    minusBtn,
    resetBtn,
  ];
}

export default useChildComp;
