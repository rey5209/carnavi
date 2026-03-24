import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    >
      <section className="contact-section">
        <div className="container">
          <h1>Contact Us</h1>

          <p>If you have questions about our products, feel free to contact us.</p>

          <div className="contact-info">
            <p>
  <strong>Phone:</strong> +63 938 344 8900 &nbsp;&nbsp;|&nbsp;&nbsp; +63 947 347 0670
</p>
            <p>
  <strong>Facebook Messenger:</strong>{" "}
  <a
    href="https://www.facebook.com/reynoldpetrola/"
    target="_blank"
    rel="noopener noreferrer"
    className="facebook-link"
  >
    <FaFacebook size={20} /> Car-Navi Android Monitor Pangasinan
  </a>
</p>
            <p><strong>Location:</strong> Pogo Grande, Dagupan City 2400 Pangasinan</p>
          </div>

          {/* ── Google Map Embed ── */}
          <div className="map-container" style={{ margin: "2rem 0", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.6624955849334!2d120.33804649999999!3d16.031075400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33915d68bf5b1339%3A0x3434e17e00469e21!2scarnavi%20android!5e0!3m2!1sen!2sph!4v1773080764442!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CarNavi Location - Manaoag, Pangasinan"
            ></iframe>
          </div>

        </div>
      </section>
    </motion.div>
  );
};

export default Contact;