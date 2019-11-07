import React from 'react'
import { connect } from 'react-redux'

function ContactShow(props) {
    if(props.contact){
        //because of below object destructuring we are doing if else here to avoid error during page reload when props.contact is empty. If object destructuring was not used we could do conditional rendering in return
        const { name, email, mobile} = props.contact
    return (
        <div>
            <h1>{name} {email} {mobile}</h1>
        </div>
    )
    }
    else {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    
}

const mapStateToProps = (state, props) => {
    return {
        contact: state.contacts.find(contact => contact._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ContactShow)