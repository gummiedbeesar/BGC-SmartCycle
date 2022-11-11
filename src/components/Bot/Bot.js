import "./bot.css";

const Bot = () => {
  return (
    <div className="outter-container">
      <div className="main-content">
        <div style={{width: "100%"}}>

        <h3>
          Hi, I'm a virtual assistant. <br /> How can I help you today?
        </h3>

        <div className="tag">I want to learn about recycling</div>
        <div className="tag">I want to learn about waste</div>
        <div className="tag">I want to learn about pollution</div>
      </div>

        </div>
      <div className="bot-prompt-box">
        <div className="bot-prompt">
          <p>Type something...</p>
          <p>I.</p>
        </div>
      </div>

      <div className="bot-footer">
        Built with <span style={{ fontWeight: "bold" }}>IBM Watson</span>
      </div>
    </div>
  );
};

export { Bot };
