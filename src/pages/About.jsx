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
            Tungkol sa CarNavi
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I-upgrade ang iyong pagmamaneho gamit ang de-kalidad na teknolohiya at propesyonal na pag-install.
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
              Dalubhasa ang CarNavi sa mga de-kalidad na car accessories tulad ng Android head units, Apple CarPlay systems, LED lighting, at mga performance upgrades.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.03 }}
          >
            <h3>🎯 Our Mission</h3>
            <p>
              Ang aming layunin ay i-transform ang bawat pagmamaneho gamit ang modernong teknolohiya, madaling
              integration, at mataas na kalidad na serbisyo sa pag-install.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.03 }}
          >
            <h3>⚙️ What We Offer</h3>
            <p>
              Mula sa head units hanggang sa mga kumpletong system upgrades, nagbibigay kami ng magagandang,
              high-performance na mga solusyon na inaayos para sa iyong sasakyan.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.03 }}
          >
            <h3>⭐ Why Choose Us</h3>
            <p>
              Pinagkakatiwalaan ng daan-daang customer, pinagsasama namin ang de-kalidad na mga produkto, eksperto at maayos na pag-install, at mahusay na after-sales support.
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