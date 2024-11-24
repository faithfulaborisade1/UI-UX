import React from "react";
import "./WhyChange.scss";
import map from '../../assets/map.png';

const WhyChange = () => {
  return (
    <section className="why-change">
      <div className="content">
        <div className="text-section">
          <h2>
            <span>Why The Change?</span>
          </h2>
          <p>
            <em>Avova Internet Solutions</em> has now become <strong>Avova Technologies</strong>. We’ve changed a lot since it all began way back in 2006. We have listened to our clients and now offer a comprehensive range of solutions built on our technologies. This gives our clients a strategic advantage over competitors resulting in increased productivity and scalable growth. We too have grown with our clients but still have the same owners & same people… with a few more techies en route!
          </p>
        </div>
        <div className="info-section">
          <div className="progress-bars">
            <div className="progress-item">
              <label>Increased Efficiency</label>
              <div className="progress">
                <div className="progress-fill" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="progress-item">
              <label>Increased Productivity</label>
              <div className="progress">
                <div className="progress-fill" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="progress-item">
              <label>Increased Value</label>
              <div className="progress">
                <div className="progress-fill" style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>
          <div className="map-section">
            <img src={map} alt="Nationwide Service" />
            <p>Nationwide Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChange;
