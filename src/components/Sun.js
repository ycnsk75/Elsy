import React from "react";
import Icon from "./core/Icon";
import Slider from "./core/Slider";

class Sun extends React.Component {
  render() {
    return (
      <div className="box col-6 col-md-3">
        <Icon name="wb_sunny" color="yellow" size={100} />
        <p>{this.props.temperature} °C</p>
        <Slider
          value={this.props.temperature}
          min={-20}
          max={40}
          onChange={(val) => this.props.onChangeFn(val)}
        />
      </div>
    );
  }
}

export default Sun;
