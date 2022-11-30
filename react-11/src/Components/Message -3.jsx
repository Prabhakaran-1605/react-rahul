import React, { useState } from 'react'

const Message = () => {
    let [msg, setMsg] = useState("Hello....");
    let [qty, setQty] = useState(0)
    let [contacts, setContacts] = useState([])
    let [emp, setEmp] = useState({})
    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={}>GM</button>
            <button onClick={}>GN</button>
        </div>
    )
}

export default Message
