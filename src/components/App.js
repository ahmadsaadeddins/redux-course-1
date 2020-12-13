import React from "react";
import Todos from "./Todos";
import Goals from "./Goals";
import { useSelector, useDispatch } from "react-redux";
import { handleFetch } from "../actions/shared";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  React.useEffect(() => {
    dispatch(handleFetch());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <div>
          <Todos />
          <Goals />
        </div>
      )}
    </div>
  );
}
