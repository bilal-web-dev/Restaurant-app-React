import React, { Component } from "react";
import "./App.css";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="img-container">
          <div className="text-container">
            <p>Welcome to Food Fusion</p>
          </div>
        </div>

        <div className="about">
          Introducing Food Fusion: Your Ultimate Restaurant Memo App
        </div>

        <div className="about-container">
          <div className="features">
            <span className="features-text">
              🍽️ Discover and Remember: Food Fusion empowers you to effortlessly
              discover, document, and remember your favorite restaurants. You
              can quickly add new restaurants to your memo list, complete with
              details like location, Rating and Name.
            </span>
          </div>
          <div className="features">
            <span className="features-text">
              🔍 Quick Search: Never let a craving go unanswered! Our powerful
              search functionality lets you find restaurants based on specific
              cuisines, locations, or even ambiance. Say goodbye to endless
              scrolling and hello to instant results.
            </span>
          </div>
          <div className="features">
            <span className="features-text">
              ✨ Personalized Updates: Keep your restaurant list up-to-date with
              ease. Food Fusion enables you to edit and update restaurant
              information, ensuring that your memo reflects your latest
              experiences and preferences.
            </span>
          </div>

          <div className="features">
            <span className="features-text">
              ❌ Never Forget: Had an unforgettable meal at a hidden gem? Don't
              let it fade from memory! Food Fusion ensures that you never forget
              those delightful culinary moments by offering a dedicated space
              for memorable notes and impressions.
            </span>
          </div>
          <div className="features">
            <span className="features-text">
              🗑️ Effortless Management: Exploring new dining destinations
              doesn't mean cluttering your app. Food Fusion provides simple and
              convenient deletion options, so you can efficiently manage your
              memo list and make space for new memories.
            </span>
          </div>

          <div className="features">
            <span className="features-text">
              📜 List at Your Fingertips: When the cravings kick in, access your
              curated list of restaurants in seconds. Food Fusion presents your
              memo list in a clean, easy-to-read format, making your dining
              decisions a breeze.
            </span>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
