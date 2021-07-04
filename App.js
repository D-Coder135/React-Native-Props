import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import FirstComp from './components/FirstComp';
import SecondComp from './components/SecondComp';

import { Card } from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        React-Props
      </Text>
      <Card style = {{marginBottom: 20}}>
        <FirstComp name = 'Using First Component(Functional)' pic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbePIySXJg48soHAwNeEnSZBonIBs2Z10RJkOmGqqVWLzpPPY8yjwB7XM6r0xYpa1RgQ&usqp=CAU'/>
        </Card>
        <Card style = {{marginBottom: 20}}>
        <SecondComp name = 'Devansh' pic = 'https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg'/>
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
