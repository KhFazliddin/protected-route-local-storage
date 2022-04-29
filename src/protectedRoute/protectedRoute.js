import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { StateContext } from "../context/context";

export default function ProtectedRoute() {
  const { state } = useContext(StateContext);

  return state.loggedIn ? <Outlet /> : <Navigate to="login" />;
}
