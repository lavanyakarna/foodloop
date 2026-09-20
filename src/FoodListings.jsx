import { useEffect, useState } from "react";

const API_URL = "http://127.0.0.1:8000";

const foodImages = {
  "Café":
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=85",
  Bakery:
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85",
  "Community event":
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
  Restaurant:
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85",
};

const listingImages = {
  1:
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=85",

  2:
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85",

  3:
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85",

  101:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",

  102:
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85",

  103:
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",

  104:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",

  105:
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=85",

  106:
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=85",

  107:
    "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85",

  108:
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=85",

  109:
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",

  110:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",

  111:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",

  112:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",

  113:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",

  114:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
};
const cities = [
  "Bhopal",
  "Indore",
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Jaipur",
  "Ahmedabad",
  "Lucknow",
  "Chandigarh",
  "Kochi",
  "Nagpur",
  "Surat",
  "Patna",
  "Bhubaneswar",
  "Visakhapatnam",
  "Vadodara",
  "Coimbatore",
  "Guwahati",
  "Dehradun",
  "Ranchi",
  "Amritsar",
];

const communities = [
  "Public",
  "Students",
  "College",
  "Hostel or mess",
  "Office workers",
  "Apartment community",
  "Neighborhood",
  "Community event",
  "NGO or food bank",
];

const emptyForm = {
  food_name: "",
  description: "",
  quantity: "",
  unit: "portions",
  locality: "",
  source_type: "Café",
  community: "Public",
  food_type: "Vegetarian",
  pickup_deadline: "",
};

