import { useEffect, createElement as e } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TextInput
} from 'react-native';
import { getState, setState } from '../../../../../../../reduxX';
import { fonts, colours } from '../../../../../../../constants';
import withdrawBitcoin from './withdrawBitcoin';
// import componentDidMount from './componentDidMount';

const getStyles = () => {

    const {

        // backgroundColor,
        // color,
        alternateBackgroundColor,
        alternateColor,

    } = getState( 'mainStyleObject' );
    
    return StyleSheet.create({
        outerContainer: {
            // backgroundColor: 'indigo',
            width: '100%',
            backgroundColor: alternateBackgroundColor,
            
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },

        theText: {
    
            color: alternateColor,
            fontSize: 20,
            padding: 15,
            fontFamily: fonts.merriweather.regular,
        },
    });
};


export default () => {

    const styles = getStyles();

    return e(
        TouchableOpacity,
        {
            style: styles.outerContainer,
            onPress: withdrawBitcoin,
        },
        e(
            Text,
            {
                style: styles.theText,
            },
            'Withdraw Bitcoin'
        )
    );
};
