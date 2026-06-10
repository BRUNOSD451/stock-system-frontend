import "../style/suppliers.css";
import LateralBar from "../../../resources/components/lateralBar/lateralBar";

interface Supplier {
  id: number;
  nome: string;
  cnpj: string;
  email: string;
  telefone: string;
}

const fornecedores: Supplier[] = [
  {
    id: 1,
    nome: "Tech Distribuidora",
    cnpj: "12.345.678/0001-10",
    email: "contato@tech.com",
    telefone: "(41) 99999-1111",
  },
  {
    id: 2,
    nome: "Global Informática",
    cnpj: "98.765.432/0001-20",
    email: "vendas@global.com",
    telefone: "(41) 99999-2222",
  },
  {
    id: 3,
    nome: "Master Eletrônicos",
    cnpj: "45.678.901/0001-30",
    email: "comercial@master.com",
    telefone: "(41) 99999-3333",
  },
];

export default function SupplierScreen() {
  const handleEdit = (id: number) => {
    console.log("Editar", id);
  };

  const handleDelete = (id: number) => {
    console.log("Excluir", id);
  };

  return (
    <div className="app-layout">
      <LateralBar />

      <div className="supplier-container">
        <div className="supplier-header">
          <h1>Fornecedores</h1>

          <button className="btn-new-supplier">
            + Novo Fornecedor
          </button>
        </div>

        <div className="search-container">
          <input
            className="search-input"
            placeholder="Pesquisar fornecedor..."
          />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CNPJ</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {fornecedores.map((fornecedor) => (
                <tr key={fornecedor.id}>
                  <td>{fornecedor.nome}</td>

                  <td>{fornecedor.cnpj}</td>

                  <td>{fornecedor.email}</td>

                  <td>{fornecedor.telefone}</td>

                  <td>
                    <div className="actions">
                      <button
                        className="btn-edit"
                        onClick={() =>
                          handleEdit(fornecedor.id)
                        }
                      >
                        Editar
                      </button>

                      <button
                        className="btn-delete"
                        onClick={() =>
                          handleDelete(fornecedor.id)
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