


const Dropdown = ({ label, options, onOptionClick }) => {

    return (

        <div className="sort-container">
            <label for="sort">{label}</label>
            <select id="sort">
                {
                    options.map(option => (
                        <option 
                            key={option.id} 
                            value={option.name}
                            onClick={() => onOptionClick(option.id)}
                        >   {option.name}</option>
                    ))  
                } 
            </select>
        </div>
    )



}

export default Dropdown;