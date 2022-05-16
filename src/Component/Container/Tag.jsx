const Tag = (props) => {
  return (
    <a href="/#/" className="tag-pill tag-default">
      {props.text}
    </a>
  );
};

export default Tag;
