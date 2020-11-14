import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '5rem'
    },

    editIcon: {
        marginRight: '1rem',

        '&:hover':{
            cursor: 'pointer'
        }
    },

    deleteIcon: {

        '&:hover':{
            cursor: 'pointer'
        }
    }

}))





export { useStyles }