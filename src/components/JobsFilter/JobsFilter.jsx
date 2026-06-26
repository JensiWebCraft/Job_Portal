import "./JobsFilter.css";

function JobsFilter() {
  return (
    <aside className="filter">

      <h2>Filter Jobs</h2>

      {/* Category */}

      <div className="filter-group">

        <label>Category</label>

        <select>
          <option>All Categories</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Full Stack</option>
          <option>UI/UX</option>
          <option>DevOps</option>
        </select>

      </div>

      {/* Location */}

      <div className="filter-group">

        <label>Location</label>

        <input
          type="text"
          placeholder="Ahmedabad"
        />

      </div>

      {/* Experience */}

      <div className="filter-group">

        <label>Experience</label>

        <select>
          <option>Any</option>
          <option>Fresher</option>
          <option>1+ Years</option>
          <option>2+ Years</option>
          <option>3+ Years</option>
        </select>

      </div>

      {/* Job Type */}

      <div className="filter-group">

        <label>Job Type</label>

        <select>
          <option>All</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Remote</option>
          <option>Internship</option>
        </select>

      </div>

      {/* Salary */}

      <div className="filter-group">

        <label>Salary</label>

        <select>
          <option>Any</option>
          <option>3 LPA+</option>
          <option>5 LPA+</option>
          <option>8 LPA+</option>
          <option>10 LPA+</option>
        </select>

      </div>

      <button className="apply-btn">
        Apply Filters
      </button>

      <button className="clear-btn">
        Clear Filters
      </button>

    </aside>
  );
}

export default JobsFilter;