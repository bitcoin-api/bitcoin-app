import { createElement as e } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { fonts } from '../constants';


const styles = StyleSheet.create({
    outerContainer: {
        // backgroundColor: 'pink',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 0.2,
    },

    titleText: {

        marginTop: 90,
        fontSize: 20,
        color: 'white',
        fontFamily: fonts.merriweather.bold,
    }
});


export default () => {
  
    return e(
        View,
        {
            style: styles.outerContainer,
        },
        e(
            Text,
            {
                style: styles.titleText
            },
            'Testnet App by Bitcoin-Api.io'    
        )
    );
};
