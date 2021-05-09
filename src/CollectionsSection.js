import React from "react"
import collections from "./assets/data/collections"

const CollectionsCard = ({ image, url = "#", heading, places }) => (
  <li>
    <a href={url}>
      <article className="collections-article relative rounded-lg overflow-hidden shadow-md">
        <img src={image} alt={heading} className="h-full w-full object-cover" />
        <div className="absolute bottom-0 text-white text-center py-2">
          <h3 className="text-lg">{heading}</h3>
          <p className="text-md">{places} Places </p>
        </div>
      </article>
    </a>
  </li>
)

const Heading = () => <h2 class="text-3xl">Collections</h2>

const Description = () => (
  <p className="py-4">
    Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi
    NCR, based on trends
  </p>
)

function CollectionsSection() {
  return (
    <section className="container py-10 px-4">
      <Heading />
      <Description />
      <ul className="grid grid-cols-2 gap-3 text-xs lg:grid-cols-4 mx-auto">
        {collections.map(({ img, description, link }) => (
          <CollectionsCard image={img} heading={description} url={link} />
        ))}
      </ul>
    </section>
  )
}

export default CollectionsSection
