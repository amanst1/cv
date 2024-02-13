import { useState } from "react"

export default function Education() {
    const [school, setSchool] = useState('')
    const [program, setProgram] = useState('')
    const [date, setDate] = useState('')

    return(
        <div>
            <h3>Educational Experience</h3>
            <form action="">
               <label htmlFor="school">School: </label> 
               <input id="school" name="school" type="text" value={school} onChange={(e) => setSchool(e.target.value)}/> <br/>
               <label htmlFor="program">Program: </label> 
               <input id="program" name="program" type="text" value={program} onChange={(e) => setProgram(e.target.value)} /> <br/>
               <label htmlFor="date">Date: </label> 
               <input id="date" name="date" type="text" value={date} onChange={(e) => setDate(e.target.value)}/> <br/>
            </form>
        </div>
    )
}