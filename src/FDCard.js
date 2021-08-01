import { Component } from "react";
import "./styles/FDCard.css";

export default class FDCard extends Component {
  render() {
    const cardStyle = {
      backgroundSize: "cover",
      backgroundImage: `url(${this.props.imgUrl})`,
    };
    return (
      <div className="FDCard">
        <div className="FDCardImg" style={cardStyle}></div>
        <p>{this.props.city}</p>
      </div>
    );
  }
}
