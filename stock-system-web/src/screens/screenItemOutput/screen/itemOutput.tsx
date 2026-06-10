import "../style/itemOutput.css";
import LateralBar from "../../../resources/components/lateralBar/lateralBar";

interface ItemOutput {
  id: number;
  data: string;
  hora: string;
  produto: string;
  quantidade: number;
  saidaId: number;
}

const itensSaida: ItemOutput[] = [
  {
    id: 1,
    data: "10/06/2026",
    hora: "11:20",
    produto: "Notebook Dell",
    quantidade: 2,
    saidaId: 2001,
  },
  {
    id: 2,
    data: "10/06/2026",
    hora: "11:20",
    produto: "Mouse Logitech",
    quantidade: 4,
    saidaId: 2001,
  },
  {
    id: 3,
    data: "11/06/2026",
    hora: "16:50",
    produto: "Monitor LG",
    quantidade: 1,
    saidaId: 2002,
  },
];

export default function ItemOutputScreen() {
  return (
    <div className="app-layout">
      <LateralBar />

      <div className="items-container">
        <div className="items-header">
          <h1>Itens de Saída</h1>

          <button className="btn-new">
            + Novo Item
          </button>
        </div>

        <div className="items-grid">
          {itensSaida.map((item) => (
            <div
              key={item.id}
              className="item-card"
            >
              <div className="card-top">
                <span className="movement-id">
                  Saída #{item.saidaId}
                </span>

                <span className="card-hour">
                  {item.hora}
                </span>
              </div>

              <div className="card-body">
                <h3>{item.produto}</h3>

                <span className="card-date">
                  {item.data}
                </span>

                <div className="quantity-badge output">
                  -{item.quantidade}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}