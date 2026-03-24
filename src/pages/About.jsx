import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="about-wrapper"
    >
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About CarNavi
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Upgrade your drive with premium technology & professional installation.
          </motion.p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="about-section">
        <div className="container about-grid">

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.03 }}
          >
            <h3>🚗 Who We Are</h3>
            <p>
              CarNavi specializes in premium car accessories including Android
              head units, Apple CarPlay systems, LED lighting, and performance upgrades.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.03 }}
          >
            <h3>🎯 Our Mission</h3>
            <p>
              We aim to transform every drive with modern technology, seamless
              integration, and top-quality installation services.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.03 }}
          >
            <h3>⚙️ What We Offer</h3>
            <p>
              From head units to full system upgrades, we deliver reliable,
              high-performance solutions tailored for your vehicle.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.03 }}
          >
            <h3>⭐ Why Choose Us</h3>
            <p>
              Trusted by hundreds of customers, we combine quality products,
              expert installation, and excellent after-sales support.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Ready to upgrade your ride?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Experience smarter, safer, and more connected driving today.
          </motion.p>

          <motion.a
            href="/"
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Products
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
};

export default About;