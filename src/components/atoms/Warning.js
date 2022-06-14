import React, { useEffect } from 'react'
import { Alert } from 'reactstrap'

function Warning({display,setDisplay}) {

    useEffect(()=>{
        setTimeout( ()=> {
            setDisplay('d-none')
        },2000)
    
    },[display])
  return (
    <Alert color='warning' className={`${display}`} >I am a local warning wich closes automatically</Alert>
    )
}

export default Warning