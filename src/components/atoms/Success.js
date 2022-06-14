import React, { useEffect} from 'react'
import { Alert } from 'reactstrap'

function Success({display,setDisplay}) {

    useEffect(()=>{

        setTimeout( ()=> {
            setDisplay('d-none')
        },2000)
    
    },[display])
  return (
    <>
            <Alert color='success' className={`${display} `}  >I am a local success wich closes automatically</Alert>

    </>
  )
}

export default Success