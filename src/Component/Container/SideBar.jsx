import Tag from "./Tag";

let tags = [
  "Programming",
  "Javascript",
  "Emberjs",
  "Angularjs",
  "React",
  "Node"
];

const SideBar = () => {
  return (
    <div className="sidebar">
      <p>Popular Tags</p>

      <div className="tag-list">
        {tags.map((tag) => (
          <Tag text={tag} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
