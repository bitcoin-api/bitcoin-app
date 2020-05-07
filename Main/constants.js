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

// TODO: move to root constants file
export const mainStyles = {

    dark: 'dark',
    light: 'light',
};


export const mainStyleToMainStyleObject = {

    [mainStyles.dark]: {

        mainStyle: mainStyles.dark,
        color: '#ffffff',
        backgroundColor: '#000000',
    },
    [mainStyles.light]: {

        mainStyle: mainStyles.light,
        color: '#000000',
        backgroundColor: '#ffffff',
    }
};