import React from 'react'
import Navbar from '../components/Navbar'
import JobsBanner from '../components/JobsBanner/JobsBanner'
import JobsSearch from '../components/JobsSearch/JobsSearch'
import JobsFilter from '../components/JobsFilter/JobsFilter'
import JobCard from '../components/jobCard/JobCard'
import JobList from '../components/JobList/JobList'
import Footer from '../components/Footer'
import './jobs.css'
import Pagination from '../components/Pagination/Pagination'

export default function Jobs() {
  return (
   <>
   <Navbar />

    <JobsBanner />

    <JobsSearch />


 <section className="job-container">
      <JobsFilter />
    
       <JobList />

    </section>

    {/* <Pagination/> */}

    <Footer/>

   </>
  )
}
