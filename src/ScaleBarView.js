// @flow

import React, { Component } from "react";
import { View } from "react-native";

import { BORDER_COLOR, LIMIT_SIZE, LINE_COLOR } from "./constants";

import VerticalLine from "./VerticalLine";
import HorizontalLine from "./HorizontalLine";
import ScaleText from "./ScaleText";

type Props = {
  padding_left: number,
  padding_bottom: number,
  lengthMeter: number,
  lengthFeet: number,
  scaleTextMeters: string,
  scaleTextFeet: string,
  borderWidth: number,
  fontSize: number,
};

export default class ScaleBarView extends Component<Props> {
  render() {
    return (
      <View style={{ position: "absolute", bottom: 0, left: 0 }}>
        <ScaleText
          padding_bottom={this.props.padding_bottom + 3}
          padding_left={this.props.padding_left}
          text={this.props.scaleTextMeters}
          fontSize={this.props.fontSize}
        />

        <ScaleText
          padding_bottom={this.props.padding_bottom - this.props.fontSize - 2}
          padding_left={this.props.padding_left}
          text={this.props.scaleTextFeet}
          fontSize={this.props.fontSize}
        />

        <View
          style={{
            bottom: this.props.padding_bottom,
            left: this.props.padding_left,
            height: LIMIT_SIZE,
            position: "absolute",
            width: this.props.borderWidth + 1,
            backgroundColor: LINE_COLOR,
            borderTopWidth: 0.5,
            borderStartWidth: 0.5,
            borderEndWidth: 0.5,
            borderColor: BORDER_COLOR,
          }}
        />
        <View
          style={{
            bottom: this.props.padding_bottom,
            left: this.props.padding_left + this.props.lengthMeter,
            height: LIMIT_SIZE,
            position: "absolute",
            width: this.props.borderWidth + 1,
            backgroundColor: LINE_COLOR,
            borderWidth: 0.5,
            borderColor: BORDER_COLOR,
          }}
        />

        <HorizontalLine
          padding_bottom={this.props.padding_bottom}
          padding_left={this.props.padding_left + 2.25}
          length={this.props.lengthMeter - 1.5}
          borderWidth={this.props.borderWidth}
        />

        <View
          style={{
            bottom: this.props.padding_bottom - LIMIT_SIZE,
            left: this.props.padding_left,
            height: LIMIT_SIZE,
            position: "absolute",
            width: this.props.borderWidth + 1,
            backgroundColor: LINE_COLOR,
            borderStartWidth: 0.5,
            borderEndWidth: 0.5,
            borderBottomWidth: 0.5,
            borderColor: BORDER_COLOR,
          }}
        />

        <View
          style={{
            bottom: this.props.padding_bottom - LIMIT_SIZE + 1,
            left: this.props.padding_left + this.props.lengthFeet,
            height: LIMIT_SIZE,
            position: "absolute",
            width: this.props.borderWidth + 1,
            backgroundColor: LINE_COLOR,
            borderStartWidth: 0.5,
            borderEndWidth: 0.5,
            borderBottomWidth: 0.5,
            borderColor: BORDER_COLOR,
          }}
        />
      </View>
    );
  }
}
