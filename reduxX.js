import ReduxX, {
 
    /*
        General Use Case:
            use the ReduxX VALUE key to set the initial state value
            for the specified key
    */
    // VALUE,
 
    /*
        Common/Simple Use Case:
            alternatively use the ReduxX special "v" function
            to specify the initial state value
            for simple ReduxX initial state object configurations
    */
    v,
 
} from 'react-state-management';
 
 
export const {
 
    setUpReduxX,
    setState,
    getState,
 
    /* Optional Exports: */
    // resetReduxX,
    // getGlobalUseState,
    // oldeFashionedStateManagement
 
} = ReduxX({
 
    initialState: {

        bitcoinApi: v( null ),

        mainStyleObject: v({

            mainStyle: 'dark',
            backgroundColor: '#000000',
            color: '#ffffff'
        }),

        auth: {
 
            tokenInfo: v( null ),
        },

        actionBox: {

            mode: v( null ),
        },

        viewAddressZone: {

            addressData: v( null ),
        }
    }
});