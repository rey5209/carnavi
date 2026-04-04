import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Compatibility.css";

/* AUTO LOAD IMAGES + VIDEOS */
const mediaModules = import.meta.glob(
  "/src/assets/**/*.{jpg,JPG,jpeg,png,webp,mp4}",
  {
    eager: true,
    import: "default",
  }
);

const groupedMedia = {};

Object.entries(mediaModules).forEach(([path, src]) => {
  const parts = path.split("/");
  const folder = parts[parts.length - 2];

  if (!groupedMedia[folder]) {
    groupedMedia[folder] = [];
  }

  groupedMedia[folder].push(src);
});

/* VEHICLES */

const vehicles = [
  {
    model: "Toyota Fortuner (2017+)",
    unit: "Package D",
    price: "₱16,999",
    note: "Latest dashboard design",
    media: groupedMedia["fortuner"] || [],
  },

  {
    model: "Toyota Hilux (2017+)",
    unit: "Package D",
    price: "₱16,999",
    note: "Latest dashboard design",
    media: groupedMedia["hilux_2016+"] || [],
  },

  {
    model: "Toyota Hilux (2004 - 2014)",
    unit: "Package B",
    price: "₱9,999",
    note: "Recommended for older models",
    media: groupedMedia["hilux_2004_2013"] || [],
  },

  {
    model: "Toyota Hilux (2003 - 2010)",
    unit: "Package A",
    price: "₱8,000",
    note: "Recommended for older models",
    media: groupedMedia["hilux_2003"] || [],
  },

  {
    model: "Toyota Wigo (2003 - 2010)",
    unit: "Package A",
    price: "₱8,000",
    note: "Recommended for older models",
    media: groupedMedia["wigo_2003"] || [],
  },

  {
    model: "Toyota Wigo (2004 - 2014)",
    unit: "Package B",
    price: "₱9,999",
    note: "Recommended for older models",
    media: groupedMedia["wigo_2004"] || [],
  },

  {
    model: "Toyota Wigo (2016+)",
    unit: "Package D",
    price: "₱15,999",
    note: "Latest dashboard design",
    media: groupedMedia["wigo_2016"] || [],
  },

  {
    model: "Toyota Fortuner (2003-2007)",
    unit: "Package A",
    price: "₱8,000",
    note: "Recommended for older models",
    media: groupedMedia["fortuner_2003_2007"] || [],
  },

  {
    model: "Toyota Fortuner (2004-2014)",
    unit: "Package B",
    price: "₱9,999",
    note: "Recommended for older models",
    media: groupedMedia["fortuner_2004_2013"] || [],
  },

  {
    model: "Toyota Corolla (2004-2014)",
    unit: "Package A",
    price: "₱11,999",
    note: "Recommended for older models + Installation fee for bodys",
    media: groupedMedia["corolla"] || [],
  },

  {
    model: "Toyota Vios (2014-2019)",
    unit: "Package Unit D",
    price: "₱15,999",
    note: "Latest dashboard design",
    media: groupedMedia["vios_old"] || [],
  },

  {
    model: "Toyota Innova (2014-2019)",
    unit: "Package Unit D",
    price: "₱15,999",
    note: "Latest dashboard design",
    media: groupedMedia["Innova_2016_2023"] || [],
  },

  {
    model: "Toyota Innova (2004-2013)",
    unit: "Package Unit B",
    price: "₱9,999",
    note: "Latest dashboard design",
    media: groupedMedia["innova_2004_2013"] || [],
  },

  {
    model: "Toyota Innova (2003-2006)",
    unit: "Package Unit A",
    price: "₱8,000",
    note: "Latest dashboard design",
    media: groupedMedia["innova_2003_2006"] || [],
  },

  {
    model: "Toyota Vios (2003-2006)",
    unit: "Package Unit A",
    price: "₱8,000",
    note: "Recommended for older models",
    media: groupedMedia["vios_2003_2006"] || [],
  },

  {
    model: "Mitsubishi Lancer EX (2003-2006)",
    unit: "Package Unit A",
    price: "₱8,000",
    note: "Recommended for older models",
    media: groupedMedia["mitsubishi_ex"] || [],
  },

  {
    model: "Mitsubishi Lancer (2003-2006)",
    unit: "Package Unit A",
    price: "₱8,000",
    note: "Recommended for older models",
    media: groupedMedia["mitsubishi_lancer"] || [],
  },

  {
    model: "Mitsubishi Lancer (2013-2023)",
    unit: "Package Unit D",
    price: "₱15,999",
    note: "Recommended for older models",
    media: groupedMedia["lancer_2016_2023"] || [],
  },

  {
    model: "Mitsubishi Montero Sport (2003-2006)",
    unit: "Package Unit A",
    price: "₱8,000",
    note: "Recommended for older models",
    media: groupedMedia["montero_2003_2006"] || [],
  },

  {
    model: "Mitsubishi Montero Sport (2004-2013)",
    unit: "Package Unit B",
    price: "₱9,999",
    note: "Recommended for older models",
    media: groupedMedia["montero_2004_2013"] || [],
  },

  {
    model: "Mitsubishi Montero Sport (2016-2023)",
    unit: "Package Unit D",
    price: "₱15,999",
    note: "Recommended for newer models",
    media: groupedMedia["montero_2016_2023"] || [],
  },

  {
    model: "Toyota Vios (2004-2013)",
    unit: "Package B",
    price: "₱9,999",
    note: "Recommended for 2004-2013 models",
    media: groupedMedia["vios_2004_2013"] || [],
  },

  {
    model: "Honda Civic",
    unit: "Android QLED Unit",
    price: "₱14,999",
    note: "Clean installation",
    media: groupedMedia["civic"] || [],
  },

  {
    model: "Hyundai Kona",
    unit: "Package B or C",
    price: "₱9,999",
    note: "Recommended for Hyundai Kona models, may require custom installation.",
    media: groupedMedia["kona"] || [],
  },

  {
    model: "Suzuki Vitara (2003-2006)",
    unit: "Package Unit A",
    price: "₱8,000",
    note: "Recommended for older models",
    media: groupedMedia["vitara_2004_2013"] || [],
  },
];

