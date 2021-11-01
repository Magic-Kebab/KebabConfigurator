import fakeData from '../../data.json'
import { useState } from "react";
import { useHistory } from "react-router";
import "./choice.css";


const Button = ({img, label, onChoice}) => {
    return(
      <button className="ChoiceComponent--btn" onClick={onChoice}>
        <img src={img} alt="bread" className="ChoiceComponent--img" />
        <span  className="ChoiceComponent--btn-label">{label}</span>
      </button>
    )
}

const ChoiceComponent = ({title, link, datatype}) => {
    const [choice, setChoice] = useState("")
    const history = useHistory()

    const logo = fakeData.logos[0].image
    const data = fakeData[datatype]
    console.log(data)
    const handleChoice = (data) => {
        setChoice(data.name)
        choice !== '' && history.push(link)
    }

  return (
    <div className="ChoiceComponent">
      <img src={logo} alt="logo" className="ChoiceComponent--img" />
      <h2 className="ChoiceComponent--title">
          {title}
      </h2>
      <div className="ChoiceComponent--btnsContainer">
        {
          data.map((data) => (
            <Button key={data.name} img={data.image} label={data.name} onChoice={() => handleChoice(data.name)} />
          ))
        }
      </div>
    </div>
  );
};

export default ChoiceComponent;
