//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  
  return (
    <div className="posts-container-wrapper">
      {/* {props.data.map}(post => (
        <li key={post.id}>{post}</li>
      ))} */}
    </div>
  );
};

export default PostsPage;

