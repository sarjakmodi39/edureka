import MenuIcon from "@mui/icons-material/Menu";
import "./CourseDetails.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const CourseDetails = () => {
  return (
    <>
      <div className="heading">
        <p>
          <h2>Trending Courses</h2>
        </p>
      </div>

      <div className="list">
        <h3>All</h3>
        <h3>Cloud Computing</h3>
        <h3>DevOps</h3>
        <h3>BI and Visualization</h3>
        <h3>Data Science</h3>
        <h3>Programming & Frameworks</h3>
        <h3>Big Data</h3>
        <h3>
          <MenuIcon />
        </h3>
      </div>
      <div>
        <div className="courselist">
          <div className="coursemargin">
            <h3 className="title">
              PG Diploma Program
              <div>
                <span>E & ICT ACAMEDY</span>
              </div>
              <span>NIT WARANGAL</span>
            </h3>
          </div>
          <div>
            <p>
              PGD in- <b>AI & Machine Learning</b>
            </p>
            <ul className="ul">
              <li>Curriculum Curated by NITW Professors</li>
              <li>Alumni Status</li>
              <li>Placement Assistance</li>
            </ul>
          </div>
        </div>
        <div className="courselist">
          <div className="coursemargin">
            <h3 className="title">
              DEVOPS
              <div>CERTIFICATION</div>TRAINING COURSE
            </h3>
          </div>
          <p>DevOPS Certification Training Course</p>
          <ul className="ul">
            <li>Curriculum Curated by NITW Professors</li>
            <li>Alumni Status</li>
            <li>Placement Assistance</li>
          </ul>
        </div>
        <div className="courselist">
          <div className="coursemargin">
            <h3 className="title">
              PG Diploma Program
              <div>
                <span>E & ICT ACAMEDY</span>
              </div>
              <span>NIT WARANGAL</span>
            </h3>
          </div>
          <p>
            PGD in- <b>AI & Machine Learning</b>
          </p>
          <ul className="ul">
            <li>Curriculum Curated by NITW Professors</li>
            <li>Alumni Status</li>
            <li>Placement Assistance</li>
          </ul>
        </div>
        <div className="courselist">
          <div className="coursemargin">
            <h3 className="title">
              PG Diploma Program
              <div>
                <span>E & ICT ACAMEDY</span>
              </div>
              <span>NIT WARANGAL</span>
            </h3>
          </div>
          <p>
            PGD in- <b>AI & Machine Learning</b>
          </p>
          <ul className="ul">
            <li>Curriculum Curated by NITW Professors</li>
            <li>Alumni Status</li>
            <li>Placement Assistance</li>
          </ul>
        </div>
        <button type="primary">
          <span>
            <ChevronRightIcon></ChevronRightIcon>
          </span>
        </button>
        <div className="courselist">
          <div className="coursemargin">
            <h3 className="title">
              PG Diploma Program
              <div>
                <span>E & ICT ACAMEDY</span>
              </div>
              <span>NIT WARANGAL</span>
            </h3>
          </div>
          <p>
            PGD in- <b>AI & Machine Learning</b>
          </p>
          <ul className="ul">
            <li>Curriculum Curated by NITW Professors</li>
            <li>Alumni Status</li>
            <li>Placement Assistance</li>
          </ul>
        </div>
        <div className="courselist">
          <div className="coursemargin">
            <h3 className="title">
              PG Diploma Program
              <div>
                <span>E & ICT ACAMEDY</span>
              </div>
              <span>NIT WARANGAL</span>
            </h3>
          </div>
          <p>
            PGD in- <b>AI & Machine Learning</b>
          </p>
          <ul className="ul">
            <li>Curriculum Curated by NITW Professors</li>
            <li>Alumni Status</li>
            <li>Placement Assistance</li>
          </ul>
        </div>
        <div className="courselist">
          <div className="coursemargin">
            <h3 className="title">
              PG Diploma Program
              <div>
                <span>E & ICT ACAMEDY</span>
              </div>
              <span>NIT WARANGAL</span>
            </h3>
          </div>
          <p>
            PGD in- <b>AI & Machine Learning</b>
          </p>
          <ul className="ul">
            <li>Curriculum Curated by NITW Professors</li>
            <li>Alumni Status</li>
            <li>Placement Assistance</li>
          </ul>
        </div>
        <div className="courselist">
          <div className="coursemargin">
            <h3 className="title">
              PG Diploma Program
              <div>
                <span>E & ICT ACAMEDY</span>
              </div>
              <span>NIT WARANGAL</span>
            </h3>
          </div>
          <p>
            PGD in- <b>AI & Machine Learning</b>
          </p>
          <ul className="ul">
            <li>Curriculum Curated by NITW Professors</li>
            <li>Alumni Status</li>
            <li>Placement Assistance</li>
          </ul>
        </div>
      </div>
      <div className="allcourses ">
        <p className="browsecourse">Browse All Courses</p>
        <p>Explore our wide range of Courses</p>
      </div>
    </>
  );
};
export default CourseDetails;
