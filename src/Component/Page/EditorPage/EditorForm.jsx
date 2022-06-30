import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditorForm = (props) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const bodyRef = useRef();
  const tagListRef = useRef();
  const navigate = useNavigate();

  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);
  const [isBodyValid, setIsBodyValid] = useState(false);
  const [isSubmitTouched, setIsSubmitTouched] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsSubmitTouched(true);
    titleRef.current.value.trim() === ""
      ? setIsTitleValid(false)
      : setIsTitleValid(true);

    descriptionRef.current.value.trim() === ""
      ? setIsDescriptionValid(false)
      : setIsDescriptionValid(true);

    bodyRef.current.value.trim() === ""
      ? setIsBodyValid(false)
      : setIsBodyValid(true);

    if (!isTitleValid || !isDescriptionValid || !isBodyValid) {
      window.scrollTo(0, 0);
      return;
    }

    const article = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      body: bodyRef.current.value,
      tagList: tagListRef.current.value
    };

    props.onAddArticle(article);
    navigate("/", { replace: true });
  };
  return (
    <div>
      {!isTitleValid && isSubmitTouched && (
        <p className="alert alert-warning">Please enter a valid title</p>
      )}
      {!isDescriptionValid && isSubmitTouched && (
        <p className="alert alert-warning">Please enter a valid description</p>
      )}
      {!isBodyValid && isSubmitTouched && (
        <p className="alert alert-warning">Please enter a valid body</p>
      )}
      {}
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
          <button
            className="btn btn-lg pull-xs-right btn-primary"
            type="submit"
          >
            Publish Article
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default EditorForm;
