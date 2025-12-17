import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-text">
          <h1>Smart Shopping Starts Here</h1>
          <p>
            Buy premium electronics, gadgets, and accessories at unbeatable
            prices.
          </p>
          <button>Explore Products</button>
        </div>

        <div className="hero-img">
          <img
            src="C:\Users\sivak\Downloads\shakan.jpg"
           
          />
        </div>
      </div>

      <h2 className="section-title">Why Choose Us?</h2>

      <div className="features">
        <div>🔒 Secure Payments</div>
        <div>🚚 Fast Delivery</div>
        <div>🔁 Easy Returns</div>
        <div>📞 24/7 Support</div>
      </div>
    </div>
  );
}

export default Home;
