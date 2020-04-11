import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default function LinksScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <OptionButton
        icon="md-compass"
        label="CheckPoint Local Websites and Emergency Contact Numbers"
        onPress={() =>
          WebBrowser.openBrowserAsync("https://checkpointorg.com/global/")
        }
      />

      <OptionButton
        icon="md-compass"
        label="AIHW Mental Health Welfare Services"
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://www.aihw.gov.au/reports-data/health-welfare-services/mental-health-services/overview "
          )
        }
      />

      <OptionButton
        icon="md-compass"
        label="Health Direct symptom checker tool"
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://www.healthdirect.gov.au/symptom-checker/tool"
          )
        }
      />

      <OptionButton
        icon="md-compass"
        label="Adopt a Healthcare Worker Western Australia"
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://www.facebook.com/groups/666739964088379/"
          )
        }
      />

      <OptionButton
        icon="ios-chatboxes"
        label="BetterHelp Professional Counseling"
        onPress={() =>
          WebBrowser.openBrowserAsync("https://www.betterhelp.com")
        }
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Beyond Blue Mental Wellbeing Support Service"
        onPress={() =>
          WebBrowser.openBrowserAsync("https://coronavirus.beyondblue.org.au/")
        }
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Sane Australia Counselling Help Center"
        onPress={() => WebBrowser.openBrowserAsync("https://www.sane.org/")}
      />

      <OptionButton
        icon="md-school"
        label="WHO Mental Health documentation"
        onPress={() =>
          WebBrowser.openBrowserAsync("https://www.who.int/mental_health/en/")
        }
      />

      <OptionButton
        icon="md-school"
        label="WHO Mental Health facts"
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://www.who.int/news-room/facts-in-pictures/detail/mental-health"
          )
        }
      />

      <OptionButton
        icon="md-school"
        label="WHO advice for people about coronavirus"
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
          )
        }
      />

      <OptionButton
        icon="md-school"
        label="Everymind Mental Health documentation"
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://everymind.org.au/mental-health/understanding-mental-health/understanding-mental-health-and-wellbeing"
          )
        }
      />

      <OptionButton
        icon="md-school"
        label="Forbes Article- How to Protect Your Mental Health During the Coronavirus Pandemic"
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://www.forbes.com/sites/nomanazish/2020/03/24/how-to-protect-your-mental-health-during-the-coronavirus-pandemic-according-to-psychologists/#335e65b41cb0"
          )
        }
      />

      <OptionButton
        icon="md-school"
        label="Department of Health coronavirus information"
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/what-you-need-to-know-about-coronavirus-covid-19"
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
