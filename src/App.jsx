import React, { useEffect, useState } from "react";

export default () => {
  const [contagem, setcontagem] = useState(0);

  useEffect(() => {
    console.log("Página carregada!");
    document.title = "Contagem " + contagem;
  });

  return (
    <>
      <p>Contagem: {contagem} </p>
      <button onClick={() => setcontagem(contagem + 1)}>Contar</button>
    </>
  );
};
