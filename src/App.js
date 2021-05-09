import React from "react"

import AppHeader from "./AppHeader"
import HeroSection from "./HeroSection"
import RecommendationSection from './RecommendationSection'
import GetZomatoSection from './GetZomatoSection'
import CollectionsSection from "./CollectionsSection"
import PopularLocalitiesSection from './PopularLocalitiesSection'
import ExploreSection from './ExploreSection'
import AppFooter from './AppFooter'

function App() {
  return (
    <main>
      {/* <AppHeader /> */}
      <HeroSection />
      <RecommendationSection/>
      <CollectionsSection />
      <PopularLocalitiesSection/>
      <GetZomatoSection/>
      <ExploreSection/>
      <AppFooter />
    </main>
  )
}

export default App
