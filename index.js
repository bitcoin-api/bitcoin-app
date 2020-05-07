import { createElement as e } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Main from './Main';


const styles = StyleSheet.create({
    outerContainer: {
        // width: '100%',
        // height: '100%',
        flex: 1,
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


//TODO: make style updater for background colour
export default () => {
  
    return e(
        View,
        {
            style: styles.outerContainer,
        },
        e( Main )
    );
};
