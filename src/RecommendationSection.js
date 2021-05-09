import React from "react"
import recommendations from "./assets/data/recommendations"

const RecommendationCard = ({ image, url, heading }) => (
  <li>
    <a href={url}>
      <article className="recommendation-article relative rounded-lg overflow-hidden shadow-md">
        <img src={image} alt={heading} className="h-full  object-cover" />
        <h3 className="absolute bottom-0 bg-white w-full text-center py-2">
          {heading}
        </h3>
      </article>
    </a>
  </li>
)

function RecommendationSection() {
  return (
    <section className="py-10 px-4">
      <ul className="grid grid-cols-4 gap-3 text-xs">
        {recommendations.map(({ img, description, link }) => (
          <RecommendationCard image={img} heading={description} url={link} />
        ))}
      </ul>
    </section>
  )
}

export default RecommendationSection
