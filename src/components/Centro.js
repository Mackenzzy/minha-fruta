import React from "react";
import '../styles/Centro.css'
const Centro = () => {
    return(

        <div className="centro">
            <form action="/Search" method="get">
                <input className="buscarInput" type="search" name="query" placeholder="Buscar..."></input>
                <button className="buscarBotao" type="submit">Buscar</button>
            </form>

        </div>
    )
}

export default Centro;