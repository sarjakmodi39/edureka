import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./HeaderComponent";
import HomePage from "./Home/HomePage";
import CourseDetails from "./Home/CourseDetails";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <HomePage></HomePage>
      <CourseDetails></CourseDetails>
    </>
  );
}

export default App;
