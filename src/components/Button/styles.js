import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        letterSpacing: '0.09em',
    },
    buttonProgress: {
        // color: props => {const color = colorPicker(props.color, theme); return color.mainColor},
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

export { useStyles }