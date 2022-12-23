import React from "react";

export default () => {

  const destaque = {
    color:'blue',
    fontSize:'20px'
  }

    return(
       <>
         <div className='Container'>

          <h2 style={{color:'f00', fontSize:'25px'}} >Leonardo Augusto</h2>
          <strong>Desenvolvedor <span style={destaque}>Front - end</span></strong>
         </div>
       </> 
    )
}