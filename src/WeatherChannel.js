import { Component } from "react";
import "./styles/WeatherChannel.css";
import iconPartySunny from "./assets/icon-party-sunny.svg";

export default class WeatherChannel extends Component {
  state = {
    loading: true,
    temperature: "Celcius",
  };

  async componentDidMount() {
    const url = "https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576";
    const response = await fetch(url);
    const responseData = await response.json();
    // console.log(responseData.result);
    this.setState({
      data: responseData.result,
      loading: !this.state.loading,
    });
  }

  changeTemperature = () => {
    if (this.state.temperature === "Celcius") {
      this.setState({
        temperature: "Fahrenheit",
      });
    } else if (this.state.temperature === "Fahrenheit") {
      this.setState({
        temperature: "Celcius",
      });
    }
  };

  render() {
    if (!this.state.loading) {
      var WeatherChannelComponent = this.state.data.map(
        (datum) => (
          <div
            className="weatherChannelResult"
            key={datum.city}
            id={datum.city}
          >
            <p>{datum.city}</p>
            <img src={iconPartySunny} alt="Partly Sunny"></img>
            <h1 id="degreeValue">
              {this.state.temperature === "Celcius"
                ? datum.temp_Celsius
                : datum.temp_Fahr}
              &deg;
            </h1>
          </div>
        )
        // console.log(datum)
      );
    } else {
      WeatherChannelComponent = "Loading..";
    }
    return (
      <div className="weatherChannel" id="wch">
        <div className="weatherChannelHeading">
          <h1>THE WEATHER CHANNEL</h1>
          <h1 className="button" onClick={this.changeTemperature}>
            {this.state.temperature}
          </h1>
        </div>
        <div className="weatherChannelResults">{WeatherChannelComponent}</div>
      </div>
    );
  }
}
