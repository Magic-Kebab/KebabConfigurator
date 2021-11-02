import React from "react";

function Recap({ questions }) {

  return (
    <div className="question">
      <h1 className="question-title">On récapitule</h1>
      <div className="options">
        {
          questions.map((question, index) =>{
            return (
              <div key={index}>
                <div className="question-recap">
                  {
                    question.options.map(option => {
                      return (
                        <div className={`option-recap`} key={option.title}>
                          <img src={option.img} alt={option.title} className="question-option-img"></img>
                          <span className="question-option-title">
                            {option.title}
                          </span>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="plus">+</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Recap;
