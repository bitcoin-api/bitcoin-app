import BitcoinApi from 'bitcoin-api';


export default async ({

    token

}) => {

    if( !token ) {

        return {
            
            bitcoinApi: null,
            tokenInfo: null,
        };
    }

    try {

        const bitcoinApi = new BitcoinApi({
        
            testnetToken: token,
        });
        
        const tokenInfo = await bitcoinApi.getTokenInfo();

        const tokenInfoIsInvalid = !(
          
            !!tokenInfo &&
            (typeof tokenInfo.isActivated === 'boolean') &&
            (typeof tokenInfo.balanceData.amount === 'number')
        );
     
        if( tokenInfoIsInvalid ) {
    
            throw new Error(
                `invalid tokenInfo: ${ JSON.stringify( tokenInfo ) }`
            );
        }

        return {
            
            bitcoinApi,
            tokenInfo,
        };
    }
    catch( err ) {

        console.log( 'error in initializeBitcoinApi:', err );

        return {
            
            bitcoinApi: null,
            tokenInfo: null,
        };
    }
};