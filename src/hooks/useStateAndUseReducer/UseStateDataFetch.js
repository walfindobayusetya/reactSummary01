//jika aplikasi Anda sederhana dan Anda ingin menghindari kompleksitas tambahan, Anda dapat menggunakan useState.
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UseStateDataFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setIsLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((error) => {
        setIsLoading(false);
        setPost({});
        setError("Oops. .. Something went wrong!!");
      });
  }, []);
  return (
    <div>
      {isLoading ? "data is loading" : post.title}
      {error ? error : null}
    </div>
  );
}
