import React from 'react'
import { useStyles } from './styles'
import { Box, Typography, TextField } from '@material-ui/core'
import Button from '../../Button'
import CloseIcon from '@material-ui/icons/Close';
import { Formik, Form } from 'formik';
import api from '../../../services/Api'
import {ContactsContext} from '../../../context/ContactsContext'
import * as Yup from 'yup';

const NewContact = ({onClose}) => {
    const classes = useStyles()
    const [isLoading, setLoading] = React.useState(false)
    const [data, setData] = React.useContext(ContactsContext);

    const onSubmit = async (values) => {
        setLoading(true)
        api.post(`/users`, values)
        .then(res => {            
            res.status === 201 ? 
                updateData(res.data)
                
            :
            setLoading(false)
        })    
    }

    
    const updateData = (val) => {
        
        // let updatedData = {...selectedData.contact, ...val}
        // console.log('SELECTED DATA', selectedData.id)
        let newData = [...data]
        newData.unshift(val)
        setData(newData)


        setLoading(false)
        console.log('DATA', data)
        onClose()
    }

    const NewcontactSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        first_name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        last_name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    })

    return (
        <Box>
            <div className={classes.formHeader}>
                <Typography variant="subtitle1">Create Contact</Typography>
                <CloseIcon className={classes.icon} onClick={onClose} />
            </div>

            <Formik
                    initialValues={{
                        email: ``,
                        first_name: ``,
                        last_name: ``
                    }}
                    onSubmit={onSubmit}
                    validationSchema={NewcontactSchema}
                >
                    {({values, submitForm, getFieldProps, isValid, errors, touched }) => (
                        <Form >
                            <div className={classes.fieldWrapper}>
                                <TextField
                                    name="Email"
                                    id="Email"
                                    label="Email"
                                    {...getFieldProps('email')}
                                    variant="outlined"
                                    error={errors.email && touched.email ? true : false}
                                    helperText={ errors.email && touched.email ?
                                    errors.email : null}
                                />
                                <TextField
                                    name="firstName"
                                    id="firstName"
                                    label="First Name"
                                    {...getFieldProps('first_name')}
                                    variant="outlined"
                                    error={errors.first_name && touched.first_name ? true : false}
                                    helperText={ errors.first_name && touched.first_name ?
                                    errors.first_name : null }
                                />
                                <TextField
                                    name="lastName"
                                    id="lastName"
                                    label="Last Name"
                                    {...getFieldProps('last_name')}
                                    variant="outlined"
                                    error={errors.last_name && touched.last_name ? true : false}
                                    helperText={ errors.last_name && touched.last_name ?
                                    errors.last_name : null }
                                />
                                <Box width="max-content">
                                    <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    type="submit"
                                    disabled={!isValid}
                                    loading={isLoading}
                                    onClick={submitForm}
                                    >                                    
                                    Submit
                                    </Button>
                                </Box>
                            </div>
                        </Form>
                    )}
                </Formik>
        </Box>
        
    )
}

export default NewContact
