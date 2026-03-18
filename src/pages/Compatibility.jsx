import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Compatibility.css";

/* AUTO LOAD + GROUP IMAGES */
const imageModules = import.meta.glob("/src/assets/img/**/*.{jpg,JPG,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const groupedImages = {};

Object.entries(imageModules).forEach(([path, src]) => {
  const parts = path.split("/");
  const folder = parts[parts.length - 2]; // folder name

  if (!groupedImages[folder]) {
    groupedImages[folder] = [];
  }

  groupedImages[folder].push(src);
});

/* INSTALLATION GALLERY DATA */

const vehicles = [
  {
    model: "Toyota Fortuner (2021+)",
    unit: "Android 10.1 QLED Unit",
    price: "₱16,999",
    note: "Latest dashboard design",
    images: groupedImages["fortuner"] || [],
  },

  {
    model: "Toyota Vios (2021+)",
    unit: "Android 9 inch QLED Unit",
    price: "₱14,999",
    note: "Latest dashboard design",
    images: groupedImages["vios_new"] || [],
  },

  {
    model: "Toyota Vios (2014-2020)",
    unit: "Android Standard Unit",
    price: "₱9,999",
    note: "Older dashboard compatible",
    images: groupedImages["vios_old"] || [],
  },
];

/* VEHICLE SEARCH DATABASE */

const vehicleDB = [
  {
    brand: "Toyota",
    model: "Fortuner",
    year: "2021",
    unit: "Android 10.1 QLED",
    price: "₱16,999",
    productName: "10.1 inch QLED Android Head Unit",
    image: groupedImages["fortuner"]?.[0],
  },

  {
    brand: "Toyota",
    model: "Vios",
    year: "2021",
    unit: "Android 9 inch QLED",
    price: "₱14,999",
    productName: "9 inch QLED Android Head Unit",
    image: groupedImages["vios_new"]?.[0],
  },

  {
    brand: "Toyota",
    model: "Vios",
    year: "2018",
    unit: "Android Standard",
    price: "₱9,999",
    productName: "Standard Android Head Unit",
    image: groupedImages["vios_old"]?.[0],
  },

  {
    brand: "Mitsubishi",
    model: "Montero",
    year: "2020",
    unit: "Android 10 QLED",
    price: "₱15,999",
    productName: "10 inch QLED Android Head Unit",
    image: groupedImages["fortuner"]?.[0], // placeholder
  },
];

const Compatibility = ({ addToCart }) => {
  const navigate = useNavigate();

  const [selectedCar, setSelectedCar] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  /* DROPDOWN FILTERS */

  const brands = [...new Set(vehicleDB.map((v) => v.brand))];

  const models = [
    ...new Set(vehicleDB.filter((v) => v.brand === brand).map((v) => v.model)),
  ];

  const years = [
    ...new Set(
      vehicleDB
        .filter((v) => v.brand === brand && v.model === model)
        .map((v) => v.year),
    ),
  ];

  /* FIND RESULT */

  const result = vehicleDB.find(
    (v) => v.brand === brand && v.model === model && v.year === year,
  );

  /* FILTER INSTALLATION CARDS */

  const filteredVehicles = vehicles.filter((car) => {
    if (!model) return false;
    return car.model.toLowerCase().includes(model.toLowerCase());
  });

  /* INSTALL BUTTON */

  const handleInstall = () => {
    if (!result) return;

    addToCart({
      id: `${brand}-${model}-${year}`,
      name: result.productName,
      price: Number(result.price.replace(/[₱,]/g, "")),
      image: result.image,
    });

    navigate("/checkout");
  };

  return (
    <div className="compatibility-page">
      <h1>Vehicle Compatibility</h1>

      <p className="compatibility-desc">
        Check which Android head unit works with your vehicle.
      </p>

      {/* VEHICLE SELECTOR */}

      <div className="vehicle-search">
        <h2>Find Compatible Head Unit</h2>

        <select
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
            setModel("");
            setYear("");
          }}
        >
          <option value="">Select Brand</option>

          {brands.map((b, i) => (
            <option key={i} value={b}>
              {b}
            </option>
          ))}
        </select>

        <select
          value={model}
          onChange={(e) => {
            setModel(e.target.value);
            setYear("");
          }}
          disabled={!brand}
        >
          <option value="">Select Model</option>

          {models.map((m, i) => (
            <option key={i} value={m}>
              {m}
            </option>
          ))}
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          disabled={!model}
        >
          <option value="">Select Year</option>

          {years.map((y, i) => (
            <option key={i} value={y}>
              {y}
            </option>
          ))}
        </select>

        {/* RESULT */}

        {result && (
          <div className="compat-result">
            <h3>Compatible Unit</h3>

            <p>{result.unit}</p>

            <p className="compat-price">{result.price}</p>

            <div className="compat-product-card">
              <img
                src={result.image}
                alt={result.productName}
                className="compat-product-image"
              />

              <div className="compat-product-info">
                <h4>{result.productName}</h4>

                <p className="product-price">{result.price}</p>

                <button
                  className="add-to-cart-btn"
                  onClick={() =>
                    addToCart({
                      id: `${brand}-${model}-${year}`,
                      name: result.productName,
                      price: Number(result.price.replace(/[₱,]/g, "")),
                      image: result.image,
                    })
                  }
                >
                  Add to Cart
                </button>

                <button className="install-btn" onClick={handleInstall}>
                  Book Installation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* INSTALLATION EXAMPLES */}

      <div className="compatibility-grid">
        {!model && (
          <div className="compat-message">
            Please select your vehicle brand, model and year.
          </div>
        )}

        {filteredVehicles.map((car, index) => (
          <div
            key={index}
            className="compat-product-card"
            onClick={() => {
              setSelectedCar(car);
              setActiveImage(0);
            }}
          >
            <img
              src={car.images[0]}
              alt={car.model}
              className="compat-product-image"
            />

            <div className="compat-product-info">
              <h4>{car.model}</h4>
              <p className="compat-unit">{car.unit}</p>
              <p className="product-price">{car.price}</p>
              <p className="compat-note">{car.note}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}

      {selectedCar && (
        <div className="compat-modal">
          <div className="compat-modal-content">
            <button
              className="close-modal"
              onClick={() => setSelectedCar(null)}
            >
              ✕
            </button>

            <h2>{selectedCar.model}</h2>

            <img
              src={selectedCar.images[activeImage]}
              className="main-preview"
            />

            <div className="thumbnail-row">
              {selectedCar.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`thumbnail ${
                    activeImage === i ? "active-thumb" : ""
                  }`}
                  onClick={() => setActiveImage(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compatibility;