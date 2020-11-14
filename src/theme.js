import { createMuiTheme } from "@material-ui/core/styles";



const shuldrzGreen = {
    main: '#00C766',
    dark: '#0C9D56',
    contrastText: '#FFFFFF',
}
const shuldrzPurple = {
    light: '#9D8CD4',
    main: '#3F316B',
    dark: '#2C2348',
    contrastText: '#F5F6FA'
}
const shuldrzYellow = {
    main: '#F3B700',
    dark: '#D4A106',
    contrastText: '#F5F6FA'
}
const shuldrzRed = {
    main: '#FD4659',
    dark: '#D21F32',
    contrastText: '#F5F6FA'
}
const shuldrzWhite = {
    main: '#FFFFFF',
    contrastText: '#3F316B'
}
const shuldrzLight = {
    main: '#F5F6FA',
    contrastText: '#3F316B'
}
const shuldrzGrey = {
    main: '#838A97',
    contrastText: '#292F36'
}



// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: shuldrzGreen,
        secondary: shuldrzPurple,
        error: shuldrzRed,
        warning: shuldrzYellow,
        text: {
            primary: shuldrzPurple.main,
            secondary: shuldrzGrey.main
        },
        background: {
            paper: shuldrzWhite.main,
            default: shuldrzLight.main,
        },
        type: 'light',
    },
    shape: {
        borderRadius: 5
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1600
        }
    },
    typography: {
        fontFamily: 'Inter, Helvetica, sans-serif',
        h1: {
            fontFamily: 'Inter, Helvetica, sans-serif',
            fontWeight: 700,
            fontSize: '7.5rem'
        },
        h2: {
            fontFamily: 'Inter, Helvetica, sans-serif',
            fontWeight: 700,
            fontSize: '5rem'
        },
        h3: {
            fontFamily: 'Inter, Helvetica, sans-serif',
            fontWeight: 600,
            fontSize: '1.75rem',
            lineHeight: '2rem'
        },
        h4: {
            fontFamily: 'Inter, Helvetica, sans-serif',
            fontWeight: 500,
            fontSize: '1.875rem'
        },
        h5: {
            fontFamily: 'Inter,  Helvetica, sans-serif',
            fontWeight: 500,
            fontSize: '1.5rem'
        },
        subtitle1: {
            fontFamily: ' Inter, Helvetica, sans-serif',
            fontWeight: 600,
            fontSize: `1.14rem`,
            lineHeight: `1rem`
        },
        subtitle2: {
            fontFamily: ' Inter, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: `2rem`
        },
        body1: {
            fontFamily: ' Inter, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: `1rem`
        },
        body2: {
            fontFamily: ' Inter, Helvetica, sans-serif',
            fontWeight: 500,
            fontSize: `1rem`
        },
        caption: {
            fontFamily: ' Inter, Helvetica, sans-serif',
            fontWeight: 400,
            fontSize: `0.75rem`
        },
        button: {
            fontFamily: ' Inter, Helvetica, sans-serif',
            fontWeight: 500,
            fontSize: `1rem`
        }

    }
});

export default theme;
