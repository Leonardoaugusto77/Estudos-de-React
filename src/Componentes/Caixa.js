import React from 'react'


export default (props) => {
  return(
    <>  
        <p>{props.site}</p>
        {props.children[0]}
    </>
  )
}