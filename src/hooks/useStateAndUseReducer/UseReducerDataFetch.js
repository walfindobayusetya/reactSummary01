//Jika Anda memiliki banyak aksi yang berbeda yang memengaruhi state atau perlu mengelola state aplikasi yang lebih kompleks, useReducer
import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  laoding: true,
  error: "",
  post: {},
};

const reducer = (state, action)=>{ 
    switch (action.type) {
      case "DATA_FETCH_SUCCESS":
        return {
          loading: false,
          post: action.payload,
          error: "",
        };
      case "DATA_FETCH_ERROR":
        return {
          loading: false,
          post: {},
          error: "Oops... something went wrong",
        };
      default:
        return state;
    }
}

export default function UseReducerDataFetch() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      axios
        .get("http://jsonplaceholder.typicode.com/posts/1")
        .then((res) => {
          dispatch({ type: "DATA_FETCH_SUCCESS", payload: res.data });
        })
        .catch((error) => {
          dispatch({type: "DATA_FETCH_ERROR"})
        });
    }, []);
  return (
    <div>
      {state.isLoading ? "data is loading" : state.post.body}
      {state.error ? state.error : null}
    </div>
  );
}
