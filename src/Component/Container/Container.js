import FeedToggle from "./FeedToggle";
import ArticlePreview from "./ArticlePreview";

const Container = () => {
  return (
    <div className="container-page">
      <div className="row">
        <div className="col-md-9">
          <FeedToggle />

          {/*List out Article Preview by .map() */}
          <ArticlePreview />
        </div>
      </div>
    </div>
  );
};

export default Container;
