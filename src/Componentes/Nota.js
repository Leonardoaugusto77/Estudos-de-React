import React from "react";

export default (props) => {
    return(
        <>
            <input type='text' value={props.nota} name='notas' ></input>
            <br></br>
            <input type='text' value={props.nota} name='notas2' ></input>
            <br></br>
            <input type='text' value={props.nota} name='nota3' ></input>
            <br></br>
            <input type='text' value={props.nota} name='notas4' ></input>
            <br></br>
            <input type='text' value={props.nota} name='nota5' ></input>
        </>
    )
}