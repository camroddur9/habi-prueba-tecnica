import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";

import {
    setCurrentClientName
} from './../../redux/actions'

interface DatosCliente{
    setCurrentClientName: any,
    linkTo: string
}

const DatosClienteView = ({setCurrentClientName, linkTo}: DatosCliente) => {

    const [tempClientsName, setClientsName] = useState("")
    const navigate = useNavigate()


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClientsName(e.target.value)
        setCurrentClientName(e.target.value)
    }

    const handleSubmit = () => {
        navigate(linkTo)
    }

    return(
        <form className='datos-cliente-input-container' onSubmit={() => {handleSubmit()}}>
            <input type={"text"} name="name-input" required onChange={(e) => {handleInputChange(e)}} className="name-input"/>
            <input 
                type={"submit"} 
                disabled={!(tempClientsName.split(" ").length > 2 && tempClientsName.split(" ")[tempClientsName.split(" ").length - 1] !== "")} 
                value={"Continuar"}
                className="submit-btn"
            />
        </form>
    )
}

const mapStateToProps = ({
    datosClienteReducer
}: any) => {
    const {currentClientName} = datosClienteReducer
    return {currentClientName}
}

export default connect(mapStateToProps,{
    setCurrentClientName
})(DatosClienteView)