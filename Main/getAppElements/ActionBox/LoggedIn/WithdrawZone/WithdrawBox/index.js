import { useEffect, createElement as e } from 'react';
import {
    StyleSheet,
    // TouchableOpacity,
    View,
    Text,
    TextInput
} from 'react-native';
import { getState, setState } from '../../../../../../reduxX';
// import { fonts } from '../../../../../../constants';
import AmountInput from './AmountInput';
// import componentDidMount from './componentDidMount';


const getStyles = () => {

    const {

        backgroundColor,
        // color,
        // alternateBackgroundColor,
        // alternateColor,

    } = getState( 'mainStyleObject' );
    
    return StyleSheet.create({
        outerContainer: {
            // backgroundColor: 'indigo',
            width: '100%',

            backgroundColor,

            flex: 0.7,

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
    });
};


export default () => {

    const styles = getStyles();

    return e(
        View,
        {
            style: styles.outerContainer,
            // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            // onChangeText: text => {
                
            //     onChangeText(text)
            // },
            // value: value,
        },
        e( AmountInput )
    );
};
