
 const  deleteContact = (id) => {
    return (dispatch) => {
        dispatch({ 
            type: 'DELETE_CONTACT',
            payload: id
        })
    }
}


export default deleteContact;