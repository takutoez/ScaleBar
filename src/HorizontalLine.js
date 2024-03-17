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

export default class HorizontalLine extends Component<Props> {
  render() {
    return (
      <View
        style={{
          bottom: this.props.padding_bottom,
          left: this.props.padding_left,
          width: this.props.length,
          position: "absolute",
          height: this.props.borderWidth,
          backgroundColor: LINE_COLOR
        }}
      />
    );
  }
}
