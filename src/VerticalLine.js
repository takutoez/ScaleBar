// @flow

import React, { Component } from "react";
import { View } from "react-native";

import { LINE_COLOR } from "./constants";

type Props = {
  padding_left: number,
  padding_bottom: number,
  length: number,
  borderWidth: number
};

export default class VerticalLine extends Component<Props> {
  render() {
    return (
      <View
        style={{
          bottom: this.props.padding_bottom,
          left: this.props.padding_left,
          height: this.props.length,
          position: "absolute",
          width: this.props.borderWidth,
          backgroundColor: LINE_COLOR
        }}
      />
    );
  }
}
