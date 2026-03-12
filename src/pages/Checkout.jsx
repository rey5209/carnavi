import { useState, useRef } from "react";
import "../styles/Checkout.css";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import logo from "../assets/img/logo.png";

const Checkout = ({ cart }) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reservation, setReservation] = useState(null);

  const ticketRef = useRef(null);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      name,
      phone,
      vehicle,
      date,
      time,
      cart,
      total
    };

    setReservation(appointment);
  };

  const downloadTicket = async () => {

    const canvas = await html2canvas(ticketRef.current);

    const link = document.createElement("a");
    link.download = "carnavi-reservation.png";
    link.href = canvas.toDataURL();

    link.click();
  };
  
  // Prevent checkout if cart is empty
if (cart.length === 0) {
  return (
    <div className="checkout-page">
      <h2>Your cart is empty</h2>
      <p>Please add products before making a reservation.</p>
    </div>
  );
}

  return (
    <div className="checkout-page">

      <h1>Installation Reservation</h1>

      {!reservation && (
        <form onSubmit={handleSubmit} className="checkout-form">

          <input
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            required
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="Vehicle Model (e.g. Toyota Vios)"
            required
            onChange={(e) => setVehicle(e.target.value)}
          />

          <label>Installation Date</label>
          <input
            type="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Installation Time</label>
          <input
            type="time"
            required
            onChange={(e) => setTime(e.target.value)}
          />

          <h3>Total: ₱{total.toLocaleString()}</h3>

          <button className="confirm-btn">
            Confirm Reservation
          </button>

        </form>
      )}

      {reservation && (
        <div className="reservation-ticket" ref={ticketRef}>

          <h2>Reservation Confirmed</h2>

          <p><strong>Name:</strong> {reservation.name}</p>
          <p><strong>Phone:</strong> {reservation.phone}</p>
          <p><strong>Vehicle:</strong> {reservation.vehicle}</p>
          <p><strong>Date:</strong> {reservation.date}</p>
          <p><strong>Time:</strong> {reservation.time}</p>

          <h3>Total: ₱{reservation.total.toLocaleString()}</h3>

          <div className="qr-container">

            <QRCode
              size={180}
              value={JSON.stringify(reservation)}
              level="H"
            />

            <img
              src={logo}
              alt="Carnavi Logo"
              className="qr-logo"
            />

          </div>

          <p>Show this QR code when you arrive for installation.</p>

          <button
            className="save-ticket-btn"
            onClick={downloadTicket}
          >
            Save Reservation Ticket
          </button>

        </div>
      )}

    </div>
  );
};

export default Checkout;