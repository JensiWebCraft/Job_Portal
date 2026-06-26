import React from 'react'
import Navbar from '../components/Navbar'
import JobsBanner from '../components/JobsBanner/JobsBanner'
import JobsSearch from '../components/JobsSearch/JobsSearch'
import JobsFilter from '../components/JobsFilter/JobsFilter'
import JobCard from '../components/jobCard/JobCard'

export default function Jobs() {
  return (
   <>
  <div className="jobs-page">

    <JobsFilter />

    <div className="job-list">

        <JobCard />

        <JobCard />

        <JobCard />

    </div>

</div>
UI Previe
   </>
  )
}
