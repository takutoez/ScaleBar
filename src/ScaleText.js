// @flow

import React, { Component } from "react";
import { View } from "react-native";
import { Svg, Text } from "react-native-svg";

type Props = {
  text: string,
  padding_bottom: number,
  padding_left: number,
  fontSize: number,
};

export default class ScaleText extends Component<Props> {
  render() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: this.props.padding_bottom,
          left: this.props.padding_left + 3,
        }}
      >
        <Svg height={this.props.fontSize + 2} width="200">
          <Text
            fill="none"
            stroke="white"
            strokeWidth={1.5}
            fontSize={this.props.fontSize}
            x="0"
            y={this.props.fontSize}
            textAnchor="left"
          >
            {this.props.text}
          </Text>
          <Text
            fill="black"
            fontSize={this.props.fontSize}
            x="0"
            y={this.props.fontSize}
            textAnchor="left"
          >
            {this.props.text}
          </Text>
        </Svg>
      </View>
    );
  }
}
