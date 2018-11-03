import React, { Component } from 'react';
import Expo from 'expo';
import { View, Text } from 'react-native';
import styles from './styles';

class App extends Component {
  componentDidMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewStyleOne}>
          <Text style={styles.textStyle}> 1 </Text>
        </View>
        <View style={styles.viewStyleTwo}>
          <Text style={styles.textStyle}> 2 </Text>
        </View>
        <View style={styles.viewStyleThree}>
          <Text style={styles.textStyle}> 3 </Text>
        </View>
      </View>
    );
  }
}
export default App;
