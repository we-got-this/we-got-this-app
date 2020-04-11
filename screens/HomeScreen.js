import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';
import ChatBot from 'react-native-chatbot-expo';

const steps = [
  {
    id: '0',
    message: 'G\'day',
    trigger: '1',
  },
  {
    id: '1',
    message: 'How many friends have you spoken with recently?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'What was one of their names?',
    trigger: '4',
  },
  {
    id: '4',
    user: true,
    trigger: '5',
  },
  {
    id: '5',
    message: 'How did you feel after talking to them?',
    trigger: '6',
  },
  {
    id: '6',
    user: true,
    trigger: '7',
  },
  {
    id: '7',
    message: 'How do you think they felt?',
    trigger: '8',
  },
  {
      id: '8',
      user: true,
      trigger: '9',
  },
  
  {
    id: '9',
    message: 'What is the name of another person you spoke to?',
    trigger: '10',
  },
  {
    id: '10',
    user: true,
    trigger: '11',
  },
  {
    id: '11',
    message: 'How did you feel after talking to them?',
    trigger: '12',
  },
  {
    id: '12',
    user: true,
    trigger: '13',
  },
  {
    id: '13',
    message: 'How do you think they felt?',
    trigger: '14',
  },
  {
    id: '14',
    user: true,
    trigger: '15',
  },
  {
    id: '15',
    message: "Would you like to chat with vulnerable people who've registered themselves as feeling isolated and wanting someone to talk to?",
    trigger: '16',
  },
  {
    id: '16',
    options: [
      { value: 1, label: 'Yes', trigger: '17' },
      { value: 2, label: 'No', trigger: '18' },
    ],
  },
  {
    id: '17',
    message: "Is there a particular group you'd like to help out?",
    trigger: '19',
  },
  {
    id: '19',
    options: [
      { value: 1, label: 'aged care residents', trigger: '20' },
      { value: 2, label: 'people from overseas', trigger: '20' },
      { value: 3, label: 'people living alone', trigger: '20' },
      { value: 3, label: 'anyone who registered', trigger: '20' },
    ],
  },
  {
    id: '20',
    message: 'Okay, thanks. You will receive a link to connect and chat and brighten someone\'s day.',
    trigger: '1',
  },
  {
    id: '18',
    message: 'No worries, keep connecting with friends and family.',
    trigger: '1',
  },
  
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <ChatBot steps={steps} keyboardVerticalOffset={85}
      botBubbleColor= {'#2D6DAB'}
      optionBubbleColor = {'#D4C6E7'}
      optionFontColor = {'#2D6DAB'}
      userBubbleColor = {'#7CC9D9'}
      userFontColor = {'#2D6DAB'}/>
        
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
