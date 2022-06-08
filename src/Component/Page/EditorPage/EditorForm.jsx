import { useRef } from "react";

const EditorForm = (props) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const bodyRef = useRef();
  const tagListRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const article = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      body: bodyRef.current.value,
      tagList: tagListRef.current.value
    };

    props.onAddArticle(article);
  };
  return (
    <form onSubmit={submitHandler}>
      <fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            name="title"
            className="form-control form-control-lg"
            placeholder="Article Title"
            ref={titleRef}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="What's this article about?"
            ref={descriptionRef}
          />
        </fieldset>
        <fieldset className="form-group">
          <textarea
            className="form-control"
            rows="8"
            placeholder="Write your article (in markdown)"
            ref={bodyRef}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter tags"
            ref={tagListRef}
          />
          <div className="tag-list"></div>
        </fieldset>
        <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
          Publish Article
        </button>
      </fieldset>
    </form>
  );
};

export default EditorForm;
