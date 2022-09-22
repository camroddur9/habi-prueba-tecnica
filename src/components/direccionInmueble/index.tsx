import React, {useEffect, useState, useRef, useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";

import useColombiaInfo from '../../hooks/useColombiaInfo'

import {
    setCurrentDeparment,
    setCurrentMunicipality,
    setCurrentAddress
} from './../../redux/actions'

interface Direccion {
    linkTo: string,
    setCurrentDeparment: any,
    setCurrentMunicipality: any,
    setCurrentAddress: any,
    currenAddress: string
}

interface municipalityInterface {
    c_digo_dane_del_departamento: string,
    c_digo_dane_del_municipio: string,
    departamento: string,
    municipio: string,
    region: string,
}

const API = 'https://www.datos.gov.co/resource/xdk5-pm3f.json'

const DireccionView = ({
    linkTo,
    setCurrentDeparment,
    setCurrentMunicipality,
    setCurrentAddress,
    currenAddress
}: Direccion) => {

    const [departamentoArray, setDepartamentoArray]: any= useState([])
    const [selectedDepartment, setSelectedDeparment] = useState("")
    const [selectedMunicipality, setSelectedMunipality] = useState("")
    const [isDeparmentSelected, setIsDeparmentSelected] = useState(false)
    const deparmentInput = useRef<HTMLSelectElement>(null)
    const municipalityInput = useRef<HTMLSelectElement>(null)
    const navigate = useNavigate()

    const colombiaInfo = useColombiaInfo(API)

    useEffect(() => {
        colombiaInfo.forEach((municipality: municipalityInterface) => {
            if(!departamentoArray.includes(municipality.departamento)){
                setDepartamentoArray([...departamentoArray, municipality.departamento])
            }
        })
    })

    const handleSelectDeparment = useCallback(() => {
        if(deparmentInput.current !== null){
            setSelectedDeparment(deparmentInput.current.value)
            setCurrentDeparment(deparmentInput.current.value)
            setIsDeparmentSelected(true)
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleMunicipality = useCallback(() => {
        if(municipalityInput.current !== null){
            setSelectedMunipality(municipalityInput.current.value)
            setCurrentMunicipality(municipalityInput.current.value)
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const filteredmunicipality = 
    colombiaInfo.filter((municipality: municipalityInterface) => {
        return (
            municipality.departamento.toLowerCase().includes(selectedDepartment.toLowerCase())
        )
    })

    const changeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentAddress(e.target.value)
    }

    const handleSubmit = () => {
        navigate(linkTo)
    }

    return(
        <form className='address-selection-container' onSubmit={() => {handleSubmit()}}>
            <section className='select-department-info'>
                <p>Selecciona un departamento:</p>
                <select name="Departamento" disabled={false} ref={deparmentInput} onChange={() => {handleSelectDeparment()}}>
                    <option defaultValue={""} hidden disabled selected>Selecciona el departamento</option>
                    {
                        departamentoArray.sort().map((elem: string, index: number)  =>
                            <option key={elem + index}>{elem}</option>
                        )
                    }
                </select>
            </section>
            <section className='select-municipality-info'>
                <p>Selecciona un municipio:</p>
                <select name="municipio" disabled={!isDeparmentSelected} ref={municipalityInput} onChange={() => {handleMunicipality()}}  >
                    <option defaultValue={""} hidden disabled selected>Selecciona el municipio</option>
                    {
                        filteredmunicipality.map((elem: municipalityInterface, index: number)  =>
                            <option key={elem.municipio + index}>{elem.municipio}</option>
                        )
                    }
                </select>
            </section>
            <section className='select-address'>
                <p>Escribe la direccion del inmueble</p>
                <input 
                    type={"text"} 
                    name="name-input" 
                    required
                    className="" 
                    disabled={!(selectedMunicipality)}
                    onChange = {(e) => {changeAddress(e)}}
                />
            </section>
            <input 
                type={"submit"} 
                disabled={!(currenAddress)}
                value={"Continuar"}
                className="submit-btn address-submit-btn"
            />
        </form>
    )
}

const mapStateToProps = ({
    direccionInmuebleReducer
}: any) => {
    const {currenAddress} = direccionInmuebleReducer
    return {currenAddress}
}

export default connect(mapStateToProps,{
    setCurrentDeparment,
    setCurrentMunicipality,
    setCurrentAddress
})(DireccionView)