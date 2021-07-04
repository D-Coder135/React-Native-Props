import React from 'react';
import {View, Text, Image} from 'react-native';

// This component is made using class. i.e Class Component.
export default class SecondComp extends React.Component {
    render () {
        return (
            <View style={styles.container}>
              <Text style={styles.paragraph}>
                {props.name}
              </Text>
              {/* <Image style={styles.logo} source={require('../assets/favicon.png')} /> */}
              <Image style = {styles.logo} source = {{uri: props.pic}}/>
            </View>
          );
    }
}