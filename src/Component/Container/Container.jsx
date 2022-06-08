import FeedToggle from "./FeedToggle";
import ArticlesViewer from "../ArticlesViewer/ArticlesViewer";
import SideBar from "./SideBar";

const Container = () => {
  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <FeedToggle />
          {/*List out Article Preview by .map() */}
          <ArticlesViewer />
        </div>

        <div className="col-md-3">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Container;
