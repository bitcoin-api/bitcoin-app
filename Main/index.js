import { createElement as e, useState } from 'react';
import {
    StyleSheet,
    View,
    // ScrollView
} from 'react-native';
import { setUpReduxX } from './reduxX';
import getAppElements from './getAppElements';

const styles = StyleSheet.create({
    outerContainer: {
        // backgroundColor: 'pink',
        width: '100%',
        // height: '100%',

        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});


export default () => {

    setUpReduxX( useState );

    return e(
        View,
        {
            style: styles.outerContainer,
        },
        ...getAppElements()
    );
};
