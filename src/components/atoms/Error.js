import React, { useEffect, useState } from 'react'
import {UncontrolledAlert} from 'reactstrap'
function Error() {
    const [display,setDisplay]=useState('d-none')
    useEffect(() => {
      setTimeout(()=>{
        setDisplay('d-bloc')
      },10)
    })
    
  return (
    <>
        <UncontrolledAlert color='danger ' className={`${display} `} style={{width:"300px",position:"absolute",top:"10px",right:"20px"}}
        >I am a global Error wich closes manually  </UncontrolledAlert>

    </>
    )
}

export default Error