import React from 'react'
import { Box, Typography, TextField } from '@material-ui/core'
import { Formik, Form } from 'formik';
import CloseIcon from '@material-ui/icons/Close';
import Button from '../../Button'
import { useStyles } from './styles.js'
import {ContactsContext} from '../../../context/ContactsContext'
import api from '../../../services/Api'
import * as Yup from 'yup';





const ContactDetailsForm = ({ onClose, selectedData }) => {
    
    const classes = useStyles()
    const [data, setData] = React.useContext(ContactsContext);
    const [isLoading, setLoading] = React.useState(false)
    
    
    const onSubmit = async (values) => {
        setLoading(true)
        api.patch(`/users/${data.id}`, values)
        .then(res => {            
            res.status === 200 ? 
                updateData(values)
                
            :
            console.log('RESP', res)
        })
        
    }



    const updateData = (val) => {    
        let updatedData = {...selectedData.contact, ...val}        
        let newData = [...data]
        newData[selectedData.index] = updatedData
        setData(newData)        
        setLoading(false)
        onClose()
    }


    const EditSchema = Yup.object().shape({
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
        <>
            <Box>
                <div className={classes.formHeader}>                    
                    <Typography variant="subtitle1">Edit Contact</Typography>
                    <CloseIcon className={classes.icon} onClick={onClose} />
                </div>


                <Formik
                    initialValues={{
                        email: `${selectedData.contact.email}`,
                        first_name: `${selectedData.contact.first_name}`,
                        last_name: `${selectedData.contact.last_name}`
                    }}
                    onSubmit={onSubmit}
                    validationSchema={EditSchema}

                >
                    {({values, submitForm, isValid, getFieldProps, errors, touched }) => (
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
                                    errors.email : null
                                }
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
        </>
    )
}

export default ContactDetailsForm
