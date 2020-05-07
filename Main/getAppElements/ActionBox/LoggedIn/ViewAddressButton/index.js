import { createElement as e } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import { getState, setState } from '../../../../../reduxX';
import { actionBoxModes, colours, fonts } from '../../../../constants';


const getStyles = () => {

    const mainStyleObject = getState( 'mainStyleObject' );
    
    return StyleSheet.create({
        outerContainer: {
            backgroundColor: mainStyleObject.backgroundColor,
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
            color: mainStyleObject.color,
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
