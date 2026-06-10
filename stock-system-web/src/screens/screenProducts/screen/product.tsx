import "../style/product.css";
import LateralBar from "../../../resources/components/lateralBar/lateralBar";
interface Product {
  id: number;
  nome: string;
  codigo: string;
  preco: number;
  estoque: number;
}

const produtos: Product[] = [
  {
    id: 1,
    nome: "Notebook Dell",
    codigo: "NTB-001",
    preco: 4500,
    estoque: 15,
  },
  {
    id: 2,
    nome: "Mouse Gamer",
    codigo: "MSE-002",
    preco: 199,
    estoque: 32,
  },
  {
    id: 3,
    nome: "Teclado Mecânico",
    codigo: "TCL-003",
    preco: 349,
    estoque: 8,
  },
];

export function ProductScreen() {
  const handleEdit = (id: number) => {
    console.log("Editar", id);
  };

  const handleDelete = (id: number) => {
    console.log("Excluir", id);
  };

  return (
   
     <div className="app-layout">
    <LateralBar />

    <div className="products-container">
      <div className="header">
        <h1>Produtos</h1>
        <button className="btn-add">+ Novo Produto</button>
      </div>

      <div className="products-grid">
        {produtos.map((produto) => (
          <div key={produto.id} className="product-card">
            <div className="product-image">📦</div>

            <div className="product-info">
              <h3>{produto.nome}</h3>

              <span className="code">
                Código: {produto.codigo}
              </span>

              <div className="details">
                <strong>R$ {produto.preco}</strong>

                <div
                  className={`stock ${
                    produto.estoque < 10 ? "low-stock" : ""
                  }`}
                >
                  {produto.estoque} unidades
                </div>
              </div>
            </div>

            <div className="actions">
              <button onClick={() => handleEdit(produto.id)}>
                Editar
              </button>

              <button onClick={() => handleDelete(produto.id)}>
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}