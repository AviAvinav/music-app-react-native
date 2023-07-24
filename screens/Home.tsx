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

SplashScreen.preventAutoHideAsync();

const data = [
  { id: 1, value: "Indie" },
  { id: 2, value: "Chill" },
  { id: 3, value: "Pop" },
  { id: 4, value: "Party" },
];

export default function Home() {
  const [fontsLoaded, err] = useFonts({
    "CG-Bold": require("../assets/fonts/ClashGrotesk-Bold.otf"),
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
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.category}>
              <Text>{item.value}</Text>
            </View>
          )}
          numColumns={2}
          style={styles.categories}
        ></FlatList>
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
    backgroundColor: "#fff",
  },
  category: {
    width: "40%",
    margin: 15,
  },
});
