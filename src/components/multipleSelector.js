//import { useState } from 'react'
import fakeData from '../data.json'
import Card from './card'

function MultipleSelector(props){
    const { question, datatype } = props
    const limit = props.limit===undefined?null:Number(props.limit)
    const logo = fakeData.logos[0].image
    const data = fakeData[datatype]
    let selectedItems = []
    const addToSelectedItems = (data) => {
        let exit = false;
        selectedItems.map(item => {
            console.log('in map')
            if(item.name===data.name){console.log('equals')
                selectedItems=selectedItems.filter(item => item.name!==data.name);
                exit = true
                return '';
            }
            return '';
        })
        if(exit){return;}
        if(limit){
            if(selectedItems.length+1<=limit){
                selectedItems.push(data);
                console.log(selectedItems)
            }
            return;
        }else{
            selectedItems.push(data);
        }
        console.log('Selected:',selectedItems)
        
    }
    const isSelected = (data) => {
        addToSelectedItems(data)
    }
    const dataList = data.map(data => (<Card name={data.name} image={data.image} data={data} isSelected={isSelected}/>))
    return (
        <div>
            <img src={logo} alt='Magic Kebab'/>
            <h2>{question}</h2>
            <div>{dataList}</div>
            <button onClick={() => console.log('clic')}>Continuer</button>
        </div>
    )
}

export default MultipleSelector