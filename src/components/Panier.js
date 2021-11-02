import React from "react";

function Panier({ commandes }) {
  console.log('commandes', commandes)
  const formatCommandes = () => {
    const options = [];

    // for(const commande of commandes) {
    //   for(const question of commande) {
    //     options.push(question.options.map(option => option.title).join(', '));
    //   }
    // }

    return (
      <div>
        {
          commandes.map((commande, index) =>
            <div key={index} className="panier-commande">
              <div>
                {
                  commande.map((question, index) => 
                    <span key={index}>
                      {question.options.map(opt => opt.title).join(', ')}, 
                    </span>
                  )
                }
              </div>
              <div>X 1</div>
            </div>
          )
        }
      </div>
    );
  }

  return (
    <div className="panier">
      <div className="panier-price">TOTAL: 11€00</div>
      <button className="btn font-14">Passer la commande</button>
      <div className="commande">
        <h2>Votre commande</h2>
        { formatCommandes() }
      </div>
    </div>
  )
}

export default Panier;
