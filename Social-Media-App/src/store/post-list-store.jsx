import { createContext, useReducer } from "react";


// Create the context (don't import PostList component here if it causes conflict)
const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {}
});

// Define DEFAULT_POST_LIST before using it
const DEFAULT_POST_LIST = [
  {
    id: '1',
    title: 'Going to mumbai',
    body: 'Hope to enjoy a lot, Peace Out',
    reaction: 45,
    userId: "user-9",
    tags: ["vactaions", "enjoying", "family time"]
  },
  {
    id: '2',
    title: 'Hip Hop Music',
    body: 'The hip hop scene in india is growing day by day, We see a new artist every other day',
    reaction: 500,
    userId: "user-13",
    tags: ["dhh", "hiphop", "rap"]
  }
];

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type ==='DELETE_POST') {
    newPostList=currPostList.filter(post => post.id !== action.payload.postId);
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {
    // Implementation needed
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {postId}
    });
  };

  return (
    <PostList.Provider value={{
      postList,
      addPost,
      deletePost
    }}>
      {children}
    </PostList.Provider>
  );
};

export { PostList, PostListProvider };