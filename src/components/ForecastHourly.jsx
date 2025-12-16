import "./fh.css";


export default function ForecastHourly() {
 

  return (
     <section className="app-preview">

      {/* Section Label */}
      <p className="section-id">our app[03]</p>

      {/* Title */}
      <h1 className="app-title">
        Weather ☁ forecast <br/>
        in your <span className="download-pill">pocket <i className="fa-solid fa-download"></i></span>
      </h1>

      {/* Main layout */}
      <div className="app-preview-layout">

        {/* LEFT TEXT */}
        <div className="left-text">
          <p>14-day hourly <br/> forecast</p>
          <p>Air Quality Index <br/>(AQI)</p>
          <p>Temperature in <br/>your location</p>
        </div>

        {/* CENTER PHONE */}
        <div className="phone-wrapper">
          <div className="dotted-arc"></div>

          <img src="/public/phone.jpg" className="phone-img" />

          {/* Floating clouds */}
          <div className="cloud cloud-left"></div>
          <div className="cloud cloud-right"></div>
        </div>

        {/* RIGHT TEXT */}
        <div className="right-text">
          <p><strong>UV index</strong><br/>
            Know today's and upcoming UV index
          </p>

          <p><strong>Animated wind forecast</strong><br/>
            Explore wind movement for 2 weeks
          </p>

          <p><strong>Hourly precipitation outlook</strong><br/>
            Get upcoming rainfall prediction
          </p>
        </div>

      </div>

      {/* Bottom left promo card */}
      <div className="promo-card">
        <div className="promo-icons">
          <i className="fa-brands fa-apple"></i>
          <i className="fa-brands fa-google-play"></i>
          <i className="fa-solid fa-download"></i>
        </div>
        <p>Get skysavvy® for an all-in-one weather assistant</p>
      </div>

    </section>
  );
}
