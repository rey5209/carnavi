import { useState } from "react";

export default function Chatbot() {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you?", sender: "bot" }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    const botReply = {
      text: "Thanks for your message! We'll assist you soon.",
      sender: "bot"
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 500);

    setInput("");
  };

  return (
    <div>

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#ff0000",
          color: "#fff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          border: "none",
          fontSize: "20px",
          cursor: "pointer"
        }}
      >
        💬
      </button>

      {/* Chatbox */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "300px",
            height: "400px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column"
          }}
        >

          {/* Header */}
          <div
            style={{
              background: "#ff0000",
              color: "#fff",
              padding: "10px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px"
            }}
          >
            Chat Support
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto"
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  marginBottom: "8px"
                }}
              >
                <span
                  style={{
                    background: msg.sender === "user" ? "#ff0000" : "#eee",
                    color: msg.sender === "user" ? "#fff" : "#000",
                    padding: "6px 10px",
                    borderRadius: "10px",
                    display: "inline-block"
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{ display: "flex", borderTop: "1px solid #ddd" }}>
            <input
              type="text"
              placeholder="Type message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              style={{
                flex: 1,
                border: "none",
                padding: "10px"
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                background: "#ff0000",
                color: "#fff",
                border: "none",
                padding: "10px"
              }}
            >
              Send
            </button>
          </div>

        </div>
      )}
    </div>
  );
}