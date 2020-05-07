// TODO: add all constants and utils to root

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