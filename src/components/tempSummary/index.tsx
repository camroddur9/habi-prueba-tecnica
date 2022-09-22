import { connect } from "react-redux";

import {
    setCurrentClientName
} from './../../redux/actions'

interface tempSummary {
    currentClientName: string,
    currentClientEmail: string,
    currentDeparment: string, 
    currentMunicipality: string, 
    currenAddress: string,
    currentFloor: number,
    amenitiesArray: Array<string>,
    component: string,
    isSummaryMobileOpened: boolean,
    handleToogleSummaryMobile: any
}

const TempSumamryView = ({
    currentClientName, 
    currentClientEmail,
    currentDeparment, 
    currentMunicipality, 
    currenAddress,
    currentFloor,
    amenitiesArray,
    component,
    isSummaryMobileOpened,
    handleToogleSummaryMobile
}: tempSummary) => {

    return(
        <section className={component === "resumen" ? 'temp-summary-main-final':isSummaryMobileOpened ? 'temp-summary-main fade-in':'temp-summary-main fade-out'}>
            <section className='temp-section-container'>
                <p className='temp-summary-title'>
                    Resumen Inmueble
                </p>
                <section className="temp-summary-container">
                    {
                        currentClientName ?
                        <section className='temp-summary-detailed-container'>
                            <p className='temp-summary-detail-title'>Nombres y apellidos propietario:</p>
                            <p className='temp-summary-detail-text'>{currentClientName}</p>
                        </section>:null
                    }
                    {
                        currentClientEmail ?
                        <section className='temp-summary-detailed-container'>
                            <p className='temp-summary-detail-title'>Email propietario:</p>
                            <p className='temp-summary-detail-text'>{currentClientEmail}</p>
                        </section>:null
                    }
                    {
                        currentDeparment ?
                        <section className='temp-summary-detailed-container'>
                            <p className='temp-summary-detail-title'>Direccion inmueble:</p>
                            <p className='temp-summary-detail-text'>
                                {
                                    currentDeparment +
                                    `${currentMunicipality !== "" ? ", "+currentMunicipality: ""}` +
                                    `${currenAddress !== "" ? ", "+currenAddress: ""}`
                                }
                            </p>
                        </section>:null
                    }
                    {
                        currentFloor !== -1 ?
                        <section className='temp-summary-detailed-container'>
                            <p className='temp-summary-detail-title'>Piso inmueble:</p>
                            <p className='temp-summary-detail-text'>{currentFloor}</p>
                        </section>:null
                    }
                    {
                        amenitiesArray.length > 0 ?
                        <section className='temp-summary-detailed-container'>
                            <p className='temp-summary-detail-title'>Amenidades:</p>
                            {
                                amenitiesArray.map((amenitie: string, index: number) => 
                                    <p className='temp-summary-detail-text'>- {amenitie}</p>
                                )
                            }
                        </section>:null
                    }
                </section>
            </section>
            {
                component !== "resumen" ?
                <section className="mobile-hide-summary" onClick={() => {handleToogleSummaryMobile()}}>
                    Ocultar resumen
                </section>:null
            }
        </section>
    )
}

const mapStateToProps = ({
    datosClienteReducer,
    emailClienteReducer,
    direccionInmuebleReducer,
    pisoInmuebleReducer,
    amenitiesReducer
}: any) => {
    const {currentClientName} = datosClienteReducer
    const {currentClientEmail} = emailClienteReducer
    const {currentDeparment, currentMunicipality, currenAddress} = direccionInmuebleReducer
    const {currentFloor} = pisoInmuebleReducer
    const {amenitiesArray} = amenitiesReducer
    return {
        currentClientName, 
        currentClientEmail, 
        currentDeparment, 
        currentMunicipality, 
        currenAddress,
        currentFloor,
        amenitiesArray
    }
}

export default connect(mapStateToProps,{
    setCurrentClientName
})(TempSumamryView)