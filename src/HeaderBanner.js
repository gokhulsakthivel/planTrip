import { Component } from "react";
import "./styles/HeaderBanner.css";
import "./styles/Style.css";

export default class HeaderBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countDownExpied: false,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.countDown();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  countDown() {
    var now = new Date().getTime();
    var timeDifference = new Date("Aug 8, 2021 18:00:00") - now;

    var d = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var h = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var m = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (timeDifference < 0) {
      document.getElementById("cd").innerHTML = "Offer Expired";
      clearInterval(this.timerID);
      this.setState({
        countDownExpied: true,
      });
    } else {
      this.setState({
        days: d,
        hours: h,
        minutes: m,
        seconds: s,
      });
    }
  }

  render() {
    var counter = () => {
      if (this.state.countDownExpied) {
        return "Offers ended, Please check regularly for upcoming offers";
      } else {
        return (
          "Offers ends in " +
          this.state.days +
          "d " +
          this.state.hours +
          "h " +
          this.state.minutes +
          "m " +
          this.state.seconds +
          "s"
        );
      }
      // Offer End in {this.state.days}d {this.state.hours}h {this.state.minutes}m {this.state.seconds}s
    };

    return (
      <div className="headerBanner">
        <p>
          Book now to get exciting travel deals. Upto 40% off on credit card
          payments
        </p>
        <p className="countDown" id="cd">
          {counter()}
        </p>
      </div>
    );
  }
}
