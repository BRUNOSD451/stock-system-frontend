import { I } from "../icons/icons"
import { useNavigate } from "react-router-dom"
import "./lateralBar.css"
export default function LateralBar(){
    const navigate = useNavigate()
    function handlesair(){
navigate("/")
}
    return(
          <nav className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="none">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="rgba(255,255,255,.9)"/>
            </svg>
          </div>
          <div className="logo-text">
            StockControl
            <span>Gestão de Estoque</span>
          </div>
        </div>

        <div className="sidebar-nav">
          <div className="nav-section-label">Principal</div>
          <div onClick={()=> navigate("/home")} className="nav-item active">{I.home}Home</div>
          <div onClick={()=> navigate("/productScreen")} className="nav-item">{I.box} Produtos <span className="nav-badge">3</span></div>
          <div onClick={()=>navigate("/categoryScreen")}   className="nav-item">{I.tag} Categorias</div>

          <div className="nav-section-label">Movimentação</div>
          <div  onClick={()=> navigate("/inputScreen")} className="nav-item">{I.arrowDown} Entradas</div>
          <div  onClick={()=> navigate("/outputScreen")}   className="nav-item">{I.arrowUp} Saídas</div>
          <div  onClick={()=> navigate("/itemInputScreen")  }  className="nav-item">{I.list} Itens de Entrada</div>
          <div  onClick={()=> navigate("/itemOutputScreen")}  className="nav-item">{I.list} Itens de Saída</div>

          <div className="nav-section-label">Cadastros</div>
          <div   onClick={()=> navigate("/supplierScreen") }   className="nav-item">{I.truck} Fornecedores</div>
          <div   onClick={()=> navigate("/userScreen") } className="nav-item">{I.users} Usuários</div>

          <div className="nav-section-label">Sistema</div>
          <div  onClick={()=>  navigate("/settingsScreen")} className="nav-item">{I.settings} Configurações</div>
        </div>

        <div className="sidebar-footer">
          <div className="user-chip">
            <div className="user-avatar">JS</div>
            <div className="user-info">
              <div className="user-name">João Silva</div>
              <div className="user-role">Administrador</div>
            </div>
            <button className="btn-logout"  onClick={handlesair} >
       {I.logout}
            </button>
     
          </div>
        </div>
      </nav>
    )
}