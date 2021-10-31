import "./css/card.css"
import { useState } from 'react'

function Card(props) {
    const { name, image, data, isSelected } = props
    const [className, setClassName] = useState(0)
    console.log(className)


    return (
        <div key={name} onClick={() => isSelected(data, setClassName)} className={className?className:'card'}>
        <img src={image} alt="item" />
        <p>{name}</p>
        </div>
    )
}

    export default Card