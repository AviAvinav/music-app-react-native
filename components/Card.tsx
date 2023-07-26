import { Image, Text, TouchableOpacity, View } from "react-native";
import { borderRadius } from "../constants";

type CardProps = {
  size: "small" | "large";
  img: string;
  title: string;
  subtitle: string;
};

export default function Card({ size, img, title, subtitle }: CardProps) {
  const { width, height } = {
    width: size === "large" ? 150 : 100,
    height: size === "large" ? 150 : 100,
  };
  return (
    <TouchableOpacity style={{ marginRight: 10 }}>
      <View style={{ width, height, marginBottom: 5 }}>
        <Image source={{ uri: img }} style={{ width, height, borderRadius }} />
      </View>
      <View>
        <Text
          style={{
            fontFamily: "CG-Semibold",
            fontSize: 14,
            marginBottom: 2,
            width,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "CG-Semibold",
            fontSize: 10,
            color: "#777",
            width,
          }}
        >
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
