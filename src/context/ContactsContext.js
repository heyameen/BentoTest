import React, { useState, createContext } from 'react'

export const ContactsContext = createContext();

const ContactsContextProvider = ({ children }) => {
    const [ data, setData ] = useState([''])
    
    
    return (
        <ContactsContext.Provider value={[data, setData]}>
            { children }
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider