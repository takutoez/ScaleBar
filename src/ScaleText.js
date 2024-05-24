// @flow

import React, { Component } from "react";
import { View } from "react-native";
import { Canvas, ImageSVG, Skia } from '@shopify/react-native-skia';

type Props = {
  text: string,
  padding_bottom: number,
  padding_left: number,
  fontSize: number,
};

export default class ScaleText extends Component<Props> {
  render() {
    const svg = Skia.SVG.MakeFromString(
      `<svg xmlns="http://www.w3.org/2000/svg" width="0.6" height="${this.props.fontSize + 2}" viewBox="0 0 0.6 ${this.props.fontSize + 2}">
          <text text-anchor="left" x="0" y="0" font-weight="500" stroke="#FFF" stroke-width="1.5" paint-order="stroke" font-family="ヒラギノ角ゴシック" font-size="${this.props.fontSize}">
            ${this.props.text}
          </text>
          <text text-anchor="left" x="0" y="0" font-weight="500" fill="#000" font-family="ヒラギノ角ゴシック" font-size="${this.props.fontSize}">
            ${this.props.text}
          </text>
      </svg>`,
    );

    return (
      <View
        style={{
          position: "absolute",
          bottom: this.props.padding_bottom,
          left: this.props.padding_left + 3,
        }}
      >
        <Canvas width={0.6} height={this.props.fontSize + 2}>
          <ImageSVG svg={svg} width={0.6} height={this.props.fontSize + 2} />
        </Canvas>
      </View>
    );
  }
}
