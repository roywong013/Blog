import FeedToggle from "./FeedToggle";
import ArticlePreview from "./ArticlePreview";
import SideBar from "./SideBar";

const Container = () => {
  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <FeedToggle />
          {/*List out Article Preview by .map() */}
          <ArticlePreview />
          <ArticlePreview />
        </div>

        <div className="col-md-3">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Container;
