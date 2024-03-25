import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  // const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contact')) ?? [])

  const formObject = {
    firstName,
    lastName,
    email,
    message
  }

  const handleSubmit = () => {
    // e.PreventDefault()

    for (let item in formObject) {
      sessionStorage.setItem(item, formObject[item])
    }
    /* const newArray = [...contacts, formObject];
    setContacts(newArray)
    localStorage.setItem('contact', JSON.stringify(newArray))
    setFirstName('')
    setLastName('')
    setEmail('')
    setMessage('') */
  }
 
  return (
    <>
      <div className='div-form'>
        <form onSubmit={handleSubmit}>
          <label>
            Prénom :
            <input className='input-form' type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required />
            Nom :
            <input className='input-form' type="text" value={lastName} onChange={e => setLastName(e.target.value)} required />
            Email :
            <input className='input-form' type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            Message :
            <input className='input-form' type="text" value={message} onChange={e => setMessage(e.target.value)} required />
          </label>
          <input className='btn-submit' type="submit" value="Envoyer" />
        </form>
      </div>
    </>
  );
}

export default App;
