import React from 'react'
import {UncontrolledAlert} from 'reactstrap'
function Error({display}) {

    
  return (
    <>
        <UncontrolledAlert color='danger relative' className={`${display}`}
        >I am a global Error wich closes manually  </UncontrolledAlert>

    </>
    )
}

export default Error