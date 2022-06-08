import { Link } from "react-router-dom";

const ArticlePreview = (props) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/@${props.author.username}`}>
          <img src={props.author.image} alt="1" />
        </Link>
        <div className="info">
          <Link to={`/@${props.author.username}`} className="author">
            {props.author.username}
          </Link>
          <span className="date">{props.date}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> 29
        </button>
      </div>
      <a href="/#/" className="preview-link">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <span>Read more...</span>
      </a>
    </div>
  );
};

export default ArticlePreview;
