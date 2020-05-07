import { useEffect, createElement as e } from 'react';
import {
    StyleSheet,
    // TouchableOpacity,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { getState, setState } from '../../../../reduxX';
import { fonts, colours } from '../../../../constants';
import componentDidMount from './componentDidMount';


const styles = StyleSheet.create({
    outerContainer: {
        // backgroundColor: 'indigo',
        height: '100%',
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    qrCode: {

        width: '60%',
        height: '60%',
        backgroundColor: colours.white,
    },

    backButton: {

        width: '100%',
        backgroundColor: colours.white,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    backButtonText: {

        fontSize: 20,
        width: '100%',
        paddingTop: 13,
        paddingBottom: 13,
        textAlign: 'center',
        color: colours.black,
        fontFamily: fonts.merriweather.regular,
    },
});

const getQrCodeUrl = ({ address }) => (

    `https://api-bitcoin.s3.amazonaws.com/qr_codes/${ address }.jpg`
);


export default () => {

    useEffect( componentDidMount, [] );

    const addressData = getState( 'viewAddressZone', 'addressData' );
        
    return e(
        View,
        {
            style: styles.outerContainer,
        },
        !!addressData ? e(

            Image,
            {
                width: styles.qrCode.width,
                height: styles.qrCode.height,
                source: {
                    
                    uri: getQrCodeUrl({

                        address: addressData.address,
                    }),
                },
                // src: `https://api-abi`
                style: styles.qrCode,
            }

        ) : e(

            View,
            {
                style: styles.qrCode,
            }
        ),
        e(
            TouchableOpacity,
            {
                style: styles.backButton,
                onPress: () => {

                    setState( [ 'actionBox', 'mode' ], null );
                }
            },
            e(
                Text,
                {
                    style: styles.backButtonText,
                },
                'BACK'
            )
        )
    );
};
