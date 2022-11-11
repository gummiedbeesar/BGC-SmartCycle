import React from "react";
import "../styles/landing.css";
import { Bot } from "../components";

const Landing = () => {
  return (
    <div className="landing-page page-container">
      <div className="bx--grid" >
        <div className="bx--row" >
          <div className="bx--col-sm-4 bx--col-md-6 bx--col-lg-4" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div >

            <h1 style={{ marginTop: "2vh", marginBottom: "5vh", fontSize: "5em" }}>
              <span style={{ fontWeight: "bold" }}>Smart</span>Cycle
            </h1>
            <p>
              SmartCycle is a tool to teach you about recycling. Using IBM
              Watson Assistant, we want to create Mint-- a chatbot to answer
              your questions about recycling.
            </p>
            </div>
          </div>

          <div className="bx--col-sm-4 bx--col-md-6 bx--col-lg-4 bot-container">
            <Bot />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Landing };
