import React from "react";

export default (props) => {
    
    return(
    
    <>
    
    <p>Valor do State num em Numeros : {props.num} </p>
    <button onClick={ ()=> props.setnum(props.num+10) }>Adiconar</button> 

    </>
    )
}