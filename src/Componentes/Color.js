import React from "react";

export default (props) => {

    const retCor = (c) => {
        if(c==1){
            return props.cor1
        } else if(c==2){
            return props.cor2
        } else{
            return props.cor3
        }
    }

    const mudarCor = () => {
        props.setcor(props.statecor+1)
        if(props.statecor > 2){
            props.setcor(1)
        }
    }

    return(
        <>
            <h2 style={retCor(props.statecor)}>Leonardo Augusto - Desenvolvedor Front - end</h2>
            <button onClick={()=> mudarCor()}>Muda cor</button>
        </>
    )
}