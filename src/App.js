import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const formObject = {
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Message: message
  }

  const dataStorage = () => {
    for (let item in formObject) {
      sessionStorage.setItem(item, formObject[item])
    }
  }

  return (
    <>
      <div className="App">
        <button onClick={() => setCount(count-1)}>-</button>
        <div>{count}</div>
        <button onClick={() => setCount(count+1)}>+</button>
      </div>
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
