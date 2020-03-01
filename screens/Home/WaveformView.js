import React from 'react';
import { View, StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import WaveForm from 'react-native-audiowaveform';

class WaveformView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <ScrollView horizontal={true} > */}
                {/* <WaveForm
                    source={require('../../assets/audio/mp3_test.mp3')}
                    waveFormStyle={{ waveColor: 'red', scrubColor: 'white' }}>
                </WaveForm> */}
                {/* </ScrollView> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFAAAA'
    },
    waveform: {
        backgroundColor: 'orange'
    }
});

export default WaveformView;