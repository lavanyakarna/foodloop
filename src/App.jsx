import { useState } from "react";
import "./App.css";
import FoodListings from "./FoodListings";

function App() {
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  const scrollToListings = () => {
    document.getElementById("food-listings")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const openShareForm = () => {
    window.dispatchEvent(new Event("foodloop-open-share"));

    setTimeout(() => {
      document.getElementById("share-food-form")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const exploreFood = () => {
    scrollToListings();

    setTimeout(() => {
      document.getElementById("food-search-input")?.focus();
    }, 500);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <div className="brand-mark">F</div>

          <div>
            <h1>FoodLoop</h1>
            <p>Save food. Share locally. Waste less.</p>
          </div>
        </div>

        <div className="nav-actions">
          <button
            className="text-button"
            onClick={() => setShowHowItWorks(true)}
          >
            How it works
          </button>

          <button className="primary-button" onClick={openShareForm}>
            Share surplus food
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="eyebrow-dot"></span>
              Community-powered food rescue
            </p>

            <h2>
              Good food should
              <span>keep moving.</span>
            </h2>

            <p className="hero-description">
              Discover surplus food near you, share what you cannot use,
              and help your city waste less, one meal at a time.
            </p>

            <div className="city-search">
              <span className="search-icon" aria-hidden="true"></span>
              <input
                type="text"
                placeholder="Search your city or locality"
                onFocus={exploreFood}
              />

              <button className="primary-button" onClick={exploreFood}>
                Explore food
              </button>
            </div>

            <div className="quick-links">
              <span>
                Choose your city below to discover available food.
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="circle circle-large"></div>

            <div className="food-card">
              <div className="food-image" aria-label="Fresh community meals"></div>

              <div className="food-card-content">
                <p className="available-label">Available now</p>

                <h3>Fresh community meals</h3>

                <p>12 portions - Arera Colony</p>

                <div className="food-card-footer">
                  <span>Pickup by 8:30 PM</span>

                  <button
                    className="small-button"
                    onClick={exploreFood}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>

            <div className="impact-card">
              <strong>1,248</strong>
              <span>meals rescued this month</span>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <p className="section-label">The FoodLoop effect</p>

          <h2>Small actions. Real impact.</h2>

          <div className="stats-grid">
            <div className="stat-item">
              <strong>1,248</strong>
              <span>Meals rescued</span>
            </div>

            <div className="stat-item">
              <strong>86</strong>
              <span>Active contributors</span>
            </div>

            <div className="stat-item">
              <strong>320 kg</strong>
              <span>Estimated waste avoided</span>
            </div>

            <div className="stat-item">
              <strong>7</strong>
              <span>Communities connected</span>
            </div>
          </div>
        </section>

        <FoodListings />
      </main>

      {showHowItWorks && (
        <div
          className="how-modal-backdrop"
          onClick={() => setShowHowItWorks(false)}
        >
          <div
            className="how-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="how-modal-close"
              onClick={() => setShowHowItWorks(false)}
              aria-label="Close how it works"
            >
              ×
            </button>

            <p className="section-label">How FoodLoop works</p>

            <h2>Good food keeps moving.</h2>

            <div className="how-step">
              <strong>01</strong>

              <div>
                <h3>Choose your city</h3>
                <p>
                  Find surplus food available in your city and locality.
                </p>
              </div>
            </div>

            <div className="how-step">
              <strong>02</strong>

              <div>
                <h3>Discover food</h3>
                <p>
                  Search by food type, community, college, hostel, or event.
                </p>
              </div>
            </div>

            <div className="how-step">
              <strong>03</strong>

              <div>
                <h3>Reserve a portion</h3>
                <p>
                  Reserve available food before the pickup deadline.
                </p>
              </div>
            </div>

            <div className="how-step">
              <strong>04</strong>

              <div>
                <h3>Reduce waste together</h3>
                <p>
                  Every successful pickup adds to your community impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

