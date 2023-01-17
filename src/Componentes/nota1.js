import React from "react";


export default (props) => {
    return(
        <>
            <div>
                <legend>Informe a nota: {props.num} </legend>
                <input type='text' value={props.nota} onChange={(e) => props.setnota(e.target.value)}></input>
            </div>
        </>
    )
}

