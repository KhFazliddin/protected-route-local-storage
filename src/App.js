import { useReducer, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { StateContext } from "./context/context";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { reducer, initialInfos } from "./reducer/reducer";
import ProtectedRoute from "./protectedRoute/protectedRoute";

function App() {
  const [state, dispatch] = useReducer(reducer, initialInfos);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(state.users));
    localStorage.setItem("loggedIn", JSON.stringify(state.loggedIn));
  }, [state]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />}></Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </StateContext.Provider>
  );
}

export default App;
