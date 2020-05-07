import { createElement as e } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import { getState, setState } from '../../../../../reduxX';
import { actionBoxModes, fonts } from '../../../../../constants';


const getStyles = () => {

    const { 

        backgroundColor,
        color

    } = getState( 'mainStyleObject' );
    
    return StyleSheet.create({
        outerContainer: {
            backgroundColor,
            flex: 0.2,
            width: '100%',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        text: {

            width: '100%',
            textAlign: 'left',
            fontFamily: fonts.merriweather.regular,
            fontSize: 20,
            paddingLeft: 30,
            color,
        },
    });
};


export default () => {

    // const tokenInfo = getState( 'auth', 'tokenInfo' );
    const styles = getStyles();

    return e(
        // View,
        TouchableOpacity,
        {
            style: styles.outerContainer,
            onPress: () => {

                setState(

                    [ 'actionBox', 'mode' ],
                    actionBoxModes.withdraw
                );
            }
        },
        e(
            Text,
            {
                style: styles.text,
            },
            'Withdraw Bitcoin'
        )
    );
};
