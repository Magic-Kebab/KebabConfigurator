import React, { useState } from 'react';
import QuestionList from '../../questionList';
import Recap from '../../components/Recap';
import Panier from '../../components/Panier';
import { useHistory } from "react-router-dom";

function Question () {
  let history = useHistory();
  const [Questions, setQuestions] = useState(JSON.parse(JSON.stringify(QuestionList)));
  const [currentStep, setCurrentStep] = useState(0);
  const [showRecap, setShowRecap] = useState(false);
  const [commandes, setCommandes] = useState([]);

  const optionClickHandler = (option) => {
    if (Questions[currentStep].multiple && option.selected) {
      setQuestions(Questions.map(question => {
        if (question.question === Questions[currentStep].question) {
          const optionFound = Questions[currentStep].options.find(opt => opt.title === option.title)
          if (optionFound) option.selected = false
        }
        return question
      }))

      return
    }

    setQuestions(Questions.map(question => {
      if (question.question === Questions[currentStep].question) {
        const optionFound = Questions[currentStep].options.find(opt => opt.title === option.title)
        if (optionFound) option.selected = true
      }
      return question
    }))

    if (!Questions[currentStep].multiple) {
      goNextQuestion();
    }
  }

  const isLastStep = () => currentStep === Questions.length - 1;
  const goCommande = () => history.push("/commande");
  const goNextQuestion = () => isLastStep() ? setShowRecap(true) : setCurrentStep(currentStep + 1);
  const confirmCommand = () => {
    setCommandes([...commandes, getRecap()]);
    setCurrentStep(0);
    setQuestions(JSON.parse(JSON.stringify(QuestionList)));
    setShowRecap(false);
  }

  const getRecap = () => {
    const filtred = [];
    for (let q of Questions) {
      q.options = q.options.filter(option => option.selected);
      filtred.push(q);
    }
    return filtred;
  }

  if (showRecap) {
    return (
      <>
        <Recap questions={getRecap()} />
        <button className="btn mt-5" onClick={confirmCommand}>Commander</button>
      </>
    )

  }

  return (
    <div className="question">
      { commandes.length ? <Panier commandes={commandes} /> : null }
      <h1 className="question-title">{Questions[currentStep].question}</h1>
      <div className="options">
      {
        Questions[currentStep].options.map(option =>
          <div className={`question-option ${option.selected ? 'active' : ''}`} onClick={() => optionClickHandler(option)} key={option.title}>
            <img src={option.img} alt={option.title} className="question-option-img"></img>
            <span className="question-option-title">
              {option.title}
            </span>
          </div>
        )
      }
      </div>
      {Questions[currentStep].multiple ? <button onClick={() => goNextQuestion()} className="btn mt-5">Continuer</button> : null }
    </div>
  )
}

export default Question;
