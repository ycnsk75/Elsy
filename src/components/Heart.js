import React from "react";
import Icon from "./core/Icon";
import Slider from "./core/Slider";

class Heart extends React.Component {
  render() {
    return (
      <div className="box col-6 col-md-3">
        <Icon name="favorite" color="red" size={100} />
        <p>{this.props.heart} BPM</p>
        <Slider
          value={this.props.heart}
          min={80}
          max={180}
          onChange={(val) => this.props.onChangeFn(val)}
        />
      </div>
    );
  }
}

export default Heart;
