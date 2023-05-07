"use client"
import React, { useState } from 'react'

const page = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async () => {
        try {
            if (!name || !email || !phone || !message) {
                alert("Please fill all the fields")
            }
            else {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content_Type": "application/json" },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        phone: phone,
                        message: message
                    })
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="contactContainer">
            <div className="contactBox">
                <h1>Contact Us</h1>
                <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
                <textarea cols="30" rows="10" placeholder='Message' onChange={(e) => setMessage(e.target.value)}></textarea>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default page