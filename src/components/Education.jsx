/* eslint-disable react/prop-types */
import { useState } from "react"

export default function Education({ isSubmitted }) {
    const [school, setSchool] = useState('')
    const [program, setProgram] = useState('')
    const [date, setDate] = useState('')

    return(
        <div>
            <h2>Educational Experience</h2>
            { !isSubmitted ?
            (<form >
               <label htmlFor="school">School: </label> 
               <input id="school" name="school" type="text" value={school} onChange={(e) => setSchool(e.target.value)}/> <br/>
               <label htmlFor="program">Program: </label> 
               <input id="program" name="program" type="text" value={program} onChange={(e) => setProgram(e.target.value)} /> <br/>
               <label htmlFor="date">Date: </label> 
               <input id="date" name="date" type="date" value={date} onChange={(e) => setDate(e.target.value)}/> <br/>
            </form>) :
            (<>
                <p><strong>School:</strong> {school} </p>
                <p><strong>Program:</strong> {program} </p>
                <p><strong>Date:</strong> {date}</p>
            </>)}
        </div>
    )
}