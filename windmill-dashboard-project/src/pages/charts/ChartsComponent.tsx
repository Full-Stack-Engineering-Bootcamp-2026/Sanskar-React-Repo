
import React from 'react'
import DoughNutChart from './DoughNutChart'
import LineChart from './LineChart'
import BarChart from './BarChart'

const ChartsComponent = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <DoughNutChart />
            <LineChart />
            <BarChart />
        </div>
    )
}

export default ChartsComponent