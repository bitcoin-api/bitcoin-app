import { createElement as e } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import { setState } from '../../../../reduxX';
import { actionBoxModes, colours, fonts } from '../../../../constants';


const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: colours.white,
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
        color: colours.black,
    },
});


export default () => {

    // const tokenInfo = getState( 'auth', 'tokenInfo' );

    return e(
        // View,
        TouchableOpacity,
        {
            style: styles.outerContainer,
            onPress: () => {

                setState(

                    [ 'actionBox', 'mode' ],
                    actionBoxModes.viewAddress
                );
            }
        },
        e(
            Text,
            {
                style: styles.text,
            },
            'View Deposit Address'
        )
    );
};
