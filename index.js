import { useState, createElement as e } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Main from './Main';
import { getState, setUpReduxX } from './reduxX';

const getStyles = ({
    backgroundColor,
}) => StyleSheet.create({
    outerContainer: {
        backgroundColor,
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

    setUpReduxX( useState );

    const mainStyleObject = getState( 'mainStyleObject' );

    return e(
        View,
        {
            style: getStyles({

                backgroundColor: mainStyleObject.backgroundColor

            }).outerContainer,
        },
        e( Main )
    );
};
