export const GenreInput = (props) => {
  return (
    <div className="GenreInput rainbow p-1 mb-8 rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Search genres..."
        className="w-full p-4 rounded-lg  text-xl bg-white bg-opacity-90"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};
