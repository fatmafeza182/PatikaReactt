import { useState } from 'react'
import './App.css'
import { WeatherData } from './Context/ContextApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container';


function App() {

  return (
    <WeatherData>
      <Container />
    </WeatherData>

  )
}

export default App
