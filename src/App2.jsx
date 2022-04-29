import React, { useState } from "react";
import useChildComp from "./useChildComp";

function App2() {
  const [newson, setNewson] = useState(0);
  const [todo, time, setTodo, setTime, basket, addTodo] = useChildComp();

  const [son, addBtn, minusBtn, resetBtn] = useChildComp(15, Number(newson));

  return (
    <div>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
      />

      <input
        value={time}
        onChange={(e) => setTime(e.target.value)}
        type="text"
      />

      <input
        value={newson}
        value={(e) => setNewson(e.target.value)}
        type="number"
      />

      <ol>
        {basket.length > 0 ? (
          basket.map((item) => (
            <li>
              <p> Bajariladigan ishlar: {item.todo}</p>
              <p> Vaqti: {item.time}</p>
            </li>
          ))
        ) : (
          <p>Vazifa kiritilmagan</p>
        )}
      </ol>

      <p>{son}</p>

      <button onClick={addTodo}>Submit</button>
      <button onClick={addBtn}>Plus</button>
      <button onClick={minusBtn}>Minus</button>
      <button onClick={resetBtn}>Reset</button>
    </div>
  );
}

export default App2;
