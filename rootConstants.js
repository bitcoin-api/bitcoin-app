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