import { useEffect, useReducer } from "react";
import { reducer } from "../Components/Reducer/reducer";

// initialState
const initialState = {
  data: [],
  isError: false,
  isLoading: true,
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUser = async (url) => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      dispatch({ type: "ADD", payload: data });

      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
      dispatch({ type: "LOADING", payload: false });
    }
  };

  useEffect(() => {
    fetchUser(url);
  }, [url]);

  return {
    state,
    dispatch,
  };
};

export default useFetch;
