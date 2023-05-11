import React, { useState, useEffect } from 'react'
import AuthUser from '../../auth/AuthUser';




const PostsPage = () => {
  const { http } = AuthUser();
  const [posts,setposts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  
  const fetchPosts = () => {
    http.get("/posts").then((res) => {
      setposts(res.data);
      console.log(posts);
    });

    
  };
  return (
    <div>PostsPage</div>
  )
}

export default PostsPage