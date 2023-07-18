import { Image, View } from "react-native";

type AvatarSize = "small" | "medium" | "large";

export default function Avatar({ size = "medium" }: { size?: AvatarSize }) {
  return (
    <View style={{}}>
      <Image
        source={{
          uri: "https://media.licdn.com/dms/image/C4E03AQFUyZYoqxSGpw/profile-displayphoto-shrink_400_400/0/1636474047215?e=1695254400&v=beta&t=CkvpGDWkRPQL-RGAUqGtTFVpC_37jBglU9uxQOnsCPw",
        }}
        style={{ width: 50, height: 50, borderRadius: 10 }}
      />
    </View>
  );
}
