const Dropdown = ({ label, options, onOptionClick }) => {

  return (
    <div className="sort-container">

      <label>{label}</label>

      <select
        onChange={(e) => onOptionClick(Number(e.target.value))}
      >
        {options.map((option) => (
          <option
            key={option.id}
            value={option.id}
          >
            {option.name}
          </option>
        ))}
      </select>

    </div>
  );
};

export default Dropdown;