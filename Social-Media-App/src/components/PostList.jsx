import { useContext, useEffect,useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";



const PostList = () => {
  const { postList , addInitialPosts } = useContext(PostListData);

  const [fetching,setFetching] = useState(false);

  useEffect(()=>{
    setFetching(true);
  fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        addInitialPosts(data.posts);
        setFetching(false);
      })
},[]);

  return (
    <div className="row g-3 align-items-stretch">
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length ===0  && <WelcomeMessage/> }
      {!fetching && postList.map((post) => (
        <div key={post.id} className="col-md-6 d-flex">
          <div className="w-100 h-100">
            <Post post={post} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
