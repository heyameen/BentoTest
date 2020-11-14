import React from 'react'
import ContactsContextProvider from './ContactsContext'

const ContextWrapper = ({ children }) => {
    return (
        <ContactsContextProvider>
            {children}
        </ContactsContextProvider>
    )
}

export default ContextWrapper
