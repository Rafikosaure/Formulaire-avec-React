import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const formObject = {
    firstName,
    lastName,
    email,
    message
  }

  const dataStorage = () => {
    sessionStorage.clear()
    for (let item in formObject) {
      // console.log(item, formObject[item])
      sessionStorage.setItem(item, formObject[item])
    }
  }

  return (
    <>
      <div className='div-form'>
        <form onSubmit={dataStorage}>
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
