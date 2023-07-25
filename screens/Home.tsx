import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Avatar from "../components/Avatar";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { styled } from "styled-components/native";

SplashScreen.preventAutoHideAsync();

const data = [
  { id: 1, value: "Indie" },
  { id: 2, value: "Chill" },
  { id: 3, value: "Pop" },
  { id: 4, value: "Party" },
];

const Category = styled.View`
  width: 40%;
  margin: 15px;
  &:first-child {
    background-color: red;
  }
  &:nth-child(2) {
    background-color: blue;
  }
`;

export default function Home() {
  const [fontsLoaded, err] = useFonts({
    "CG-Bold": require("../assets/fonts/ClashGrotesk-Bold.otf"),
    "CG-Medium": require("../assets/fonts/ClashGrotesk-Medium.otf"),
    "CG-Semibold": require("../assets/fonts/ClashGrotesk-Semibold.otf"),
  });

  if (err) {
    console.log(err);
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <ScrollView>
        <View style={styles.profile}>
          <Text style={{ fontFamily: "CG-Bold", fontSize: 30 }}>
            Hi Austin!
          </Text>
          <Avatar />
        </View>
        <View style={styles.categories}>
          <View
            style={{
              alignItems: "flex-start",
              width: "100%",
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "CG-Semibold",
                fontSize: 20,
                textAlign: "left",
              }}
            >
              Categories
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ ...styles.category, backgroundColor: "#50bbcc" }}>
              <Text
                style={{
                  fontFamily: "CG-Medium",
                  fontSize: 15,
                  color: "white",
                }}
              >
                Indie
              </Text>
            </View>
            <View style={{ ...styles.category, backgroundColor: "#8650cc" }}>
              <Text
                style={{
                  fontFamily: "CG-Medium",
                  fontSize: 15,
                  color: "white",
                }}
              >
                Chill
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ ...styles.category, backgroundColor: "#b8214e" }}>
              <Text
                style={{
                  fontFamily: "CG-Medium",
                  fontSize: 15,
                  color: "white",
                }}
              >
                Pop
              </Text>
            </View>
            <View style={{ ...styles.category, backgroundColor: "#2c801d" }}>
              <Text
                style={{
                  fontFamily: "CG-Medium",
                  fontSize: 15,
                  color: "white",
                }}
              >
                Party
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categories: {
    marginVertical: 20,
    width: "100%",
    alignItems: "center",
    textAlign: "left",
  },
  category: {
    width: "45%",
    margin: 5,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});
