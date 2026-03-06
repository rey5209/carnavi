import { useState, useEffect,useRef  } from 'react'

import Navbar from '../ui/Navbar'
import Hero from '../ui/Hero'
import Filterer from '../ui/Filterer'
import ProductLists from '../ui/ProductLists'

import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'

const Home = () => {

    const [categories, setCategories] = useState([
        { id: 0, name: 'All Products', isActive: true },
        { id: 1, name: 'LCD', isActive: false },
        { id: 2, name: 'Performance', isActive: false },
        { id: 3, name: 'Safety', isActive: false }
    ]);

    const [sortType, setSortType] = useState([
        { id: 0, name: 'Featured', isActive: true },
        { id: 1, name: 'Price: Low to High', isActive: false },
        { id: 2, name: 'Price: High to Low', isActive: false },
        { id: 3, name: 'Highest Rated', isActive: false }
    ]);

    const [products, setProducts] = useState([
        {
            id: 1, name: 'OLED DISPLAY 10.1 inch 2k QLED',
            "specifications": [
                "Android 14",
                "Touchscreen display",
                "Wireless connectivity",
                "Bluetooth support",
                "4GB RAM, 32GB Storage",
                "8 core processor",
                "Wifi support"
            ],
            category: 'LCD', price: 16999, rating: 3.5, description: 'Comfortable and durable leather steering wheel cover with anti-slip grip', image: img1, inStock: true, badge: 'Best Seller'
        },

        {
            id: 2, name: 'Performance Air Filter',
            "specifications": [
                "HEPA Filter Technology",
                "Removes 99.9% of particles",
                "USB power supply",
                "Compact design"
            ],
            category: 'Performance', price: 2999, rating: 2.8, description: 'High-performance air filter for improved engine efficiency and power', image: img2, inStock: true, badge: ''
        },
        {
            id: 3, name: 'LED Headlight Bulbs',
            "specifications": [
                "Material: Premium Rubber",
                "Set of 4 pieces",
                "Anti-slip backing",
                "Easy to clean"
            ],
            category: 'Safety', price: 4999, rating: 4.8, description: 'Bright LED headlight bulbs for enhanced visibility and safety on the road', image: img3, inStock: true, badge: 'New Arrival'
        },

        {
            "id": 4,
            "name": "LED Car Ambient Lighting Kit",
            "category": "LCD",
            "price": 9999,
            "rating": 4.9,
            "reviews": 456,
            "image": img4,
            "description": "16 color LED ambient lighting with remote control",
            "specifications": [
                "16 Color options",
                "Remote control included",
                "App compatible",
                "Energy efficient"
            ],
            "inStock": true,
            "badge": "Best Seller"
        }


    ]);

    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
const wrapperRef = useRef(null);

    const handleCategoryClick = (clickedId) => {
        const updatedCategories = categories.map((category) => {
            return {
                ...category,
                // If the id matches, set to true; otherwise, set to false
                isActive: category.id === clickedId
            };
        });

        setCategories(updatedCategories);
    };

    const handleSortTypeClick = (clickedId) => {
        const updatedSortTypes = sortType.map((sort) => {
            return {
                ...sort,
                isActive: sort.id === clickedId
            };
        });
        setSortType(updatedSortTypes);
    };

    const handleProductSelect = (productId) => {

        const selectedProduct = products.find(product => product.id === productId); 
        setSelectedProduct(
            <>
                <div className="modal show" id="productModal" ref={wrapperRef}>
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowProductModal(false)}>×</span>
                        <div className="modal-body">
                            <img id="modalImage" src={selectedProduct.image} alt={selectedProduct.name} />
                            <div className="modal-info">
                                <h2 id="modalTitle">{selectedProduct.name}</h2>
                                <div className="modal-rating" id="modalRating">
                                    <div className="stars">
                                        {Array.from({ length: Math.floor(selectedProduct.rating) }, (_, index) => (
                                            <i className="fas fa-star star" key={index}></i>
                                        ))}
                                        {selectedProduct.rating % 1 !== 0 && <i className="fas fa-star-half-alt star"></i>}
                                    </div>
                                    <span className="rating-count">({Math.floor(selectedProduct.rating * 100)})</span>
                                </div>
                                <p id="modalDescription">{selectedProduct.description}</p>
                                <p className="modal-price" id="modalPrice">₱{selectedProduct.price.toLocaleString()}</p>
                                <div className="modal-specs" id="modalSpecs">
                                    {
                                        selectedProduct.specifications.map((spec, index) => (
                                            <p key={index}>✓ {spec}</p>
                                        ))
                                    }
                                    {selectedProduct.inStock ? <p style={{ color: "#10b981", fontWeight: "bold" }}>✓ In Stock</p> : <p style={{ color: "#b9101b", fontWeight: "bold" }}>☓ Out of Stock</p>}
                                </div>
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
        setShowProductModal(true);

    }

    function onClose() {
        alert("useEffect triggered"); // Debugging line to check if useEffect is running
        setShowProductModal(false);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            // If the ref exists and the clicked element is NOT inside the ref
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                onClose(); // Trigger your "outside" function 
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef, onClose]);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                setSelectedProduct(false)
                // Your logic here, e.g., setIsModalOpen(false);
            }
        };

        // Add listener when component mounts
        window.addEventListener('keydown', handleEsc);

        // Clean up listener when component unmounts
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []); // Empty array ensures this only runs once

    return (
        <prod >

            <Navbar />
            <Hero
                mainText={"Premium Car Accessories"}
                subText={"Elevate Your Driving Experience with Quality Products"}
                buttonText={"Shop Now"}
            />
            <Filterer
                categories={categories}

                sortLabel={"Sort by:"}
                sortType={sortType}
                handleCategoryClick={handleCategoryClick}
                handleSortTypeClick={handleSortTypeClick}
            />
            <ProductLists
                ProductLists={products}
                handleProductSelect={handleProductSelect}

                setShowProductModal={setShowProductModal}
                showProductModal={showProductModal}

            />
            {showProductModal && selectedProduct}
        </prod>
    )

}

export default Home;