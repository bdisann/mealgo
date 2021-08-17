import React from "react";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
} from "react-native";

const IS_ANDROID = Platform.OS === "android";

const ANDRIOD_STATUSBAR = StatusBar.currentHeight;

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView style={{ flex: 1, marginTop: ANDRIOD_STATUSBAR }}>
        <View style={{ flex: 1, backgroundColor: "green" }} />
        <View style={{ flex: 1, backgroundColor: "blue" }} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
