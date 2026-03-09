import { motion } from "framer-motion";

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
            <p><strong>Phone:</strong> +63 9XX XXX XXXX</p>
            <p><strong>Email:</strong> carnavi@gmail.com</p>
            <p><strong>Location:</strong> Manaoag, Pangasinan</p>
          </div>

          <form className="contact-form">

            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Email Address" required />

            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>
      </section>

    </motion.div>
  );
};

export default Contact;