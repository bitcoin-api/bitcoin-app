import { createElement as e } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Main from './Main';


const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: 'black',
        // width: '100%',
        // height: '100%',
        flex: 1,
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default () => {
  
    return e(
        View,
        {
            style: styles.outerContainer,
        },
        e( Main )
    );
};
