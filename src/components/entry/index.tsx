import React from 'react'
import { Link } from "react-router-dom";

import logoHabi from './../../UI/general/habi-morado.png'

interface EntryProps {
    description: string,
    linkTo: string
}

const EntryView = ({description, linkTo}: EntryProps) => {
    return(
        <div className='entry-main-component'>
            <img src={logoHabi} alt="logo-habi" className='logo-habi'/>
            <div className='entry-description'>
                {description}
            </div>
            <Link
                to={linkTo}
                className="ingresar-btn"
            >
                Empezar
            </Link>
        </div>
    )
}

export default EntryView