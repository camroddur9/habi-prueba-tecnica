import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";

import {
    setCurrentClientEmail
} from './../../redux/actions'

interface emailCliente {
    setCurrentClientEmail: any
    linkTo: string
}

const EmailClienteView = ({setCurrentClientEmail,linkTo}: emailCliente) => {

    const [isValidEmail, setIsValidEmail] = useState(false)
    const navigate = useNavigate()

    const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        var regex = /\S+@\S+\.\S+/
        setIsValidEmail(regex.test(e.target.value))
        setCurrentClientEmail(e.target.value)
    }

    const handleSubmit = () => {
        navigate(linkTo)
    }

    return(
        <form className='datos-cliente-input-container' onSubmit={() => {handleSubmit()}}>
            <input 
                type={"email"} 
                name="name-input" 
                required  
                className="name-input"
                onChange = {(e) => {validateEmail(e)}}
            />
            <input 
                type={"submit"} 
                disabled={!isValidEmail}
                value={"Continuar"}
                className="submit-btn"
            />
        </form>
    )
}

const mapStateToProps = ({
    emailClienteReducer
}: any) => {
    const {currentClientemail} = emailClienteReducer
    return {currentClientemail}
}


export default connect(mapStateToProps,{
    setCurrentClientEmail
})(EmailClienteView )