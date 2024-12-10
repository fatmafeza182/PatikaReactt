import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { useWeatherData } from '../Context/ContextApp'

function List() {
    let { WeatherData = [] } = useWeatherData()

    if (!Array.isArray(WeatherData)) {
        return <div>...Yükleniyor</div>
    }
    // if (WeatherData.length === 0) {
    //     return <div>...yükleniyor</div>
    // }
    return (
        <CardGroup className='card-group'>
            {
                WeatherData.map((item, index) => {
                    const date = new Date(item.date);
                    const dayNumber = date.getDay();
                    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
                    const day = daysOfWeek[dayNumber]
                    return (
                        <Card key={index}>
                            <Card.Body>
                                <Card.Title>{day}</Card.Title>
                                <img variant='top' src={item.day.condition.icon}></img>
                            </Card.Body>
                            <Card.Footer><small><b>{item.day.maxtemp_c}°C</b> {item.day.mintemp_c}°C</small></Card.Footer>
                        </Card>
                    )
                })
            }
        </CardGroup>

    )
}

export default List
