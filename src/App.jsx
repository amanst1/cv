import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <>
      <h1> Curriculum Vitae</h1>
      <GeneralInfo isSubmitted={isSubmitted}/>
      <Education isSubmitted={isSubmitted}/>
      <Experience isSubmitted={isSubmitted}/>

      <br/>
      <button onClick={()=>setIsSubmitted(!isSubmitted)} > {isSubmitted ? "Edit": "Submit"} </button>
    </>
  )
}

export default App
