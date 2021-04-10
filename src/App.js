import React from "react"
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa"

function App() {
  return (
    <>
      <main>
        <section className="hero-section">
          <img
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            alt="zomato logo"
          />

          <p>Discover the best food & drinks in Delhi NCR</p>

          <div>
            <div>
              <FaMapMarkerAlt />
              <input type="text" />
            </div>
            <div>
              <FaSearch />
              <input type="text" />
            </div>
          </div>
        </section>
        <section />
      </main>
      <footer>
        <nav>
          <h3>Company</h3>
          <ul>
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Report Fraud</li>
            <li>Contact</li>
          </ul>
        </nav>
        <nav>
          <h3>For Foodies</h3>
          <ul>
            <li>Code of Conduct</li>
            <li>Community Blogger</li>
            <li>Help</li>
            <li>Mobile Apps</li>
          </ul>
        </nav>
        <nav>
          <h3>For Restaurants</h3>
          <ul>
            <li>Add Restaurant</li>
            <li>Claim your Listing</li>
            <li>Business App</li>
            <li>Restaurant Widgets</li>
            <li>Products for Businesses</li>
          </ul>
        </nav>

        <nav>
          <h3 id="for-you">For You</h3>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Security</li>
            <li>Sitemap</li>
          </ul>
        </nav>

        <p>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2021 © Zomato™ Pvt Ltd.
          All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default App
