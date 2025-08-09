import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const {addPost} = useContext(PostList);

  const userIdElements = useRef();
  const postTitleElements = useRef();
  const postContentElements = useRef();
  const reactionsElements = useRef();
  const tagsElements = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault;
    const userId=userIdElements.current.value;
    const postTitle=postTitleElements.current.value;
    const postContent=postContentElements.current.value;
    const reaction =reactionsElements.current.value;
    const tags=tagsElements.current.value.split(" ");

    userIdElements.current.value="";
    postTitleElements.current.value="";
    postContentElements.current.value="";
    reactionsElements.current.value="";
    tagsElements.current.value="";

    addPost(userId, postContent,postTitle,reaction,tags)
  }
  return (
     <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          ref={userIdElements}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElements}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postContentElements}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionsElements}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElements}
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;