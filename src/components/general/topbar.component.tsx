import React from 'react'

import logoHabi from './../../UI/general/habi-morado.png'

interface TopBarProps {
    currentStep: number,
    stepCount: number
}

const TopBar = ({currentStep, stepCount}: TopBarProps) => {
    return(
        <header className='topbar-main'>
            <section className='logo-container'>
                <img src={logoHabi} alt="logo-habi" className='logo-habi-topbar'/>
            </section>
            <section className='progress-bar-container'>
                <section className='progress-bar-inside' style={{width: ((currentStep * 100) / (stepCount - 2)) + "%", maxWidth: "100%"}}/>
            </section>
            {
                currentStep <= stepCount - 2 ?
                <section className='step-counter'>
                    {`Paso ${currentStep} de ${stepCount - 2}`}
                </section>:
                <section className='step-counter'>
                    Completo
                </section>
            }
        </header>
    )
}

export default TopBar