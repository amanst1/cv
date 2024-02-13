/* eslint-disable react/prop-types */
import { useState } from "react"

export default function Experience({ isSubmitted }) {
    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')
    const [role, setRole] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    return(
        <div>
            <h3>Work Experience</h3>
            { !isSubmitted ? 
            (<form>
               <label htmlFor="company">Company: </label> 
               <input id="company" name="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)}/> <br/>
               <label htmlFor="position">Position: </label> 
               <input id="position" name="position" type="text" value={position} onChange={(e) => setPosition(e.target.value)} /> <br/>
               <label htmlFor="role">Responsibilities: </label> 
               <textarea id="role" name="role" type="text" value={role} onChange={(e) => setRole(e.target.value)}> </textarea> <br/>
               <label htmlFor="startDate">From: </label> 
               <input id="startDate" name="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
               <label htmlFor="endDate"> - To: </label> 
               <input id="endDate" name="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/> <br/>
            </form>) :
            (<>
                <p><strong>Company:</strong> {company} </p>
                <p><strong>Position:</strong> {position} </p>
                <p><strong>Responsibilities:</strong> {role}</p>
                <p><strong>Start Date:</strong> {startDate} </p>
                <p><strong>End Date:</strong> {endDate} </p>
            </>)}
        </div>
    )
}