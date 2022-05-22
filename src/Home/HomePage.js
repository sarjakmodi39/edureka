import { Box } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import "./homePage.css";
import CourseDetails from "./CourseDetails";
const HomePage = () => {
  return (
    <>
      <div>
        <div className="list">
          <p>Cloud Computing</p>
          <p>DevOps</p>
          <p>BI and Visualization</p>
          <p>Data Science</p>
          <p>Executive Programs</p>
          <p>Big Data</p>
          <p>CyberSeccurity</p>
          <p>
            <MenuIcon />
          </p>
        </div>
        <div className="image">
          <a href="/image.jpg">
            <img src="/image.jpg"></img>
          </a>
        </div>
        <div className="text">
          <span>
            BECOMES A<div></div>
            <b>DEVOPS ENGINEER</b>
          </span>

          <span className="knowmore">
            KNOW MORE
            <ChevronRightIcon></ChevronRightIcon>
          </span>
        </div>
        <div className="text">
          <span>
            BECOMES A<div></div>
            <b>CLOUDE ENGINEER</b>
          </span>
          <span className="knowmore">
            KNOW MORE
            <ChevronRightIcon></ChevronRightIcon>
          </span>
        </div>
        <div className="text">
          <span>
            BECOMES A<div></div>
            <b>DATA SCIENTIEST</b>
          </span>
          <span className="knowmore">
            KNOW MORE
            <ChevronRightIcon></ChevronRightIcon>
          </span>
        </div>
      </div>
    </>
  );
};
export default HomePage;
