import "./css/card.css"

function Card(props) {
    const { name, image, data, isSelected } = props

    return (
        <div key={name} onClick={() => isSelected(data)} className='card'>
        <img src={image} alt="item" />
        <p>{name}</p>
        </div>
    )
}

    export default Card