import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function RelaxScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <OptionButton
        icon="md-compass"
        label="Free Online Games"
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://www.freeonlinegames.com/embed/149495"
          )
        }
      />

      <OptionButton
        icon="md-compass"
        label="Drawize - Free Online Drawing Game"
        onPress={() => WebBrowser.openBrowserAsync("https://www.drawize.com/")}
      />

      <OptionButton
        icon="md-compass"
        label="DoodleAddicts - Drawing Challenges"
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://www.doodleaddicts.com/drawing-challenges/"
          )
        }
      />

      <OptionButton
        icon="md-compass"
        label="InkTober - 31 Day Drawing Challenge"
        onPress={() => WebBrowser.openBrowserAsync("https://inktober.com/")}
      />

      <OptionButton
        icon="md-school"
        label="Some Daily Challenges for You"
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://we-got-this-web.herokuapp.com/challenges"
          )
        }
        isLastOption
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton
      style={[styles.option, isLastOption && styles.lastOption]}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1,
  },
});
