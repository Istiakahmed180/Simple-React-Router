import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { title, body, id } = post;
  const navigate = useNavigate();
  const handlerButtonNavigate = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="post">
      <h4>{title}</h4>
      <p>
        <small>{body}</small>
      </p>
      <Link to={`/post/${id}`}>Visit Page: {id}</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handlerButtonNavigate}>Show Details Navigate</button>
    </div>
  );
};

export default Post;