/* VEHICLE DB */

const brandsModels = {
  Toyota: [
    "Vios",
    "Fortuner",
    "Hilux",
    "Innova",
    "Corolla Altis",
    "Corolla",
    "Wigo",
    "Avanza",
    "Rush",
    "Land Cruiser",
    "Raize",
  ],

  Suzuki: [
  "Alto",
  "Alto K10",
  "APV",
  "Baleno",
  "Celerio",
  "Ciaz",
  "Dzire",
  "Ertiga",
  "XL7",
  "Fronx",
  "Grand Vitara",
  "Jimny",
  "S-Presso",
  "Swift",
  "Vitara",
  "Brezza",
  "Carry",
  "Super Carry",
  "Ignis",
  "Kizashi",
  "Liana",
  "Splash",
  "Wagon R",
  "Wagon R Stingray",
  "Every",
  "Escudo"
],

  Mitsubishi: [
  "Mirage",
  "Mirage G4",
  "Lancer",
  "Lancer EX",
  "Attrage",
  "Xpander",
  "Xpander Cross",
  "Montero Sport",
  "Strada",
  "L300",
  "ASX",
  "Outlander",
  "Outlander PHEV",
  "Eclipse Cross",
  "Pajero",
  "Adventure",
],

  Honda: [
    "Civic",
    "City",
    "CR-V",
    "BR-V",
    "Mobilio",
    "Jazz",
    "HR-V",
    "Accord",
  ],

  Nissan: [
    "Navara",
    "Terra",
    "Almera",
    "Sylphy",
    "Patrol",
    "X-Trail",
    "Juke",
  ],

  Hyundai: [
    "Accent",
    "Elantra",
    "Tucson",
    "Santa Fe",
    "Starex",
    "Kona",
    "Creta",
  ],

  Isuzu: [
    "D-Max",
    "MU-X",
    "Crosswind",
    "Alterra",
  ],

  Subaru: [
    "Forester",
    "Impreza",
    "WRX",
  ],

  Ford: [
  "Ranger",
  "Everest",
  "EcoSport",
  "Fiesta",
  "Focus",
],
};

