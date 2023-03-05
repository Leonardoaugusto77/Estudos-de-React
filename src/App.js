import { useState } from "react";
import React from "react";
import Filter from "./Componentes/Filter";

export default () => {
  const [categoria, setcategoria] = useState("");

  const carros = [
    {
      categoria: "Esporte",
      preco: "11000",
      modelo: "Golf GTI",
    },
    {
      categoria: "Esporte",
      preco: "12000",
      modelo: "Camaro",
    },
    {
      categoria: "SUV",
      preco: "85000",
      modelo: "HRV",
    },
    {
      
      categoria: "SUV",
      preco: "83000",
      modelo: "T - Cross",
    },
    { 
      categoria: "Utilitario",
      preco: "125000",
      modelo: "Hilux",
    },
    {
      categoria: "Utilitario",
      preco: "90000",
      modelo: "Ranger",
    }
  ];

  const line = (c) => {
    const li = [];
    carros.forEach((carro) => {
      if (
        carro.categoria.toUpperCase()==c.toUpperCase() ||
        c.toUpperCase() == ""
      ) {
        li.push(
          <tr>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
          </tr>
        );
      }
    });

    return li;
  };

  const table = (c) => {
    return (
      <>
      <table border="1" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Modelo</th>
          </tr>
        </thead>

        <tbody>{line(c)}</tbody>
      </table>

      <br></br>

      <Filter c={c} setc={setcategoria} />
  </>
    );
   
  };

  

  return <>{table(categoria)}</>;
};
