import { Box } from "@mui/system";
// import div from "@mui/material/div";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";
import { Grade } from "@mui/icons-material";

const HeaderComponent = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div>
            {" "}
            <h1>edureka!</h1>
          </div>

          <div>
            <input
              type="search"
              placeholder="Enter Course,Category or Keyword"
            ></input>
          </div>
          <div className="search">
            <SearchIcon></SearchIcon>
          </div>

          <div className="header">
            <p>Corporate Training</p>
            <p>Courses</p>
            <p>Blog</p>
            <p>|</p>
            <p>Login</p>
            <p>Sign Up</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderComponent;
