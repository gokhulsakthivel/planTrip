import { Component } from "react";
import "./styles/WelcomeContent.css";
import welcomeImage from "./assets/welcome-image.svg";

export default class WelcomeContent extends Component {
  render() {
    return (
      <div className="welcomeContent">
        <div className="welcomeContentImg">
          <img src={welcomeImage} alt="welcomeImage"></img>
        </div>
        <div className="welcomeContentText">
          <h1>
            Life is short <br />
            and the world is wide!
          </h1>
          <br />
          <p>
            Stay at the comfo of your homes and book a trip to travel after the
            post pandemic era.
          </p>
          <br />
          <button>PLAN A TRIP</button>
        </div>
      </div>
    );
  }
}
