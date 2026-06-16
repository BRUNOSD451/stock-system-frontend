import "../style/output.css";
import LateralBar from "../../../resources/components/lateralBar/lateralBar";
interface Saida {
  id: number;
  data: string;
  hora: string;
  produto: string;
  quantidade: number;
}

const saidas: Saida[] = [
  {
    id: 1,
    data: "10/06/2026",
    hora: "08:30",
    produto: "Notebook Dell",
    quantidade: 2,
  },
  {
    id: 2,
    data: "10/06/2026",
    hora: "13:10",
    produto: "Mouse Logitech",
    quantidade: 6,
  },
  {
    id: 3,
    data: "10/06/2026",
    hora: "17:45",
    produto: "Monitor LG",
    quantidade: 1,
  },
];

export default function OutputScreen() {
  return (
<div className="app-layout" >
<LateralBar/>

    <div className="stock-container">
        
      <div className="stock-header">
        <h1>Saídas de Estoque</h1>

        <button className="btn-new">
          + Nova Saída
        </button>
      </div>

      <div className="stock-grid">
        {saidas.map((saida) => (
          <div
            key={saida.id}
            className="stock-card"
          >
            <div className="card-top">
              <span className="card-date">
                {saida.data}
              </span>

              <span className="card-hour">
                {saida.hora}
              </span>
            </div>

            <div className="card-body">
              <h3>{saida.produto}</h3>

              <div className="quantity-badge">
                -{saida.quantidade}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
}