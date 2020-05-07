export const actionBoxModes = {

    viewAddress: 'viewAddress',
};

export const fonts = {
    merriweather: {
        regular: 'Merriweather-Regular',
        bold: 'Merriweather-Bold',
    }
};

export const colours = {

    apiRoyalBlue: '#019BE5',
    black: '#000000',
    white: '#ffffff',

    bitcoinBlue: '#61B3BE',
    bitcoinOrgange: '#FE8834',
    bitcoinGrey: '#656776',
    bitcoinDarkGrey: '#1A2836',
};

export const mainStyles = {

    dark: 'dark',
    light: 'light',
};

const mainStyleToMainStyleObject = {

    [mainStyles.dark]: {

        color: '#ffffff',
        backgroundColor: '#000000',
    },
    [mainStyles.light]: {

        color: '#000000',
        backgroundColor: '#ffffff',
    }
};

for( const mainStyle in mainStyleToMainStyleObject ) {

    const mainStyleObject = mainStyleToMainStyleObject[ mainStyle ];

    mainStyleObject.mainStyle = mainStyle;
}


export { mainStyleToMainStyleObject };