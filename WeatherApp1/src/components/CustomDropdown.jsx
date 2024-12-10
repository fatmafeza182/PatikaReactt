import React, { useState } from 'react'
import { useWeatherData } from '../Context/ContextApp'
import { Dropdown } from 'react-bootstrap'


function CustomDropdown() {
    let { city, setCity, cities } = useWeatherData()

    return (
        <div>
            <Dropdown className='dropdown'>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {city}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {cities.map((item, index) => {
                        return (
                            <Dropdown.Item key={index} onClick={() => setCity(item.name)}>
                                {item.name}
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default CustomDropdown
