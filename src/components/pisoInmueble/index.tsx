import React from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";

import {
    setCurrentFloor
} from './../../redux/actions'

interface PisoInmueble {
    linkTo: string,
    currentFloor: number,
    setCurrentFloor: any
} 

const PisoInmubleViews = ({linkTo, currentFloor, setCurrentFloor}: PisoInmueble) => {

    const navigate = useNavigate()

    const handleSelectedFloor = (e: React.ChangeEvent<HTMLSelectElement> ) => {
        setCurrentFloor(e.target.value)
    }

    const handleSubmit = () => {
        navigate(linkTo)
    }

    const generateStructure = () => {
        let floorArray  = []

        for(let i = 1; i <= 50; i++){
            floorArray.push(<option value={i} key={i}>{i}</option>)
        }

        return floorArray
    }

    return(
        <form className='address-selection-container' onSubmit={() => {handleSubmit()}}>
            <section className='select-department-info'>
                <p>Selecciona un piso:</p>
                <select name="Departamento" disabled={false} onChange={(e) => {handleSelectedFloor(e)}}>
                    <option defaultValue={""} hidden disabled selected>Selecciona un piso</option>
                    {
                        generateStructure()
                    }
                </select>
            </section>
            <input 
                type={"submit"} 
                disabled={!(currentFloor !== -1)}
                value={"Continuar"}
                className="submit-btn address-submit-btn"
            />
        </form>
    )
}

const mapStateToProps = ({
    pisoInmuebleReducer
}: any) => {
    const {currentFloor} = pisoInmuebleReducer
    return {currentFloor}
}


export default connect(mapStateToProps,{
    setCurrentFloor
})(PisoInmubleViews )