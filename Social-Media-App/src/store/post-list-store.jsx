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
    title: 'Lets Make Music',
    body: 'Music is a form of expressing feelings and emotions in rhythm and poetic style.',
    reaction: 200,
    userId: 'user-5',
    tags: ['music', 'hip-hop', 'singing']
  },
  {
    id: '2',
    title: 'Trip to the Mountains',
    body: 'Planning a weekend getaway to the snowy peaks. Excited for fresh air and beautiful views.',
    reaction: 134,
    userId: 'user-3',
    tags: ['travel', 'adventure', 'nature']
  },
  {
    id: '3',
    title: 'Cooking with Friends',
    body: 'Had a great time trying new recipes together. Lots of laughter, and some burnt cookies too.',
    reaction: 87,
    userId: 'user-7',
    tags: ['food', 'friends', 'fun']
  }
];

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type ==='DELETE_POST') {
    newPostList=currPostList.filter(post => post.id !== action.payload.postId);
  }
  else if(action.type === 'ADD_POST') {
    newPostList=[action.payload, ...currPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, postContent,postTitle,reaction,tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
    id: Date.now(),
    title: postTitle,
    body: postContent,
    reaction: reaction,
    userId: userId,
    tags: tags
  }
    })
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