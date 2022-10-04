import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const postDetails = useLoaderData();
  const { id, title, body, userId } = postDetails;
  const author = useNavigate();
  const handleAuthor = () => {
    author(`/friend/${userId}`);
  };
  return (
    <div>
      <h1>Post Detail Page: {id}</h1>
      <h4>{title}</h4>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleAuthor}>Get Author</button>
    </div>
  );
};

export default PostDetail;
