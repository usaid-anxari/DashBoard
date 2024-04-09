import React from 'react'
import {ChartComponent,Legend,DateTime,Tooltip,Inject,SeriesCollectionDirective,SeriesDirective,LineSeries} from '@syncfusion/ej2-react-charts'
import {lineCustomSeries,LinePrimaryXAxis,LinePrimaryYAxis} from '../../data/dummy'
import {useStateContext} from '../../Context/ContextProvider'

const LineChart = () => {
  const { currentMode} =useStateContext();
  return (
    <ChartComponent id='line-chart'
    height='420px'
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width: 0}}}
    tooltip={{enable : true}}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
    <Inject services={[LineSeries,Legend,DateTime,Tooltip]}/>
    <SeriesCollectionDirective>
      {lineCustomSeries.map((item,index)=> 
     <SeriesDirective key={index} {...item}/>
    )}
    </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart