import { getValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';

function App() {


  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswer, setUSerAnswer] = useState('')
  const [remarks, setRemarks] = useState(0)
  const [results, showResults] = useState(false)
  const [radioChecked , setRadioCheck] = useState(false)
 

  const Quiz = [{
    question: 'Which country is completely landlocked by South Africa?',
    answers: ["Swaziland", "Botswana", "Zimbabwe", "Lesotho"],
    correct_answer: 'Lesotho',
  },
  {
    question: 'Which Native American tribe\/nation requires at least one half blood quantum (equivalent to one parent) to be eligible for membership?',
    answers: ["Yomba Shoshone Tribe", "Standing Rock Sioux Tribe", "Kiowa Tribe of Oklahoma", "Pawnee Nation of Oklahoma"],
    correct_answer: 'Yomba Shoshone Tribe',
  },
  {
    question: 'Before the 19th Century, the &quot;Living Room&quot; was originally called the...',
    answers: ["Open Room", "Sitting Room", "Parlor", "Loft"],
    correct_answer: 'Parlor',
  },
  {
    question: 'Which country is completely landlocked by South Africa?',
    answers: ["Swaziland", "Botswana", "Zimbabwe", "Lesotho"],
    correct_answer: 'Lesotho',
  },
  {
    question: 'Which Native American tribe\/nation requires at least one half blood quantum (equivalent to one parent) to be eligible for membership?',
    answers: ["Yomba Shoshone Tribe", "Standing Rock Sioux Tribe", "Kiowa Tribe of Oklahoma", "Pawnee Nation of Oklahoma"],
    correct_answer: 'Yomba Shoshone Tribe',
  },
  {
    question: 'Before the 19th Century, the &quot;Living Room&quot; was originally called the...',
    answers: ["Open Room", "Sitting Room", "Parlor", "Loft"],
    correct_answer: 'Parlor',
  },
  {
    question: 'Which country is completely landlocked by South Africa?',
    answers: ["Swaziland", "Botswana", "Zimbabwe", "Lesotho"],
    correct_answer: 'Lesotho',
  },
  {
    question: 'Which Native American tribe\/nation requires at least one half blood quantum (equivalent to one parent) to be eligible for membership?',
    answers: ["Yomba Shoshone Tribe", "Standing Rock Sioux Tribe", "Kiowa Tribe of Oklahoma", "Pawnee Nation of Oklahoma"],
    correct_answer: 'Yomba Shoshone Tribe',
  },
  {
    question: 'Before the 19th Century, the &quot;Living Room&quot; was originally called the...',
    answers: ["Open Room", "Sitting Room", "Parlor", "Loft"],
    correct_answer: 'Parlor',
  },
  {
    question: 'Which country is completely landlocked by South Africa?',
    answers: ["Swaziland", "Botswana", "Zimbabwe", "Lesotho"],
    correct_answer: 'Lesotho',
  }]

  const Options = Quiz[currentIndex].answers

  function checking (){
  setRadioCheck(true)
  }

 function getValue (e){

  setUSerAnswer(e.target.value)

 }

  function nextQuestion() {
    let tempindex = currentIndex
    setCurrentIndex(++tempindex)
    setRadioCheck(false)

    let remarksTemp = remarks 
    userAnswer === Quiz[currentIndex].correct_answer && setRemarks(remarksTemp+10)
  }

  function showResult() {
    console.log(remarks)
  }


  function showResult() {
    showResults(true)
  }

  return (
    <div className=' flex justify-center'>
      <div className='md:w-[60%] mt-5  justify-evenly content-center  shadow-2xl border-4 border-indigo-500/100 rounded-lg'>
      {currentIndex < Quiz.length - 1 && <h1 className='md:text-3xl text-1xl  font-semibold m-2 '>{Quiz[currentIndex].question}</h1>}
      {currentIndex < Quiz.length - 1 &&
        Options.map(function (item, index) {
          return (<div onClick={checking} className='indent-10' key={index}>
            <input   type="radio" name="myRadios" checked={radioChecked} onChange={(e) => { getValue(e)}} value={item}   /><span className='md:text-2xl font-bold pl-4'>{item}</span>
          </div>)
        })
      }
      <div className='flex justify-center'>
      {currentIndex < Quiz.length - 1 && <button onClick={nextQuestion} className='  p-3 border-4 border-indigo-500/100 rounded-lg m-2 bg-yellow-500'>Next Question</button>}
      {currentIndex === Quiz.length - 1 && <button onClick={showResult} className='  p-3 border-4 border-indigo-500/100 rounded-lg m-2 bg-green-400' >Show Results</button>}</div>
      {results && <h1 className='md:text-3xl text-1xl  font-semibold m-2 outline outline-offset-2 outline-blue-500'>Your Remarks is {remarks}</h1>}
    </div>
    </div>
  );
}

export default App;
