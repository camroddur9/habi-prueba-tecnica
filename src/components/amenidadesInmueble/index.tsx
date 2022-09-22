import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";

import {
    setAmenitiesArray
} from './../../redux/actions'

interface Amenities {
    linkTo: string,
    amenities: Array<String> | any
    setAmenitiesArray: any
}

const AmenitiesViews = ({linkTo, amenities, setAmenitiesArray}: Amenities) => {

    const [tempAmenities, setTempAmenities]: any = useState([])
    const navigate = useNavigate()

    const handleAddAmenitiesToArray = (amenitie: string) => {
        if(tempAmenities.includes(amenitie)){
            tempAmenities.splice(tempAmenities.indexOf(amenitie, 1))
            setTempAmenities([...tempAmenities])
        }
        else{
            setTempAmenities([...tempAmenities, amenitie])
        }
    }

    useEffect(() => {
        setAmenitiesArray(tempAmenities)
    })

    const handleSubmit = () => {
        navigate(linkTo)
    }

    return(
        <form className='amenities-container' onSubmit={() => {handleSubmit()}}>
            <p className='amenities-text'>Selecciona las amenidades:</p>
            <section className='amenities-checkbox-container'>
                {
                    amenities.map((amenitie: string, index: number) =>
                    <section className='amenitie-individual-container'>
                        <label>
                            {amenitie}
                        </label>
                        <input
                                type={"checkbox"}
                                value={index}
                                className="selection-icons"
                                onChange={() => {handleAddAmenitiesToArray(amenitie)}}
                        />
                    </section>
                    )
                }
            </section>
            <input 
                type={"submit"} 
                disabled={false}
                value={tempAmenities.length > 0 ? "Seleccionar":"Omitir"}
                className="submit-btn address-submit-btn"
            />
        </form>
    )
}

const mapStateToProps = ({
    amenitiesReducer
}: any) => {
    const {amenitiesArray} = amenitiesReducer
    return {amenitiesArray}
}

export default connect(mapStateToProps,{
    setAmenitiesArray
})( AmenitiesViews)