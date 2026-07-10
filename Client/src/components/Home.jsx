import React from "react";
import "./Home.css";

function Home() {
  const categories = [
    { name: "Pizza", icon: "🍕" },
    { name: "Burger", icon: "🍔" },
    { name: "Biryani", icon: "🍛" },
    { name: "Chicken", icon: "🍗" },
    { name: "Desserts", icon: "🍰" },
    { name: "Drinks", icon: "🥤" },
  ];

  const foods = [
    {
      name: "Cheese Pizza",
      price: "₹299",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700",
    },
    {
      name: "Chicken Burger",
      price: "₹199",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
    },
    {
      name: "Chicken Biryani",
      price: "₹249",
      image:
        "https://images.unsplash.com/photo-1701579231349-d7459c9a6a46?w=700",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="tag">🍔 India's Best Food Delivery</span>

          <h1>
            Delicious Food <br />
            Delivered To Your Door
          </h1>

          <p>
            Order delicious meals from your favourite restaurants. Fast
            Delivery • Fresh Food • Amazing Offers.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search food or restaurant..."
            />
            <button>Search</button>
          </div>

          <div className="hero-buttons">
            <button className="order-btn">Order Now</button>
            <button className="menu-btn">View Menu</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900"
            alt="Pizza"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="category-container">
          {categories.map((item, index) => (
            <div className="card" key={index}>
              <span>{item.icon}</span>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Food */}
      <section className="featured">
        <h2>Featured Dishes</h2>

        <div className="food-container">
          {foods.map((food, index) => (
            <div className="food-card" key={index}>
              <img src={food.image} alt={food.name} />

              <div className="food-info">
                <h3>{food.name}</h3>
                <p>{food.price}</p>

                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <h2>Why Choose QuickBite?</h2>

        <div className="feature-container">
          <div className="feature-card">
            🚀
            <h3>Fast Delivery</h3>
            <p>Food delivered in 30 minutes or less.</p>
          </div>

          <div className="feature-card">
            🍽️
            <h3>Fresh Food</h3>
            <p>Prepared fresh every day with quality ingredients.</p>
          </div>

          <div className="feature-card">
            ⭐
            <h3>Top Rated</h3>
            <p>Trusted by thousands of happy customers.</p>
          </div>

          <div className="feature-card">
            💳
            <h3>Secure Payment</h3>
            <p>100% safe and secure online payment options.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;