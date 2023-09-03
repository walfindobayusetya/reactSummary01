import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchSinglePost() {
  const [post, setPost] = useState({});
  const [id, setId] = useState("");
  const [buttonClickId, setButtonClickId] = useState("");

  const handleClick = () => {
    setButtonClickId(id);
  };

  useEffect(() => {
    if (buttonClickId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${buttonClickId}`)
        .then((res) => {
          console.log(res);
          setPost(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [buttonClickId]);

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Fetch a post
      </button>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <h1>{post.title}</h1>
    </div>
  );
}
