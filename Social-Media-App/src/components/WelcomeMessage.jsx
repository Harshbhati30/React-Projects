const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <div className="welcome-message">
      <h1>There are No Posts.</h1>
      <button
        type="button"
        className="btn btn-success"
        onClick={onGetPostsClick}
      >
        Get Posts
      </button>
    </div>
  );
};

export default WelcomeMessage;
