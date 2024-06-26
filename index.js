// @flow

import React, { Component } from "react";

import ScaleBarView from "./src/ScaleBarView";
import { getScaleBarInfoFromZoomLevel } from "./src/ScaleBarModel";

type Props = {
  zoom: number,
  latitude: number,
  bottom: number,
  left: number,
  borderWidth: number,
  fontSize: number,
};

class ScaleBar extends Component<Props> {
  static defaultProps = {
    latitude: 48.81879736812265,
    bottom: 42,
    left: 10,
    borderWidth: 1,
    fontSize: 12,
  };

  render() {
    const {
      scaleBarSizeInMeters,
      scaleBarTextInMeters,
      scaleBarSizeInFeet,
      scaleBarTextInFeet,
    } = getScaleBarInfoFromZoomLevel(this.props.zoom, this.props.latitude);

    return (
      <ScaleBarView
        padding_left={this.props.left}
        padding_bottom={this.props.bottom}
        lengthMeter={scaleBarSizeInMeters}
        lengthFeet={scaleBarSizeInFeet}
        scaleTextMeters={scaleBarTextInMeters}
        scaleTextFeet={scaleBarTextInFeet}
        borderWidth={this.props.borderWidth}
        fontSize={this.props.fontSize}
      />
    );
  }
}

export default ScaleBar;
