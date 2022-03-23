import React from "react";

const Post = ({post}) => {
  return (
    <div className="card mb-3" style={{width: '18rem'}}>
      <img src="https://images.unsplash.com/photo-1647808281776-1e5e9c8a48e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Post;