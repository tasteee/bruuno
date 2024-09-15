export const GenreBadge = (props) => {
  const isActiveClass = props.isActive ? "isActive" : "";
  return (
    <button
      key={props.genre}
      onClick={() => props.onClick(props.genre)}
      className={`GenreBadge ${isActiveClass} transition-colors duration-200 rounded-full px-4 py-2 text-black`}
    >
      {props.genre}
    </button>
  );
};
