import React from "react";

export default (props) => {

    const Style = {
        display: "flex",
        flexDirection: 'column',
        justifyContent : "rigth",
    }

    return(
        <div style={Style}>
            <label style={Style}>
                Peso
                <input type='text' value={props.varP} onChange={ (e)=> {props.varSetP(e.target.value)}}></input>
            </label>

            <label>
                Altura
                <input type='text' value={props.varA} onChange={ (e)=> {props.varSetA(e.target.value)}}></input>
            </label>
        </div>
    )
}