import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

// This component is made using class. i.e Class Component.
// We use 'this' keyword along with the props in a Class Component.
export default class SecondComp extends React.Component {
    render () {
        return (
            <View style={styles.container}>
              <Text style={styles.paragraph}>
                {this.props.name}
              </Text>
              {/* <Image style={styles.logo} source={require('../assets/favicon.png')} /> */}
              <Image style = {styles.logo} source = {{uri: this.props.pic}}/>
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logo: {
      height: 128,
      width: 128,
    }
  });