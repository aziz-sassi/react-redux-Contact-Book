


 const updateContact = (contact) => {
    return (dispatch) => {
        dispatch({ 
            type: 'UPDATE_CONTACT',
            payload: contact

        })
    }
}

export default updateContact;