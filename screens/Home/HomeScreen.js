import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonView from './ButtonView';
import WaveformView from './WaveformView';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.titleView}>
            <Text>(title View)</Text>
            <Text style={{ fontSize: 20 }}>Lesson7 LC Part4</Text>
          </View>
          <View style={styles.lyricsView}>
            <Text>lyricsView</Text>
          </View>
        </View>
        <View style={styles.waveformview}>
          <WaveformView />
        </View>
        <View style={styles.buttonView}>
          <ButtonView />
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topView: {
    flex: 4
  },
  waveformview: {
    flex: 1
  },
  buttonView: {
    flex: 3
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffbbff'
  },
  lyricsView: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffbb'
  }
});

export default HomeScreen;