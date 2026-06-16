import "../style/users.css";
import LateralBar from "../../../resources/components/lateralBar/lateralBar";

interface User {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cargo: string;
}

const usuarios: User[] = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@empresa.com",
    telefone: "(41) 99999-1111",
    cargo: "Administrador",
  },
  {
    id: 2,
    nome: "Maria Souza",
    email: "maria@empresa.com",
    telefone: "(41) 99999-2222",
    cargo: "Supervisor",
  },
  {
    id: 3,
    nome: "Carlos Oliveira",
    email: "carlos@empresa.com",
    telefone: "(41) 99999-3333",
    cargo: "Funcionário",
  },
];

export default function UserScreen() {
  const handleEdit = (id: number) => {
    console.log("Editar", id);
  };

  const handleDelete = (id: number) => {
    console.log("Excluir", id);
  };

  return (
    <div className="app-layout">
      <LateralBar />

      <div className="users-container">
        <div className="users-header">
          <h1>Usuários</h1>

          <button className="btn-new-user">
            + Novo Usuário
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar usuário..."
          />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Cargo</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.nome}</td>

                  <td>{usuario.email}</td>

                  <td>{usuario.telefone}</td>

                  <td>
                    <span
                      className={`role-badge ${
                        usuario.cargo
                          .toLowerCase()
                          .replace("á", "a")
                      }`}
                    >
                      {usuario.cargo}
                    </span>
                  </td>

                  <td>
                    <div className="actions">
                      <button
                        className="btn-edit"
                        onClick={() =>
                          handleEdit(usuario.id)
                        }
                      >
                        Editar
                      </button>

                      <button
                        className="btn-delete"
                        onClick={() =>
                          handleDelete(usuario.id)
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