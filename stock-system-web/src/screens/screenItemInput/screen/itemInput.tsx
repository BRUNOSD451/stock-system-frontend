import "../style/itemInput.css";
import LateralBar from "../../../resources/components/lateralBar/lateralBar";

interface ItemInput {
  id: number;
  data: string;
  hora: string;
  produto: string;
  quantidade: number;
  entradaId: number;
}

const itensEntrada: ItemInput[] = [
  {
    id: 1,
    data: "10/06/2026",
    hora: "09:15",
    produto: "Notebook Dell",
    quantidade: 5,
    entradaId: 1001,
  },
  {
    id: 2,
    data: "10/06/2026",
    hora: "09:15",
    produto: "Mouse Logitech",
    quantidade: 20,
    entradaId: 1001,
  },
  {
    id: 3,
    data: "11/06/2026",
    hora: "14:30",
    produto: "Monitor LG",
    quantidade: 8,
    entradaId: 1002,
  },
];

export default function ItemInputScreen() {
  return (
    <div className="app-layout">
      <LateralBar />

      <div className="items-container">
        <div className="items-header">
          <h1>Itens de Entrada</h1>

          <button className="btn-new">
            + Novo Item
          </button>
        </div>

        <div className="items-grid">
          {itensEntrada.map((item) => (
            <div
              key={item.id}
              className="item-card"
            >
              <div className="card-top">
                <span className="movement-id">
                  Entrada #{item.entradaId}
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

                <div className="quantity-badge input">
                  +{item.quantidade}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}