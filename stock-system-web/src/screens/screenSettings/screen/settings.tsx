import "../style/settings.css";
import LateralBar from "../../../resources/components/lateralBar/lateralBar";

export default function SettingsScreen() {
  return (
    <div className="app-layout">
      <LateralBar />

      <div className="settings-container">
        <div className="settings-header">
          <h1>Configurações</h1>
        </div>

        <div className="settings-grid">

          <div className="settings-card">
            <h2>Empresa</h2>

            <div className="form-group">
              <label>Nome da Empresa</label>
              <input type="text" value="StockControl LTDA" />
            </div>

            <div className="form-group">
              <label>CNPJ</label>
              <input type="text" value="12.345.678/0001-00" />
            </div>

            <button className="btn-save">
              Salvar
            </button>
          </div>

          <div className="settings-card">
            <h2>Controle de Estoque</h2>

            <div className="form-group">
              <label>Estoque Mínimo Padrão</label>
              <input type="number" value="10" />
            </div>

            <div className="form-group">
              <label>Permitir Estoque Negativo</label>

              <select>
                <option>Não</option>
                <option>Sim</option>
              </select>
            </div>

            <button className="btn-save">
              Salvar
            </button>
          </div>

          <div className="settings-card">
            <h2>Notificações</h2>

            <div className="checkbox-group">
              <input type="checkbox" />
              <span>Alertar estoque baixo</span>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" />
              <span>Alertar novas entradas</span>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" />
              <span>Alertar novas saídas</span>
            </div>

            <button className="btn-save">
              Salvar
            </button>
          </div>

          <div className="settings-card">
            <h2>Segurança</h2>

            <div className="form-group">
              <label>Tempo de Sessão (minutos)</label>
              <input type="number" value="30" />
            </div>

            <div className="form-group">
              <label>Tamanho Mínimo da Senha</label>
              <input type="number" value="8" />
            </div>

            <button className="btn-save">
              Salvar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}