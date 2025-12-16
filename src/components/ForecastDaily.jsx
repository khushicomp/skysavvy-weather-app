import "./fd.css";

export default function ForecastDaily() {
  

  return (
    <footer className="footer-section">

      {/* MAIN TEXT */}
      <h1 className="footer-title">
        Designed <span className="image-pill"></span> for accuracy. <br/>Built for simplicity.
      </h1>

      {/* SUBSCRIBE BUTTON */}
      <div className="subscribe-area">
        <button className="subscribe-btn">
          Skysavvy is a clean, modern weather experience focused on <br/> clarity, performance, and real-time data.
        </button>
      </div>

      {/* COPYRIGHT */}
      <p className="copyright">Copyright © 2025 All Rights Reserved.</p>

      {/* SCROLL-UP BUTTON */}
      <div className="scroll-up-btn">
        <i className="fa-solid fa-arrow-up"></i>
      </div>

    </footer>
  );
}
