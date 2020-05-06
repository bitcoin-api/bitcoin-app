import { createElement as e } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { colours } from '../../constants';


const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: colours.apiRoyalBlue,
        width: '100%',

        flex: 0.1,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
});


export default () => {
  
    return e(
        View,
        {
            style: styles.outerContainer,
        }
    );
};
