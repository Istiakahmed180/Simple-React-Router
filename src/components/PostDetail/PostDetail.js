import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetail = () => {
  const postDetails = useLoaderData();
  const { id, title, body } = postDetails;
  return (
    <div>
      <h1>Post Detail Page: {id}</h1>
      <h4>{title}</h4>
      <p>
        <small>{body}</small>
      </p>
    </div>
  );
};

export default PostDetail;
