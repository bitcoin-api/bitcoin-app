import { createElement as e } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import BalanceDisplay from './BalanceDisplay';
import ViewAddressButton from './ViewAddressButton';
import ViewAddressZone from './ViewAddressZone';
import { getState } from '../../../../reduxX';
import { actionBoxModes, colours } from '../../../constants';


const styles = StyleSheet.create({
    outerContainer: {
        // backgroundColor: colours.bitcoinBlue,
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});


export default () => {

    const actionBoxMode = getState( 'actionBox', 'mode' );

    const components = [];

    if( actionBoxMode === actionBoxModes.viewAddress ) {

        components.push( 
            
            e( ViewAddressZone ),
        );
    }
    else {

        components.push( 
            
            e( BalanceDisplay ),
            e( ViewAddressButton )
        );
    }

    return e(
        View,
        {
            style: styles.outerContainer,
        },
        ...components
    );
};
