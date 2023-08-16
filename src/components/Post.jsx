import React from "react";

function Post({ post }) {
  return (
    <div className="col">
      <div className="card">
        <img src={post.image} className="card-img-top" alt="Post" />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content.substring(0, 100)}...</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{post.location}</small>
        </div>
      </div>
    </div>
  );
}

export default Post;
