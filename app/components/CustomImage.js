import React, { useState, useEffect } from "react";
import { Image } from "react-native";

export default function CustomImage({ width, height, uri }) {
  const [imageWidth, setImageWidth] = useState(1);
  const [imageHeight, setImageHeight] = useState(1);
  const [imageAspectRatio, setImageAspectRatio] = useState(1);

  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      setImageWidth(width);
      setImageHeight(height);
      setImageAspectRatio(width / height);
    });
  }, [uri]);

  if (width) {
    return (
      <Image
        style={{
          width: width,
          height: width / imageAspectRatio,
        }}
        source={{ uri: uri }}
      />
    );
  } else if (height) {
    return (
      <Image
        style={{
          width: height * imageAspectRatio,
          height: height,
        }}
        source={{ uri: uri }}
      />
    );
  } else {
    return (
      <Image
        style={{
          width: imageWidth,
          height: imageHeight,
        }}
        source={{ uri: uri }}
      />
    );
  }
}
