import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import FirstComp from './components/FirstComp';

import { Card } from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        React-Props
      </Text>
      <Card style = {{marginBottom: 20}}>
        <FirstComp name = 'Akanksha' pic = '../assets/female.png'/>
        </Card>
        <Card style = {{marginBottom: 20}}>
        <FirstComp name = 'Devansh' pic = '../assets/male.jpg'/>
        </Card>
        <Card style = {{marginBottom: 20}}>
        <FirstComp name = 'DeCoder' pic = '../assets/male.jpg'/>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
