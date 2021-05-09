import React from "react"
import popularLocalities from "./assets/data/popularLocalities"

const Locality = ({ name, places, url = "#" }) => (
  <li className="p-4 border border-gray-200 rounded-md text-gray-700 hover:shadow-sm">
    <a href={url} className="overflow-ellipsis overflow-hidden">
      {name} ({places} places)
    </a>
  </li>
)

function PopularLocalitiesSection() {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl text-center mb-8">Popular localities in and around Delhi NCR</h2>
      <ul className="grid grid-cols-3 gap-4">
        {popularLocalities.map(({ name, places }) => (
          <Locality name={name} places={places} />
        ))}
      </ul>
    </section>
  )
}

export default PopularLocalitiesSection
