

import Dropdown from '../components/Dropdown'
const Filterer = ({ categories, handleCategoryClick, sortLabel, sortType, handleSortTypeClick }) => {

    return (
        <section className="filters-section">
            <div className="container">
                <h2>Our Collection</h2>
                <div className="filters">
                    {


                        
                        categories.map(category => (   
                            <button  

                            onClick={() => handleCategoryClick(category.id)}
                            key={category.id} 
                            className={`filter-btn ${category.isActive ? "active" : "" }`} data-filter={category.name}>{category.name}</button>   
                        ))
                    } 
                </div>
                <Dropdown
                
                    label={sortLabel}
                    options={sortType}
                    onOptionClick={handleSortTypeClick}
                />
                
            </div>
        </section>


    )
}


export default Filterer;