import React from "react"

const NavLinkItem = ({ text, url }) => (
  <li className="text-sm text-gray-500 hover:text-gray-900">
    <a href={url}>{text}</a>
  </li>
)

function NavLinks({ heading = "Navigation Links", links = [] }) {
  return (
    <nav>
      <h4 className="text-sm uppercase font-bold my-1">{heading}</h4>
      <ul className="space-y-0.5">
        {links.map((link) => (
          <NavLinkItem text={link.text} url={link.url} />
        ))}
      </ul>
    </nav>
  )
}

const ZomatoLogo = () => (
  <img
    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
    alt=""
    class="w-24 col-span-2"
  />
)

const CompanyLinks = () => (
  <NavLinks
    heading="Company"
    links={[
      { text: "Who We Are", url: "" },
      { text: "Blog", url: "" },
      { text: "Careers", url: "" },
      { text: "Report Fraud", url: "" },
      { text: "Contact", url: "" },
    ]}
  />
)
const ForFoodiesLinks = () => (
  <NavLinks
    heading="For Foodies"
    links={[
      { text: "Code of Conduct", url: "" },
      { text: "Community", url: "" },
      { text: "Blogger Help", url: "" },
      { text: "Mobile Apps", url: "" },
    ]}
  />
)
const ForRestaurantsLinks = () => (
  <NavLinks
    heading="For Restaurants"
    links={[
      { text: "Add Restaurant", url: "" },
      { text: "Claim your Listing", url: "" },
      { text: "Business App", url: "" },
      { text: "Restaurant Widgets", url: "" },
      { text: "Products for Businesses", url: "" },
    ]}
  />
)
const ForYouLinks = () => (
  <NavLinks
    heading="For You"
    links={[
      { text: "Privacy", url: "" },
      { text: "Terms", url: "" },
      { text: "Security", url: "" },
      { text: "Sitemap", url: "" },
    ]}
  />
)
const SocialLinks = () => (
  <NavLinks
    heading="Social links"
    links={[
      { text: "Facebook", url: "" },
      { text: "Twitter", url: "" },
      { text: "Instagram", url: "" },
    ]}
  />
)
const DownloadAppLinks = () => (
  <nav className="space-y-2 flex flex-col">
    <a href="#">
      <img
        src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
        alt="download on app store"
        className="w-40"
      />
    </a>
    <a href="#">
      <img
        src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
        className="w-40"
        alt="get it on google play"
      ></img>
    </a>
  </nav>
)

const Disclaimer = () => (
  <p className="col-span-2 text-sm text-gray-500 mt-6 py-6 border-t border-gray-300">
    By continuing past this page, you agree to our Terms of Service, Cookie
    Policy, Privacy Policy and Content Policies. All trademarks are properties
    of their respective owners. 2008-2021 © Zomato™ Pvt Ltd. All rights
    reserved.
  </p>
)

function AppFooter() {
  return (
    <footer class="grid grid-cols-2 gap-4 bg-gray-50 p-4 py-10">
      <ZomatoLogo />
      <CompanyLinks />
      <ForFoodiesLinks />
      <ForRestaurantsLinks />
      <ForYouLinks />
      <SocialLinks />
      <DownloadAppLinks />
      <Disclaimer />
    </footer>
  )
}

export default AppFooter
