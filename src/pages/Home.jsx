import { useState } from "react"
import HeroSection from "../components/HeroSection"
import FeatureSection from "../components/Feature"
import Service from "../components/Service"
import Testimonial from "../components/Testimonial"
import ComingSoon from "../components/ComingSoon"
import EarlyAccess from "../components/EarlyAccess"


export default function Home() {

  const [showModal, setShowModal] = useState(false); // ⬅️ STATE MODAL

  return (
    <main className="w-full">
      <HeroSection />
      <div id="how-it-works">
      <FeatureSection />
      </div>

      <div id="use-cases">
      <Service />
      </div>

      <div id="vision">
        <Testimonial />
      </div>

      <ComingSoon />
      <div id="earlyAccess">
      <EarlyAccess />
      </div>

    </main>
  )
}
