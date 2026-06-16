import { I } from "../icons/icons"
import { useNavigate, useLocation } from "react-router-dom"
import "./lateralBar.css"
export default function LateralBar(){
    const navigate = useNavigate()
    const location = useLocation()
    function handlesair(){
navigate("/")
}
    function isActive(path: string) {
        return location.pathname === path ? "nav-item active" : "nav-item"
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
          <div onClick={()=> navigate("/home")} className={isActive("/home")}>{I.home}Home</div>
          <div onClick={()=> navigate("/productScreen")} className={isActive("/productScreen")}>{I.box} Produtos</div>
          <div onClick={()=>navigate("/categoryScreen")}   className={isActive("/categoryScreen")}>{I.tag} Categorias</div>

          <div className="nav-section-label">Movimentação</div>
          <div  onClick={()=> navigate("/inputScreen")} className={isActive("/inputScreen")}>{I.arrowDown} Entradas</div>
          <div  onClick={()=> navigate("/outputScreen")}   className={isActive("/outputScreen")}>{I.arrowUp} Saídas</div>
          <div  onClick={()=> navigate("/itemInputScreen")  }  className={isActive("/itemInputScreen")}>{I.list} Itens de Entrada</div>
          <div  onClick={()=> navigate("/itemOutputScreen")}  className={isActive("/itemOutputScreen")}>{I.list} Itens de Saída</div>

          <div className="nav-section-label">Cadastros</div>
          <div   onClick={()=> navigate("/supplierScreen") }   className={isActive("/supplierScreen")}>{I.truck} Fornecedores</div>
          <div   onClick={()=> navigate("/userScreen") } className={isActive("/userScreen")}>{I.users} Usuários</div>

          <div className="nav-section-label">Sistema</div>
          <div  onClick={()=>  navigate("/settingsScreen")} className={isActive("/settingsScreen")}>{I.settings} Configurações</div>
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
