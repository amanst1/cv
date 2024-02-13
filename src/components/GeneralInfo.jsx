/* eslint-disable react/prop-types */
import { useState } from "react"

export default function GeneralInfo({isSubmitted}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    return(
        <div>
            <h3>General Information</h3>
            {!isSubmitted ? 
            (<form >
               <label htmlFor="name">Name: </label> 
               <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/> <br/>
               <label htmlFor="email">Email: </label> 
               <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>
               <label htmlFor="phone">Phone: </label> 
               <input id="phone" name="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}/> <br/>
            </form>) : 
            
            (<>
             <p><strong>Name:</strong> {name} </p>
             <p><strong>Phone:</strong> {phone} </p>
             <p><strong>Email:</strong> {email}</p>
             </>)}

        </div>
    )
}