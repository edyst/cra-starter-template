import React from "react"
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa"

const ZomatoLogo = () => (
  <img
    src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
    alt="zomato"
    className="w-60"
  />
)
const Description = () => (
  <h2 className="text-3xl text-white">
    Discover the best food & drinks in Delhi NCR
  </h2>
)
const SearchForm = () => (
  <form>
    <div className="bg-white mx-auto flex p-4 rounded-lg w-full text-sm">
      <div className="field flex gap-4 items-center">
        <span className="text-red-400 text-lg">
          <FaMapMarkerAlt />
        </span>
        <input
          className="w-full"
          type="text"
          placeholder="Your Space Hostel..."
        />
      </div>
      <div className="field flex gap-4 items-center border-l border-gray-200 pl-4">
        <FaSearch className="text-gray-500 text-lg" />
        <input
          type="text"
          className="w-full"
          placeholder="Search for restaurant"
        />
      </div>
    </div>
  </form>
)

function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: `url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')`,
        backgroundSize: "cover",
        height: `500px`,
      }}
      className="py-10 px-4 flex flex-col justify-center items-center gap-8 text-center"
    >
      <ZomatoLogo />
      <Description />
      <SearchForm />
    </section>
  )
}

export default HeroSection
