import { connect } from 'react-redux'
import React from 'react'

import EntryView from '../entry'
import TopBar from '../general/topbar.component'
import DatosClienteView from '../datosCliente'
import EmailClienteView from '../emailCliente'
import DireccionView from '../direccionInmueble'
import PisoInmubleViews from '../pisoInmueble'
import TempSumamryView from '../tempSummary'
import AmenitiesViews from '../amenidadesInmueble'

import {
    setCurrentStep
} from './../../redux/actions'

interface Props{
    step: Steps,
    stepsCount: number,
    currentStep: number,
    setCurrentStep: any
}

interface State{
    isSummaryMobileOpened: boolean
}

interface Steps{
    stepNumber: number,
    route: string,
    component: string
    description: string,
    linkTo: string
    amenitiesArray?: Array<String>
} 

class MainLayout extends React.Component<Props,State>{

    constructor(props: Props){
        super(props);
        this.state = {
            isSummaryMobileOpened: false
        }
    }

    componentDidMount(): void {
        this.props.setCurrentStep(this.props.step.stepNumber)
        this.setState({
            isSummaryMobileOpened: window.screen.height < window.screen.width
        })
    }

    componentDidUpdate(prevProps: Readonly<Props>): void {
        if(this.props.step.stepNumber !== prevProps.step.stepNumber){
            this.props.setCurrentStep(this.props.step.stepNumber)
        }
    }

    handleToogleSummaryMobile = () => {
        this.setState({
            isSummaryMobileOpened: !this.state.isSummaryMobileOpened
        })
    }

    render(): React.ReactNode {
        return(
            <section className='main-layout-container'>
                {
                    this.props.step.component === "entry" ?
                    <EntryView
                        description={this.props.step.description}
                        linkTo={this.props.step.linkTo}
                    />:
                    <section className='information-container'>
                        <main className='datos-cliente-main'>
                            <p className='datos-cliente-description'>
                                {
                                    this.props.step.description
                                }
                            </p>
                            {
                                this.props.step.component === "datosCliente" ?
                                <DatosClienteView
                                    linkTo={this.props.step.linkTo}
                                />:null
                            }
                            {
                                this.props.step.component === "emailCliente" ?
                                <EmailClienteView
                                    linkTo={this.props.step.linkTo}
                                />:null
                            }
                            {
                                this.props.step.component === "direccionInmueble" ?
                                <DireccionView
                                    linkTo={this.props.step.linkTo}
                                />:null
                            }
                            {
                                this.props.step.component === "pisoInmueble" ?
                                <PisoInmubleViews
                                    linkTo={this.props.step.linkTo}
                                />:null
                            }
                            {
                                this.props.step.component === "amenidadesInmueble" ?
                                <AmenitiesViews
                                    linkTo={this.props.step.linkTo}
                                    amenities={this.props.step.amenitiesArray}
                                />:null
                            }
                            {
                                this.props.step.component === "resumen" ?
                                <TempSumamryView
                                    component = {this.props.step.component}
                                    isSummaryMobileOpened = {this.state.isSummaryMobileOpened}
                                    handleToogleSummaryMobile = {this.handleToogleSummaryMobile}
                                />:null
                            }
                        </main>
                        <TopBar
                            currentStep={this.props.currentStep}
                            stepCount={this.props.stepsCount}
                        />
                        {
                            this.props.step.component !== "resumen" ?
                            <section className='layout-see-summary' onClick={() => {this.handleToogleSummaryMobile()}}>
                                Ver resumen
                            </section>:null
                        }
                        {
                            this.props.step.component !== "resumen" ?
                            <TempSumamryView
                                component = {this.props.step.component}
                                isSummaryMobileOpened = {this.state.isSummaryMobileOpened}
                                handleToogleSummaryMobile = {this.handleToogleSummaryMobile}
                            />:null
                        }
                        
                    </section>
                }
            </section>
        )
    }
}

const mapStateToProps = ({
    layoutReducers
}: any ) => {
    const {currentStep} = layoutReducers
    return {currentStep}
}

export default connect(mapStateToProps, {
    setCurrentStep
})(MainLayout)