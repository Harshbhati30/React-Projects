import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList , addInitialPosts } = useContext(PostListData);

  const handleGetPostsClick = ()=> {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        addInitialPosts(data.posts);
      })

  }

  return (
    <div className="row g-3 align-items-stretch">
      {postList.length ===0  && <WelcomeMessage onGetPostsClick={handleGetPostsClick} /> }
      {postList.map((post) => (
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
