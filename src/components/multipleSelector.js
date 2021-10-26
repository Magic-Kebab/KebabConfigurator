//import { useState } from 'react'
import fakeData from '../data.json'
import Card from './card'

function MultipleSelector(props){
    const { question, datatype } = props
    
    const logo = fakeData.logos[0].image
    const data = fakeData[datatype]
    
    const dataList = data.map(data => (
        <Card name={data.name} image={data.image}/>
        ))

    return (
        <div>
            <img src={logo} alt='Magic Kebab'/>
            <h2>{question}</h2>
            <div>{dataList}</div>
        
        </div>
    )
}

export default MultipleSelector