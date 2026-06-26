import React from 'react'
import NaNvbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import SearchSection from './components/SearchSection'
import PopularCategory from './components/PopularCategory'
import FeaturedJobs from './components/FeaturedJobs'
import TopCompanies from './components/TopCompanies'
import WhyChooseUs from './components/WhyChooseUs'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'

export default function App() {
  return (
    <div>
      <NaNvbar />
      <Hero/>
      <SearchSection/>
      <PopularCategory/>
      <FeaturedJobs />
      <TopCompanies/>
      <WhyChooseUs/>
      <Statistics/>
      <Testimonials/>
      <CallToAction/>
      <Footer />
    </div>
  )
}
