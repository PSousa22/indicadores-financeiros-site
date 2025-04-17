
import { useState } from "react";

export default function Home() {
  const [custo, setCusto] = useState(0);
  const [receita, setReceita] = useState(0);
  const [investimento, setInvestimento] = useState(0);
  const [divida, setDivida] = useState(0);
  const [indicadores, setIndicadores] = useState(null);

  const calcularIndicadores = () => {
    const lucro = receita - custo;
    const margemLucro = receita > 0 ? (lucro / receita) * 100 : 0;
    const retornoInvestimento = investimento > 0 ? (lucro / investimento) * 100 : 0;
    const indiceEndividamento = investimento + lucro > 0 ? (divida / (investimento + lucro)) * 100 : 0;

    setIndicadores({
      lucro,
      margemLucro: margemLucro.toFixed(2),
      retornoInvestimento: retornoInvestimento.toFixed(2),
      indiceEndividamento: indiceEndividamento.toFixed(2),
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>Calculadora de Indicadores Financeiros</h1>
      <input type="number" placeholder="Custo Mensal Total" onChange={e => setCusto(parseFloat(e.target.value))} /><br />
      <input type="number" placeholder="Receita Mensal Total" onChange={e => setReceita(parseFloat(e.target.value))} /><br />
      <input type="number" placeholder="Investimento Total" onChange={e => setInvestimento(parseFloat(e.target.value))} /><br />
      <input type="number" placeholder="Dívida Total" onChange={e => setDivida(parseFloat(e.target.value))} /><br />
      <button onClick={calcularIndicadores}>Calcular Indicadores</button>

      {indicadores && (
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Lucro Mensal:</strong> R$ {indicadores.lucro.toFixed(2)}</p>
          <p><strong>Margem de Lucro:</strong> {indicadores.margemLucro}%</p>
          <p><strong>ROI:</strong> {indicadores.retornoInvestimento}%</p>
          <p><strong>Índice de Endividamento:</strong> {indicadores.indiceEndividamento}%</p>
        </div>
      )}
    </div>
  );
}
