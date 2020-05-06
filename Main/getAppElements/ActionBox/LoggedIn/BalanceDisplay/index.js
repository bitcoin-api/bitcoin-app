import { createElement as e } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { getState } from '../../../../reduxX';
import { colours, fonts } from '../../../../constants';

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: colours.black,
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
        fontSize: 20,
        paddingLeft: 30,
        color: colours.white,
        fontFamily: fonts.merriweather.regular,
    },
});


export default () => {

    const tokenInfo = getState( 'auth', 'tokenInfo' );

    return e(
        View,
        {
            style: styles.outerContainer,
        },
        e(
            Text,
            {
                style: styles.text,
            },
            `Balance: ${ tokenInfo.balanceData.amount } BTC`
        )//,
        // e(
        //     Text,
        //     {
        //         style: styles.text,
        //     },
        //     `Balance Status: ${ tokenInfo.balanceData.status }`
        // )
    );
};
