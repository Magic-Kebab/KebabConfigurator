import "./css/card.css"
//import fakeData from '../data.json'

function Card(props) {
    //const { name, image } = props
    
    //test récupération de données JSON:
    //const name  = fakeData.base[0].name
    //const image = fakeData.base[0].image
    
    const name = 'eee'
    const image = 'https://s3-alpha-sig.figma.com/img/9c69/7695/7bc08fbee8fd6d88eaebc2d9383fbca2?Expires=1636329600&Signature=acMnKxyWWIEvqRRLOCvWMkIX4cna0nXfJg9WQzDWW4FntqHPa3~xo5v7Bq4vmZ2qrtCFhwxySNLwhktKux1L7Inu-mg0EdMI8JepADC4J4iakXRShrEAyxiLmAhKnN4HcyM-xD-KLNVH9hx0hbE0Iua2YuTXBiMnfmmGLWQ~uLjugMVKXII8U-iylYUF7Mn4H~xWJTmrZ0p-DhFFAIiXJyS3LLIxYYo97bIIcefGMwhEy3evoxLq~qTuQg4JqXKUvtn4Srpim06Kt0VvWnpcZQGNUwJRzms0-GVj69KPvyi8X2~mM8nUDG9OcYEj9uU7BDQ-unEMEybMeDf4DdU38Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    const selectItem = (name) =>{
        console.log(name)
    }
    return (
        <div onClick={() => selectItem(name)} className='card'>
        <img src={image} alt="item" />
        <p>{name}</p>
        </div>
    )
    }

    export default Card