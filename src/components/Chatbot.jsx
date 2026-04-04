import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    { type: "text", text: "Hi! I'm Carnavi Bot Created by Meyers how can I help you?", sender: "bot" },
    { type: "text", text: "How can I help you?", sender: "bot" }
  ]);

  const [input, setInput] = useState("");

  const replies = [
    {
      keywords: ["location", "where", "address"],
      reply: {
        text: "Pogo Grande, Dagupan City 2400 Pangasinan 📍"
      }
    },
    {
      keywords: ["number", "contact", "phone"],
      reply: {
        text: "ito po yung number namin sir, +63 938 344 8900  +63 947 347 0670 📞"
      }
    },
    {
      keywords: [
        "toyota","vios","hilux","fortuner","innova","avanza","rush",
        "wigo","hiace","land cruiser","corolla","camry","yaris",
        "prius","rav4","supra","mirai","alphard","revo"
      ],
      reply: {
        text: "Yes! meron po sir ito po package na recommended sainyo ",
        image: "src/assets/img/5.jpg"
      }
    },
    {
      keywords: ["mitsubishi","mirage","montero","montero sport","strada","xpander","lancer","asx","outlander","pajero"],
      reply: { text: "Yes! meron po sir " }
    },
    {
      keywords: ["suzuki","ertiga","swift","dzire","celerio","alto","spresso","carry","jimny","vitara"],
      reply: { text: "Yes! meron po sir " }
    },
    {
      keywords: ["honda","civic","city","crv","brv","hrv","mobilio","jazz","accord","odyssey"],
      reply: { text: "Yes! meron po sir " }
    },
    {
      keywords: ["nissan","navara","terra","almera","sylphy","patrol","juke","livina","xtrail"],
      reply: { text: "Yes! meron po sir " }
    },
    {
      keywords: ["hyundai","accent","elantra","tucson","santa fe","starex","kona","creta"],
      reply: { text: "Yes! meron po sir " }
    },
    {
      keywords: ["isuzu","dmax","mux","mu-x","crosswind","traviz"],
      reply: { text: "Yes! meron po sir " }
    },
    {
      keywords: ["subaru","forester","outback","xv","impreza","wrx","brz"],
      reply: { text: "Yes! meron po sir " }
    },
    {
      keywords: ["ford","ranger","everest","ecosport","territory","mustang","explorer"],
      reply: { text: "Yes! meron po sir " }
    },
    {
      keywords: ["creator","likha","carnavi bot"],
      reply: { text: "Ako si Carnavi Bot, nilikha ni Rey and Meyers Group" }
    }
  ];

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { type: "text", text: input, sender: "user" };
    const lowerInput = input.toLowerCase();

    let replyText = "Thanks for your message!";
    let replyImage = null;

    for (let item of replies) {
      if (item.keywords.some(word => lowerInput.includes(word))) {
        replyText = item.reply.text;
        replyImage = item.reply.image || null;
        break;
      }
    }

    const botMessages = [
      { type: "text", text: replyText, sender: "bot" }
    ];

    if (replyImage) {
      botMessages.push({
        type: "image",
        src: replyImage,
        sender: "bot"
      });
    }

    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      setMessages(prev => [...prev, ...botMessages]);
    }, 500);

    setInput("");
  };

  return (
    <>
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
          fontSize: "22px",
          cursor: "pointer",
          zIndex: 9999
        }}
      >
        💬
      </button>

      {open && (
        <div style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          width: "320px",
          height: "420px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          zIndex: 9999
        }}>
          
          {/* Header */}
          <div style={{
            background: "#ff0000",
            color: "#fff",
            padding: "12px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between"
          }}>
            Carnavi Bot
            <span onClick={() => setOpen(false)} style={{cursor:"pointer"}}>✕</span>
          </div>

          {/* Messages */}
          <div style={{flex:1,padding:"10px",overflowY:"auto"}}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                textAlign: msg.sender === "user" ? "right" : "left",
                marginBottom: "8px"
              }}>

                {msg.type === "text" && (
                  <span style={{
                    background: msg.sender === "user" ? "#ff0000" : "#eee",
                    color: msg.sender === "user" ? "#fff" : "#000",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    display: "inline-block",
                    maxWidth: "80%"
                  }}>
                    {msg.text}
                  </span>
                )}

                {msg.type === "image" && (
                  <img
                    src={msg.src}
                    alt="chat"
                    style={{
                      maxWidth: "200px",
                      borderRadius: "10px",
                      marginTop: "5px"
                    }}
                  />
                )}

              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{display:"flex",borderTop:"1px solid #ddd"}}>
            <input
              type="text"
              placeholder="Type message..."
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              onKeyDown={(e)=> e.key==="Enter" && sendMessage()}
              style={{flex:1,border:"none",padding:"10px",outline:"none"}}
            />
            <button onClick={sendMessage} style={{
              background:"#ff0000",
              color:"#fff",
              border:"none",
              padding:"0 16px"
            }}>
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
}