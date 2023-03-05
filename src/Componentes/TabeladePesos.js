export default () => {

  const espacamento = {
    marginBottom : '15px'
  }

  return (
    <>
      <table border="1" style={{ borderCollapse: "collapse" }} style={espacamento}>
        <thead>
          <th>
            <td>Classificação</td>
          </th>
          <th>
            <td>IMC</td>
          </th>
        </thead>

        <tbody>
          <tr>
            <td>Abaixo do peso</td>
            <td>Abaixo de 18,5</td>
          </tr>

          <tr>
            <td>Peso Normal</td>
            <td>Abaixo de 18,5 e 24,9</td>
          </tr>

          <tr>
            <td>Obesidade Grau I</td>
            <td>Entre 30 e 34,9</td>
          </tr>

          <tr>
            <td>Obesidade Grau II</td>
            <td>Entre 35 e 39,9</td>
          </tr>

          <tr>
            <td>Obesidade Grau III ou Mórbida</td>
            <td>Maior que 40</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
