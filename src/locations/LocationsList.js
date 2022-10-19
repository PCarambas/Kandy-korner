import { useState, useEffect } from "react"
import "./LocationsList.css"



export const LocationsList = () => {
    const [locations, setLocations] =useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/locations`)
        .then((response) => response.json())
        .then((locationsArray) => {
            setLocations(locationsArray)
        })

    }, [])



    return <>
        <div className="locations-header">
            <h1>Locations</h1>
        </div>

        <div className="locations-container">
            {
                locations.map(
                    (locationObj) => {
                        return <div className="location-card" key={locationObj.id}>
                            <div>
                            
                                <ul>
                                <ul>{locationObj.address}</ul>
                                <ul>{locationObj.sqFootage}</ul>
                                </ul>

                            </div>
                            </div>

                    }
                    
                )
            }
        </div>
    </>
}