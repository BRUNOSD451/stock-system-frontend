import "../style/category.css";
import LateralBar from "../../../resources/components/lateralBar/lateralBar";
interface Category {
  id: number;
  nome: string;
  descricao: string;
  produtos: number;
}

const categorias: Category[] = [
  {
    id: 1,
    nome: "Informática",
    descricao: "Computadores e notebooks",
    produtos: 35,
  },
  {
    id: 2,
    nome: "Periféricos",
    descricao: "Mouse, teclado e acessórios",
    produtos: 18,
  },
  {
    id: 3,
    nome: "Monitores",
    descricao: "Monitores e telas",
    produtos: 12,
  },
];

export function CategoryScreen() {
  const handleEdit = (id: number) => {
    console.log("Editar", id);
  };

  const handleDelete = (id: number) => {
    console.log("Excluir", id);
  };

  return (
    <div className="app-layout">
      <LateralBar />
      <div className="categories-container">
        <div className="categories-header">
          <h1>Categorias</h1>

          <button className="btn-new-category">
            + Nova Categoria
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar categoria..."
            className="search-input"
          />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Produtos</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {categorias.map((categoria) => (
                <tr key={categoria.id}>
                  <td>{categoria.nome}</td>

                  <td>{categoria.descricao}</td>

                  <td>
                    <span className="badge">
                      {categoria.produtos}
                    </span>
                  </td>

                  <td>
                    <div className="actions">
                      <button
                        className="btn-edit"
                        onClick={() =>
                          handleEdit(categoria.id)
                        }
                      >
                        Editar
                      </button>

                      <button
                        className="btn-delete"
                        onClick={() =>
                          handleDelete(categoria.id)
                        }
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}