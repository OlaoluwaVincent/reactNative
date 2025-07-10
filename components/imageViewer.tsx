import React from "react";
import { Image, StyleSheet } from "react-native";

const placeholderImage = require("@/assets/images/background-image.png");

type Props = {
  selectedImage?: string | null;
};

export default function ImageViewer({ selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImage;

  return <Image source={imageSource} style={styles.image} />;
}
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
