import "./css/card.css"
//import fakeData from '../data.json'

function Card(props) {
    const { name, image } = props
    //console.log(fakeData.base[0].name)
    //test récupération de données JSON:
    
    const selectItem = (name) =>{
        console.log(name)
    }
    return (
        <div key={name} onClick={() => selectItem(name)} className='card'>
        <img src={image} alt="item" />
        <p>{name}</p>
        </div>
    )
}

    export default Card