import CTASection from "./components/CTASection"
import DashboardPreview from "./components/DashboardPreview"
import FeaturesSection from "./components/FeaturesSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks"
import { NavbarComponent } from "./components/NavbarComponent"


function App() {

  return (
    <>
<NavbarComponent />  
<HeroSection />  
<FeaturesSection /> 
<HowItWorks />  
<DashboardPreview /> 
<CTASection />
<Footer />
    </>
  )
}

export default App