const years = Array.from({ length: 2024 - 2001 + 1 }, (_, i) =>
  (2001 + i).toString()
);

/* AUTO GENERATE DB */

const vehicleDB = [];

Object.entries(brandsModels).forEach(([brand, models]) => {
  models.forEach((model) => {
    years.forEach((year) => {
      vehicleDB.push({
        brand,
        model,
        year,

        // DEFAULT CONFIG (you can customize later)
        unit:
          parseInt(year) >= 2020
            ? "Android 10.1 QLED"
            : parseInt(year) >= 2015
            ? "Android 9 inch QLED"
            : "Android Standard",

        price:
          parseInt(year) >= 2020
            ? "₱16,999"
            : parseInt(year) >= 2015
            ? "₱15,999"
            : "₱8,000",

        productName:
          parseInt(year) >= 2020
            ? "10.1 inch QLED Android Head Unit"
            : parseInt(year) >= 2015
            ? "9 inch QLED Android Head Unit"
            : "Standard Android Head Unit",

        image: groupedMedia[model.toLowerCase()]?.[0] || null,
      });
    });
  });
});

const Compatibility = ({ addToCart }) => {
  const navigate = useNavigate();

  const [selectedCar, setSelectedCar] = useState(null);
  const [activeMedia, setActiveMedia] = useState(0);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  /* HELPERS */
  const isVideo = (file) => file?.match(/\.(mp4|webm|ogg)$/i);

  /* DROPDOWN */
  const brands = [...new Set(vehicleDB.map((v) => v.brand))];

  const models = [
    ...new Set(vehicleDB.filter((v) => v.brand === brand).map((v) => v.model)),
  ];

  const years = [
    ...new Set(
      vehicleDB
        .filter((v) => v.brand === brand && v.model === model)
        .map((v) => v.year)
    ),
  ];

  const result = vehicleDB.find(
    (v) => v.brand === brand && v.model === model && v.year === year
  );

  const filteredVehicles = vehicles.filter((car) => {
    if (!model) return false;
    return car.model.toLowerCase().includes(model.toLowerCase());
  });

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

<p className="compatibility-note">
  Note: Some lower-year models are compatible with standard Android head units. 
  For newer models (2018 and above), compatibility may vary and we recommend choosing based on your exact vehicle model.
</p>

      {/* SELECTOR */}

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
            <option key={i}>{b}</option>
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
            <option key={i}>{m}</option>
          ))}
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          disabled={!model}
        >
          <option value="">Select Year</option>
          {years.map((y, i) => (
            <option key={i}>{y}</option>
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

      {/* CARDS */}

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
              setActiveMedia(0);
            }}
          >
            <img
              src={car.media[0]}
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

            {/* MAIN PREVIEW */}
            {isVideo(selectedCar.media[activeMedia]) ? (
              <video
                src={selectedCar.media[activeMedia]}
                className="main-preview"
                controls
                autoPlay
                loop
              />
            ) : (
              <img
                src={selectedCar.media[activeMedia]}
                className="main-preview"
              />
            )}

            {/* THUMBNAILS */}
            <div className="thumbnail-row">
              {selectedCar.media.map((item, i) =>
                isVideo(item) ? (
                  <video
                    key={i}
                    src={item}
                    className={`thumbnail ${
                      activeMedia === i ? "active-thumb" : ""
                    }`}
                    onClick={() => setActiveMedia(i)}
                    muted
                  />
                ) : (
                  <img
                    key={i}
                    src={item}
                    className={`thumbnail ${
                      activeMedia === i ? "active-thumb" : ""
                    }`}
                    onClick={() => setActiveMedia(i)}
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compatibility;