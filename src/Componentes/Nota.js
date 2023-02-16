import React from "react";

export default (props) => {
    return(
        <>
            <input type='text' value={props.nota} name={props.nome} onChange={(e) => props.setnota(e)} ></input>
            <br></br>
        </>
    )
}