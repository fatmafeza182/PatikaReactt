import React from 'react';
import CustomDropdown from './CustomDropdown';
import List from './List';
import { useWeatherData } from '../Context/ContextApp';

function Container() {

    return (
        <div>
            <CustomDropdown />
            <List />
        </div>
    );
}

export default Container;
