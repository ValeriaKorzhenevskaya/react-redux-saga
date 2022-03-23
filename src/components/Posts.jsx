import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({syncPosts}) => {
  return (
    <>
    {!syncPosts.length ?
      (
        <p>No posts....</p>
      ) : (
        <ul style={{'listStyle': 'none', 'padding': '0'}}>
          {syncPosts.map((post) => {
            return <li key={post.id}><Post post={post} /></li>
          })}
        </ul>
      )
    }
    </>
  )
}

const mapStateToProps = state => {
  return {
    syncPosts: state.posts.posts
  }
}

export default connect(mapStateToProps, null)(Posts);