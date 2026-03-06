

const ProductLists = ({ ProductLists, handleProductSelect, setShowProductModal }) => {


    return (

        <>
            <section className="products-section" id="products" >
                <div className="container">
                    <div className="products-grid" id="productsGrid">

                        {
                            ProductLists.map(product => (
                                <div className="product-card" data-product-id={product.id} key={product.id} onClick={() => handleProductSelect(product.id)}>
                                    <div className="product-image"  onClick={() => handleProductSelect(product.id)}>
                                        <img src={product.image} alt={product.name} className="product-img" />
                                        {product.badge && <div className="product-badge">{product.badge}</div>}
                                    </div>
                                    <div className="product-info">
                                        <div  onClick={() => handleProductSelect(product.id)}>
                                       
                                        <div className="product-category">{product.category}</div>
                                        <h3 className="product-name">{product.name}</h3>    
                                        <div className="product-rating">    
                                            <div className="stars">
                                                {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
                                                    <i className="fas fa-star star" key={index}></i>
                                                ))}
                                                {product.rating % 1 !== 0 && <i className="fas fa-star-half-alt star"></i>}
                                            </div>  
                                            <span className="rating-count">({Math.floor(product.rating * 100)})</span>  
                                        </div>  
                                        <p className="product-description">{product.description}</p>    
                                        </div>  
                                        <div className="product-footer">    
                                            <div><span className="product-price">₱{product.price.toLocaleString()}</span></div>
                                            <button className="add-to-cart" data-id={product.id}  onClick={() => setShowProductModal(false)  }>   
                                                <i className="fas fa-shopping-cart"></i>
                                            </button>   
                                        </div>
                                    </div>
                                </div>

                            
                            ))
                        }
 
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductLists