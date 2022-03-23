import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Loader from "./Loader";
import Post from "./Post";

const FetchedPosts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.fetchedPosts)
  const loading = useSelector(state => state.app.loading)

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {!posts.length ?
        (
          <button type="button" className="btn btn-dark" onClick={() => dispatch(fetchPosts())}>Load posts</button>
        ) : (
          <ul style={{'listStyle': 'none', 'padding': '0'}}>
            {posts.map((post) => {
              return <li key={post.id}><Post post={post} /></li>
            })}
          </ul>
        )
      }
    </>
  )
}

export default FetchedPosts;