import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);

  return (
    <div className="row g-3 align-items-stretch">
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
