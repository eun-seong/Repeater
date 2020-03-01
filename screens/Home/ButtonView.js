import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomeButton from './CustomButton';

class ButtonView extends React.Component {
    render() {
        const ubtSize = 40;
        const dbtSize = 70;
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <CustomeButton iconName='numeric-1-box-outline' size={ubtSize} />
                    <CustomeButton iconName='repeat' size={ubtSize} />
                    <CustomeButton iconName='repeat' size={ubtSize} />
                    <CustomeButton iconName='alpha-a-box' size={ubtSize} />
                </View>
                <View style={styles.button}>
                    <CustomeButton iconName='skip-previous-circle' size={dbtSize} />
                    <CustomeButton iconName='play-circle' size={dbtSize} />
                    <CustomeButton iconName='skip-next-circle' size={dbtSize} />
                </View>
                <View style={styles.button}>
                    <CustomeButton iconName='chevron-left-circle' size={dbtSize} />
                    <CustomeButton iconName='circle-outline' size={dbtSize} />
                    <CustomeButton iconName='chevron-right-circle' size={dbtSize} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 30
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 50
    }
});

export default ButtonView;