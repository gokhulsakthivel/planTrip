import { Component } from "react";
import "./styles/FeaturedDestination.css";
import FDCard from "./FDCard";

export default class FeaturedDestination extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const url = "https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c";
    const response = await fetch(url);
    const responseData = await response.json();
    // console.log(responseData.result);
    this.setState({
      data: responseData.result,
      loading: !this.state.loading,
    });
  }

  render() {
    if (!this.state.loading) {
      var FDCards = this.state.data.map((datum) => (
        <div key={datum.city}>
          <FDCard city={datum.city} imgUrl={datum.imageUrl} />
        </div>
      ));
    } else {
      FDCards = "Loading...";
    }

    return (
      <div className="featuredDestination" id="fd">
        <div className="featuredDestinationHeading">
          <h1>Featured Destinations</h1>
        </div>
        <div className="FeaturedDestinationCards">{FDCards}</div>
      </div>
    );
  }
}
