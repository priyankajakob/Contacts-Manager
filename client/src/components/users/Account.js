import React from 'react'
import {connect} from 'react-redux'

function Account(props){
    if(props.user){
        return (
            <div>  
                <h1>{props.user.username} {props.user.email} {props.user.mobile}</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                loading....
            </div>
        )
    }
    
}

const mapStateToProps = (state)=>{
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Account)