import Header from "../../Header";
import EditorForm from "./EditorForm";

const EditorPage = () => {
  const addArticleHandler = async (article) => {
    const response = await fetch("https://my-blog-a6577-default-rtdb.firebaseio.com/articles.json", 
    {
      method: "POST",
      body: JSON.stringify(article)
    });
    const data = await response.json();
    console.log(data)
  };
  return (
    <div className="editor-page">
      <Header />
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <EditorForm onAddArticle={addArticleHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
