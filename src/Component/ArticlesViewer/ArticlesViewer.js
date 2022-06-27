import { useState, useCallback, useEffect } from "react";
import ArticlePreview from "../Container/ArticlePreview";

const ArticlesViewer = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArticlesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://my-blog-a6577-default-rtdb.firebaseio.com/articles.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      const loadedArticles = [];
      for (const key in data) {
        loadedArticles.unshift({
          id: key,
          title: data[key].title,
          description: data[key].description,
          body: data[key].body,
          tagList: data[key].tagList
        });
      }
      setArticles(loadedArticles);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchArticlesHandler();
  }, [fetchArticlesHandler]);

  //Consider to use for-loop for better run-time
  const MapArticlePreview = articles.map((article) => (
    <ArticlePreview
      title={article.title}
      description={article.description}
      body={article.body}
      tagList={article.tagList}
    />
  ));

  return (
    <div className="article-preview">
      {!isLoading && articles.length > 0 && MapArticlePreview}
      {!isLoading && articles.length === 0 && !error && (
        <p>Found No articles.</p>
      )}
      {isLoading && <p>Loading</p>}
      {!isLoading && error && <p>{error}</p>}
    </div>
  );
};

export default ArticlesViewer;
