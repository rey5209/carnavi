import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    >

      <section className="about-section">
        <div className="container">
          <h1>About CarNavi</h1>

          <p>
            CarNavi specializes in premium car accessories including Android
            head units, CarPlay systems, LED lighting, and performance upgrades.
          </p>

          <p>
            Our goal is to elevate your driving experience through modern
            technology, high-quality products, and professional installation.
          </p>

          <p>
            We provide reliable products with excellent support for drivers
            looking to upgrade their vehicles.
          </p>
        </div>
      </section>

    </motion.div>
  );
};

export default About;