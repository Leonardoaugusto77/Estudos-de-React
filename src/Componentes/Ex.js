import { useState } from "react";
import React from "react";

export default () => {

    const [teste, setteste] = useState('')
    return (
        <>
            <label>Digite algo:</label>
            <input type='text' value={teste} onChange={(e) => setteste(e.target.value)}></input>
            <br></br>

            <p>{teste}</p>

        </>
    )
}