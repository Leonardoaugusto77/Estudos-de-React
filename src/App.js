import React,{useState, useEffect} from "react";
import Pagina01 from "./Componentes/Pagina01";
import Pagina02 from "./Componentes/Pagina02";


export default () => {

    const [pagina, setpagina] = useState(0)

    useEffect( // depois que eu carregar a pagina preciso verificar o paramentro que está vindo para redenrizar o componente
        ()=> {
            const url = window.location.href // pega url            const res = url.split('?')
            setpagina(res[1])
        }
    )


    const linksP = (p) => {
        if(p == 1){
            window.open('http://localhost:3000/?1' , '_self') // Usamos ? para passagem de paramentros
        } else if( p == 2){
            window.open('http://localhost:3000/?2' , '_self') // Usamos ? para passagem de paramentros
        }
    }

    const retornarP = () => {
        if(pagina == 1){
            return <Pagina01/>
        } else if(pagina == 2){
            return <Pagina02/>
        } else {
           return <div>
           
                    <button onClick={()=> linksP(1)} >Página 01</button>
                    <button onClick={()=> linksP(2)} >Página 02</button>
                </div>
        }
    }

    return(
        <>
            {retornarP()}
        </>
    )
}