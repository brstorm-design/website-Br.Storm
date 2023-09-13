import React, { useRef, useState } from 'react'

export default function Form() {
  const [msg, setMsg] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('null');
  const submitButton = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    /* setSubmitted(true); */
    console.warn(msg + ' SUBMITTED');

    let data = {
      msg
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.error('error', err))
  }

  return (
    <div>
      <form className="d-flex align-items-center" onSubmit={handleSubmit}>
        <input placeholder="Digite uma mensagem..." onChange={e => setMsg(e.target.value)} className="" type="text" name="msg" id="msg" />
        <button ref={submitButton} disabled={submitted} type="submit" className="btn">Enviar</button>
      </form>
      <p>Submit Status: {submitStatus}</p>
    </div>
  )
}