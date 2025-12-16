import "./sb.css";

export default function SearchBar() {
  return (
   <section className="landing-section">

      {/* TOP TEXT AREA */}
      <div className="text-area">
        <p className="section-label">about[01]</p>

        <h1 className="title">
          Don’t <span className="highlight">guess <i className="fa-regular fa-lightbulb"></i></span> the weather!
        </h1>

        <p className="subtitle">
          Get accurate, real-time forecasts for your city<br/> and locations across the world <strong> all in one place.</strong>
        </p>

        <button className="benefits-btn">
          Built for clarity, accuracy, and everyday planning.
        </button>
      </div>

      {/* FEATURE CARDS SECTION */}
      <div className="cards-wrapper">

        {/* CARD 1 */}
        <div className="feature-card big">
          <p>Daily morning & evening weather outlooks.</p>
        </div>

        {/* CARD 2 */}
        <div className="feature-card mid">
          
          <div className="capsule1">
          <p>Get The App</p>
          <i className="fa-brands fa-apple"></i>
          <i className="fa-brands fa-google-play"></i>
          <i className="fa-solid fa-download"></i>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="feature-card mid1">
          <i className="fa-solid fa-location-dot"></i>
          <i className="fa-solid fa-globe"></i>
        </div>

        {/* Card 4 */}
        <div className="feature-card mid3">
          <p>Use the weather sharing feature to warn your family</p>
        </div>

        {/* CARD 5 */}
        <div className="feature-card big2">
          <p>livestreetview.com</p>
        </div>

        
      </div>

    </section>
    
  );
}
