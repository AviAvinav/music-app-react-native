import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Avatar from "../components/Avatar";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <Text style={{ fontSize: 30, fontWeight: "900" }}>Hi Austin!</Text>
        <Avatar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
