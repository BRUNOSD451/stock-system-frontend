import "../style/input.css";
import LateralBar from "../../../resources/components/lateralBar/lateralBar";
interface Entrada {
  id: number;
  data: string;
  hora: string;
  produto: string;
  quantidade: number;
}

const entradas: Entrada[] = [
  {
    id: 1,
    data: "10/06/2026",
    hora: "09:15",
    produto: "Notebook Dell",
    quantidade: 10,
  },
  {
    id: 2,
    data: "10/06/2026",
    hora: "11:40",
    produto: "Mouse Logitech",
    quantidade: 50,
  },
  {
    id: 3,
    data: "10/06/2026",
    hora: "14:20",
    produto: "Monitor LG",
    quantidade: 8,
  },
];

export default function InputScreen() {
  return (
<div className="app-layout" > 

   <LateralBar/>

    <div className="stock-container">
   
      <div className="stock-header">
        <h1>Entradas de Estoque</h1>

        <button className="btn-new">
          + Nova Entrada
        </button>
      </div>

      <div className="stock-grid">
        {entradas.map((entrada) => (
          <div
            key={entrada.id}
            className="stock-card"
          >
            <div className="card-top">
              <span className="card-date">
                {entrada.data}
              </span>

              <span className="card-hour">
                {entrada.hora}
              </span>
            </div>

            <div className="card-body">
              <h3>{entrada.produto}</h3>

              <div className="quantity-badge">
                +{entrada.quantidade}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}