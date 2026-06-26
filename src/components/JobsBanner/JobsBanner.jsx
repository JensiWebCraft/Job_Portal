import "./JobsBanner.css";

function JobsBanner() {
  return (
    <section className="jobs-banner">
      <div className="jobs-banner-content">

        <h1>Find Your Dream Job</h1>

        <p>
          Browse thousands of jobs from top companies and
          find the perfect opportunity for your career.
        </p>

        <div className="breadcrumb">
          <span>Home</span>
          <span className="arrow"> &gt; </span>
          <span className="active">Jobs</span>
        </div>

      </div>
    </section>
  );
}

export default JobsBanner;