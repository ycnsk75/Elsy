import React from "react";
import Icon from "./core/Icon";
import Slider from "./core/Slider";

class Person extends React.Component {
  render() {
    return (
      <div className="box col-6 col-md-3">
        <Icon name="directions_walk" color="black" size={100} />
        <p>{this.props.steps} steps</p>
        <Slider
          value={this.props.steps}
          min={0}
          max={50000}
          onChange={(val) => this.props.onChangeFn(val)}
        />
      </div>
    );
  }
}

export default Person;