function FoodListings() {
  const [listings, setListings] = useState([]);
  const [impact, setImpact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");

  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("Bhopal");
  const [citySearch, setCitySearch] = useState("");
  const [showCityOptions, setShowCityOptions] = useState(false);

  const [sourceFilter, setSourceFilter] = useState("");
  const [foodFilter, setFoodFilter] = useState("");

  const [communityFilter, setCommunityFilter] = useState("");
  const [communitySearch, setCommunitySearch] = useState("");
  const [showCommunityOptions, setShowCommunityOptions] = useState(false);

  const [showShareForm, setShowShareForm] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(citySearch.toLowerCase())
  );

  const filteredCommunities = communities.filter((community) =>
    community.toLowerCase().includes(communitySearch.toLowerCase())
  );

  const loadListings = async (
    searchValue = search,
    sourceValue = sourceFilter,
    foodValue = foodFilter,
    cityValue = selectedCity,
    communityValue = communityFilter
  ) => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      if (searchValue.trim()) {
        params.append("search", searchValue.trim());
      }

      if (cityValue) {
        params.append("city", cityValue);
      }

      if (sourceValue) {
        params.append("source_type", sourceValue);
      }

      if (foodValue) {
        params.append("food_type", foodValue);
      }

      if (communityValue) {
        params.append("community", communityValue);
      }

      const response = await fetch(
        `${API_URL}/api/listings?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error("Could not load food listings");
      }

      const data = await response.json();

      setListings(data.listings);
      setError("");
    } catch {
      setError("Food listings could not be loaded.");
    } finally {
      setLoading(false);
    }
  };

  const loadImpact = async () => {
    try {
      const response = await fetch(`${API_URL}/api/impact`);
      const data = await response.json();
      setImpact(data);
    } catch {
      setImpact(null);
    }
  };

  useEffect(() => {
  loadListings();
  loadImpact();
}, []);

useEffect(() => {
  const openShareForm = () => {
    setShowShareForm(true);

    setTimeout(() => {
      document
        .getElementById("share-food-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  window.addEventListener("foodloop-open-share", openShareForm);

  return () => {
    window.removeEventListener("foodloop-open-share", openShareForm);
  };
}, []);

  const handleSearch = (event) => {
    event.preventDefault();

    loadListings(
      search,
      sourceFilter,
      foodFilter,
      selectedCity,
      communityFilter
    );
  };

  const handleCitySearch = (event) => {
    setCitySearch(event.target.value);
    setShowCityOptions(true);
  };

  const selectCity = (city) => {
    setSelectedCity(city);
    setCitySearch("");
    setShowCityOptions(false);

    loadListings(
      search,
      sourceFilter,
      foodFilter,
      city,
      communityFilter
    );
  };

  const selectCommunity = (community) => {
    setCommunityFilter(community);
    setCommunitySearch(community);
    setShowCommunityOptions(false);

    loadListings(
      search,
      sourceFilter,
      foodFilter,
      selectedCity,
      community
    );
  };

  const clearCommunity = () => {
    setCommunityFilter("");
    setCommunitySearch("");
    setShowCommunityOptions(false);

    loadListings(
      search,
      sourceFilter,
      foodFilter,
      selectedCity,
      ""
    );
  };

  const handleFilterChange = (type, value) => {
    let nextSourceFilter = sourceFilter;
    let nextFoodFilter = foodFilter;

    if (type === "all") {
      nextSourceFilter = "";
      nextFoodFilter = "";

      setSourceFilter("");
      setFoodFilter("");
    }

    if (type === "source") {
      nextSourceFilter = value;
      setSourceFilter(value);
    }

    if (type === "food") {
      nextFoodFilter = value;
      setFoodFilter(value);
    }

    loadListings(
      search,
      nextSourceFilter,
      nextFoodFilter,
      selectedCity,
      communityFilter
    );
  };

  const reserveFood = async (listingId) => {
    try {
      const response = await fetch(
        `${API_URL}/api/listings/${listingId}/reserve`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (!data.success) {
        setNotification(data.message);
        return;
      }

      setListings((currentListings) =>
        currentListings.map((listing) =>
          listing.id === listingId ? data.listing : listing
        )
      );

      setNotification("Food reserved successfully!");
      loadImpact();
    } catch {
      setNotification("Could not reserve this food. Please try again.");
    }
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const createListing = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/listings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          city: selectedCity,
          quantity: Number(form.quantity),
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setNotification("Could not create the food listing.");
        return;
      }

      setForm(emptyForm);
      setShowShareForm(false);
      setNotification("Your surplus food was added successfully!");

      await loadListings(
        search,
        sourceFilter,
        foodFilter,
        selectedCity,
        communityFilter
      );

      await loadImpact();
    } catch {
      setNotification("Could not create the food listing.");
    }
  };

  return (
    <section className="listings-section" id="food-listings">
      {notification && (
        <div className="app-notification">
          <span className="notification-check">✓</span>
          <span>{notification}</span>

          <button
            className="notification-close"
            onClick={() => setNotification("")}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      )}

      <div className="listings-header">
        <div>
          <p className="section-label">Available near you</p>
          <h2>Food waiting to be rescued</h2>
          <p className="listings-subtitle">
            Find surplus food from people and businesses in your community.
          </p>
        </div>

        <div className="city-picker">
          <div className="city-picker-input-row">
            <span className="city-picker-icon">⌖</span>

            <input
              className="city-input"
              value={citySearch}
              onChange={handleCitySearch}
              onFocus={() => setShowCityOptions(true)}
              placeholder={selectedCity}
              aria-label="Search city"
            />

            <button
              type="button"
              className="city-arrow"
              onClick={() =>
                setShowCityOptions((currentValue) => !currentValue)
              }
              aria-label="Show cities"
            >
              {showCityOptions ? "⌃" : "⌄"}
            </button>
          </div>

          {showCityOptions && (
            <div className="city-options">
              {filteredCities.map((city) => (
                <button
                  type="button"
                  className={`city-option ${
                    selectedCity === city ? "selected-city" : ""
                  }`}
                  key={city}
                  onClick={() => selectCity(city)}
                >
                  {city}
                </button>
              ))}

              {filteredCities.length === 0 && (
                <p className="no-city-option">No matching city</p>
              )}
            </div>
          )}
        </div>
      </div>

      <form className="food-search" onSubmit={handleSearch}>
        <input
  id="food-search-input"
  value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search food, locality, city, or community"
        />

        <button type="submit" className="search-food-button">
          Search
        </button>
      </form>

      <div className="community-picker">
        <div className="community-picker-input-row">
          <span className="community-icon">⌂</span>

          <input
            className="community-input"
            value={communitySearch}
            onChange={(event) => {
              setCommunitySearch(event.target.value);
              setShowCommunityOptions(true);
            }}
            onFocus={() => setShowCommunityOptions(true)}
            placeholder="Filter by community, college, hostel, or event"
            aria-label="Filter by community"
          />

          <button
            type="button"
            className="community-arrow"
            onClick={() =>
              setShowCommunityOptions((currentValue) => !currentValue)
            }
            aria-label="Show communities"
          >
            {showCommunityOptions ? "⌃" : "⌄"}
          </button>
        </div>

        {showCommunityOptions && (
          <div className="community-options">
            <button
              type="button"
              className={`community-option ${
                communityFilter === "" ? "selected-community" : ""
              }`}
              onClick={clearCommunity}
            >
              All communities
            </button>

            {filteredCommunities.map((community) => (
              <button
                type="button"
                className={`community-option ${
                  communityFilter === community
                    ? "selected-community"
                    : ""
                }`}
                key={community}
                onClick={() => selectCommunity(community)}
              >
                {community}
              </button>
            ))}

            {communitySearch && filteredCommunities.length === 0 && (
              <button
                type="button"
                className="community-option"
                onClick={() => selectCommunity(communitySearch)}
              >
                Search for “{communitySearch}”
              </button>
            )}
          </div>
        )}
      </div>

      <div className="listing-filters">
        <button
          type="button"
          className={`filter-button ${
            sourceFilter === "" &&
            foodFilter === "" &&
            communityFilter === ""
              ? "active-filter"
              : ""
          }`}
          onClick={() => handleFilterChange("all", "")}
        >
          All food
        </button>

        <button
          type="button"
          className={`filter-button ${
            sourceFilter === "Bakery" ? "active-filter" : ""
          }`}
          onClick={() => handleFilterChange("source", "Bakery")}
        >
          Bakeries
        </button>

        <button
          type="button"
          className={`filter-button ${
            sourceFilter === "Community event" ? "active-filter" : ""
          }`}
          onClick={() =>
            handleFilterChange("source", "Community event")
          }
        >
          Events
        </button>

        <button
          type="button"
          className={`filter-button ${
            foodFilter === "Vegetarian" ? "active-filter" : ""
          }`}
          onClick={() =>
            handleFilterChange(
              "food",
              foodFilter === "Vegetarian" ? "" : "Vegetarian"
            )
          }
        >
          Vegetarian
        </button>

        <button
          type="button"
          className={`filter-button ${
            foodFilter === "Non-vegetarian" ? "active-filter" : ""
          }`}
          onClick={() =>
            handleFilterChange(
              "food",
              foodFilter === "Non-vegetarian"
                ? ""
                : "Non-vegetarian"
            )
          }
        >
          Non-vegetarian
        </button>

        <button
          type="button"
          className="share-food-button"
          onClick={() =>
            setShowShareForm((currentValue) => !currentValue)
          }
        >
          {showShareForm ? "Close form" : "+ Share surplus food"}
        </button>
      </div>

      {showShareForm && (
        <form
  id="share-food-form"
  className="share-form"
  onSubmit={createListing}
>
          <div className="share-form-heading">
            <p className="section-label">Give food a second chance</p>
            <h3>Share surplus food</h3>
          </div>

          <div className="form-grid">
            <input
              name="food_name"
              value={form.food_name}
              onChange={handleFormChange}
              placeholder="Food name"
              required
            />

            <input
              name="quantity"
              type="number"
              min="1"
              value={form.quantity}
              onChange={handleFormChange}
              placeholder="Quantity"
              required
            />

            <input
              name="unit"
              value={form.unit}
              onChange={handleFormChange}
              placeholder="Unit, for example portions"
              required
            />

            <input
              name="locality"
              value={form.locality}
              onChange={handleFormChange}
              placeholder="Locality"
              required
            />

            <select
              name="source_type"
              value={form.source_type}
              onChange={handleFormChange}
            >
              <option>Café</option>
              <option>Bakery</option>
              <option>Restaurant</option>
              <option>Community event</option>
              <option>Household</option>
              <option>Hostel or mess</option>
            </select>

            <select
              name="food_type"
              value={form.food_type}
              onChange={handleFormChange}
            >
              <option>Vegetarian</option>
              <option>Non-vegetarian</option>
              <option>Vegan</option>
            </select>

            <input
              name="community"
              value={form.community}
              onChange={handleFormChange}
              placeholder="Community or Public"
            />

            <input
              name="pickup_deadline"
              value={form.pickup_deadline}
              onChange={handleFormChange}
              placeholder="Pickup deadline"
              required
            />
          </div>

          <textarea
            name="description"
            value={form.description}
            onChange={handleFormChange}
            placeholder="Describe the food and pickup details"
            required
          />

          <button type="submit" className="submit-listing-button">
            Publish food listing
          </button>
        </form>
      )}

      {impact && (
        <div className="live-impact-row">
          <div>
            <strong>{impact.meals_rescued}</strong>
            <span>meals rescued</span>
          </div>

          <div>
            <strong>{impact.active_listings}</strong>
            <span>active listings</span>
          </div>

          <div>
            <strong>{impact.estimated_kg_saved} kg</strong>
            <span>waste avoided</span>
          </div>

          <div>
            <strong>{impact.cities_connected}</strong>
            <span>cities connected</span>
          </div>
        </div>
      )}

      {loading && (
        <p className="loading-message">Loading available food...</p>
      )}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && listings.length === 0 && (
        <div className="empty-state">
          <h3>No food listings found</h3>
          <p>Try a different search or share the first listing.</p>
        </div>
      )}

      {!loading && !error && listings.length > 0 && (
        <div className="listings-grid">
          {listings.map((listing) => (
            <article className="listing-card" key={listing.id}>
              <div className="listing-image-wrapper">
                <img
                  className="listing-image"
                  src={
  listingImages[listing.id] ||
  foodImages[listing.source_type] ||
  foodImages["Community event"]
}
                  alt={listing.food_name}
                />

                <span className="image-status">
                  {listing.quantity > 0 ? "Available" : "Claimed"}
                </span>

                <button
                  className="save-button"
                  aria-label="Save listing"
                >
                  ♡
                </button>
              </div>

              <div className="listing-content">
                <div className="listing-meta">
                  <span className="source-label">
                    {listing.source_type}
                  </span>

                  <span className="food-label">
                    {listing.food_type}
                  </span>
                </div>

                <h3>{listing.food_name}</h3>

                <p className="listing-description">
                  {listing.description}
                </p>

                <div className="listing-details">
                  <span>
                    <strong>{listing.quantity}</strong>{" "}
                    {listing.unit} left
                  </span>

                  <span>{listing.locality}</span>
                </div>

                <div className="listing-footer">
                  <div className="deadline">
                    <span className="clock-icon">◷</span>
                    <span>{listing.pickup_deadline}</span>
                  </div>

                  <button
                    className="reserve-button"
                    onClick={() => reserveFood(listing.id)}
                    disabled={listing.quantity === 0}
                  >
                    {listing.quantity === 0
                      ? "Fully claimed"
                      : "Reserve"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default FoodListings;