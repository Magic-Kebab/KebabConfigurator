import { useState } from "react";
import { useHistory } from "react-router";
import "./choice.css";

let logo =
  "https://s3-alpha-sig.figma.com/img/d079/b2df/64f93cc316572abf83a2f2709e642981?Expires=1636329600&Signature=AtVMy3i61BPEa3UTMT4HXxER-Goxyp24oliV8prytwynp0JjdoFAeUepLTeJ2jdbbEeyQtrNTrOx9UR9JFbHANqpmP6wYnDzaR-zQU0ROW8FoB2~vk-wzeWvGyZY8zkVWDmChPHzylR4qRPJ63jxvDBS7XM1ton5DoFjymCZEC4~9svRAyqxnpYZusKHMpRPtEBH2bJlOvu7DCI2kzswLPbQPFLpA6P5NbehHHPzlLdLpte0Mf0FYSHH52Req7ONZv04gngzdPgCHdSbwSUchBXxuiVMPa6wwGKqzzX4O0d8yFbL2k7Ras7M9GQdiFrKoH8t16O9a945AaxtLW~1aA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";


  const Button = ({img, label, onChoice}) => {
      return(
        <button className="ChoiceComponent--btn" onClick={onChoice}>
          <img src={img} alt="bread" className="ChoiceComponent--img" />
          <span  className="ChoiceComponent--btn-label">{label}</span>
        </button>
      )
  }


const ChoiceComponent = ({title,link, buttonChoice}) => {
    const [choice, setChoice] = useState("")
    const history = useHistory()
  
    const handleChoice = (btnId) => {
        setChoice(btnId)
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
          buttonChoice.map((btn, id) => (

        <Button key={id} img={btn.img} label={btn.label} onChoice={() => handleChoice(btn.btnId)} />
          ))
        }
        
      </div>
    </div>
  );
};

export default ChoiceComponent;
