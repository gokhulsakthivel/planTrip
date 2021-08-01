import { Component } from "react";
import "./styles/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerTrip">
          <strong>
            <p>Tripzone</p>
          </strong>
          <br />
          <p>About</p>
          <p>Awards</p>
          <p>Contact Us</p>
          <p>Feedback</p>
        </div>
        <div className="footerMain">
          <strong>
            <p>Main Offices</p>
          </strong>
          <br />
          <p>The United States</p>
          <p>India</p>
          <p>Brazil</p>
          <p>Canada</p>
        </div>
        <div className="footerSub">
          <strong>
            <p>Sub Offices</p>
          </strong>
          <br />
          <p>Australia</p>
          <p>England</p>
          <p>France</p>
          <p>Germany</p>
        </div>
        <div className="footerDisc">
          <strong>
            <p>Disclaimer</p>
          </strong>
          <br />
          <p>This layout is created as a pa of Sirius UI Recruitments.</p>
          <p>
            All the above content has no direct relation with Sirius business.
          </p>
        </div>
      </div>
    );
  }
}
