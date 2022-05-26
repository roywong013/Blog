const FeedToggle = () => {
  return (
    <div className="feed-toggle">
      {/* Show "Your Feed" If Logined*/}
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <a className="nav-link" href="/#/">
            Your Feed
          </a>
        </li>
        <li className="nav-item">
          <a class="nav-link active" href="/#/">
            Global Feed
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FeedToggle;
