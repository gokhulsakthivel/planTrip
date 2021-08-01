import { Component } from "react";
import "./styles/PromoQoute.css";
import promoImage from "./assets/promo-image.png";

export default class PromoQoute extends Component {
  state = {
    error: {
      name: true,
      contactNo: true,
      email: true,
      pass: false,
    },
  };

  submitCheck = (event) => {
    event.preventDefault();
    var getName = document.getElementById("name").value;
    var getContact = document.getElementById("contact").value;
    var getEmail = document.getElementById("email").value;

    var temp = this.state.error;
    // name
    if (getName !== "") {
      temp.name = true;
      this.setState({
        error: temp,
      });
    } else {
      temp.name = false;
      this.setState({
        error: temp,
      });
    }

    // Contact
    if (getContact > 999999999 && getContact < 10000000000) {
      temp.contactNo = true;
      this.setState({
        error: temp,
      });
    } else {
      temp.contactNo = false;
      this.setState({
        error: temp,
      });
    }

    // email
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(getEmail)) {
      temp.email = true;
      this.setState({
        error: temp,
      });
    } else {
      temp.email = false;
      this.setState({
        error: temp,
      });
    }

    if (
      this.state.error.name &&
      this.state.error.contactNo &&
      this.state.error.email
    ) {
      temp.pass = true;
      this.setState({
        error: temp,
      });
    } else {
      temp.pass = false;
      this.setState({
        error: temp,
      });
    }

    document.getElementById("name").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("email").value = "";

    console.log(this.state);
  };

  render() {
    const promoStyle = {
      backgroundSize: "cover",
      backgroundImage: `url(${promoImage})`,
    };

    return (
      <div className="promoQoute">
        <div className="promo" style={promoStyle}>
          <div className>
            <h1>PLAN A TRIP</h1>
            <p>
              Make your vacation the most <br />
              memorable one
            </p>
          </div>
        </div>
        <div className="qoute" id="pq">
          <div className="qouteHeading">
            <h1>Travelling as a group? Get a Quote</h1>
          </div>
          <form>
            <label for="name">Your Name</label>
            <br />
            <input type="text" id="name" name="fname" />
            <p
              style={
                this.state.error.name
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              Name is required
            </p>

            <label for="contact">Contact No</label>
            <br />
            <input type="number" id="contact" name="contact" />
            <p
              style={
                this.state.error.contactNo
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              Contact No is required
            </p>

            <label for="email">Email</label>
            <br />
            <input type="email" id="email" name="email" />
            <br />
            <p
              style={
                this.state.error.email
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              Email is required
            </p>
            <p
              className="qouteSuccess"
              style={
                this.state.error.pass
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              We hear you! We will get back to you for planning your vacation.
            </p>
            <button
              className="qouteSubmit"
              type="submit"
              value="Submit"
              onClick={this.submitCheck}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
