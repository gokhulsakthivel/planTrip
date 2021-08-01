import { Component } from "react";
import "./styles/Navbar.css";

export default class Navbar extends Component {
  scrollTo = (element) => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop,
    });
  };

  scrollToWeather = () => {
    document.addEventListener("DOMContentLoaded", function () {
      console.log("loaded");
      document.getElementById("destination").addEventListener("click", () => {
        this.scrollTo(document.getElementById("fd"));
        console.log("called");
      });
    });
  };

  componentDidMount() {
    // scrollToWeather = () => {
    //   this.scrollTo(document.getElementById("fd"));
    // };
    document.getElementById("weather").addEventListener("click", () => {
      this.scrollTo(document.getElementById("wch"));
    });
    document.getElementById("destination").addEventListener("click", () => {
      this.scrollTo(document.getElementById("fd"));
    });
    document.getElementById("getAQoute").addEventListener("click", () => {
      this.scrollTo(document.getElementById("pq"));
    });
  }

  render() {
    return (
      <div className="navBarWrap">
        <div className="navBar">
          <a href="#wch" id="weather">
            WEATHER
          </a>
          <a href="#fd" id="destination">
            DESTINATIONS
          </a>
          <a href="#pq" id="getAQoute">
            GET A QUOTE
          </a>
        </div>
      </div>
    );
  }
}
