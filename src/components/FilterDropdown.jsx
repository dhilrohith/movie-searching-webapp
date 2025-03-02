const FilterDropdown = ({ onSelectType }) => {
    const types = ["", "movie", "series", "episode"];
  
    return (
      <select
        onChange={(e) => onSelectType(e.target.value)}
        className="border border-gray-700 bg-gray-800 rounded-md p-2"
      >
        <option value="">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type || "All"}
          </option>
        ))}
      </select>
    );
  };
  
  export default FilterDropdown;
  