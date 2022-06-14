import React, { useState } from 'react'
import Success from '../atoms/Success'

function LoginForm() {
    const [display,setDisplay]=useState('d-none')

  return (
    <div className='d-flex flex-column justify-content-between px-4 py-4  border  border-dark 'style={{width:"30%",height:"300px"}}>
        <Success display={display} setDisplay={setDisplay} />
        <input type="text" placeholder='Email Adress' className='mt-5' />
        <input type="text" placeholder='Password' className='mt-5' />
        <button className='align-self-end' onClick={()=>{setDisplay('d-block')}} >Button</button>
    </div>
    )
}

export default LoginForm