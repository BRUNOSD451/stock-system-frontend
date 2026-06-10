import "../style/homeStyle.css";

import ModalNewInput from "../modals/modalNewInput/modalNewInput";
import ModalNewOutput from "../modals/modalNewOutput/modalNewOutput";
import { useState } from "react";
import { I } from "../../../resources/components/icons/icons";
import LateralBar from "../../../resources/components/lateralBar/lateralBar";
import ModalNewProduct from "../modals/modalNewProduct/modalNewProduct";
import ModalNewSupplier from "../modals/modalNewSupplier/modalNewSupplier";




export default function HomeScreen() {

const [isOpenModalNewInput,setIsopenModalNewInput] : any = useState(false)
const [isOpenModalNewOutput,setIsopenModalNewOutput] : any = useState(false)
const [isOpenModalNewSupplier,setIsopenModalNewSupplier] : any = useState(false)
const [isOpenModalNewProduct,setIsopenModalNewProduct] : any = useState(false)



  return (
    <div className="shell">
   
  <LateralBar/>

      <div className="main">

        <header className="topbar">
          <div className="topbar-title">
            <h1>Dashboard</h1>
            <p>Quinta-feira, 05 de junho de 2025</p>
          </div>

          <div className="topbar-search">
            {I.search}
            <input type="text" placeholder="Buscar produto, fornecedor…" readOnly />
          </div>

          <div className="topbar-actions">
            <div className="icon-btn">
              {I.bell}
              <span className="notif-dot" />
            </div>
            <div className="icon-btn">{I.settings}</div>
          </div>
        </header>

        <div className="content">

          <div className="kpi-grid">
            <div className="kpi-card blue">
              <div className="kpi-top">
                <div className="kpi-icon blue">{I.box}</div>
                <div className="kpi-trend up">▲ 12%</div>
              </div>
              <div>
                <div className="kpi-value">1.284</div>
                <div className="kpi-label">Total de Produtos cadastrados</div>
              </div>
            </div>

            <div className="kpi-card teal">
              <div className="kpi-top">
                <div className="kpi-icon teal">{I.arrowDown}</div>
                <div className="kpi-trend up">▲ 8%</div>
              </div>
              <div>
                <div className="kpi-value">347</div>
                <div className="kpi-label">Entradas este mês</div>
              </div>
            </div>

            <div className="kpi-card orange">
              <div className="kpi-top">
                <div className="kpi-icon orange">{I.arrowUp}</div>
                <div className="kpi-trend down">▼ 3%</div>
              </div>
              <div>
                <div className="kpi-value">218</div>
                <div className="kpi-label">Saídas este mês</div>
              </div>
            </div>

            <div className="kpi-card red">
              <div className="kpi-top">
                <div className="kpi-icon red">{I.alert}</div>
                <div className="kpi-trend down">▲ 2</div>
              </div>
              <div>
                <div className="kpi-value">7</div>
                <div className="kpi-label">Itens em estoque crítico</div>
              </div>
            </div>
          </div>

   
          <div className="section-header">
            <h2>Ações Rápidas</h2>
          </div>
          <div className="quick-actions">
            <button className="quick-btn" type="button" onClick={()=> setIsopenModalNewInput(true) } >
              <div className="quick-btn-icon" style={{ background: "var(--teal-dim)", color: "var(--teal)" }}>{I.arrowDown}</div>
              <span className="quick-btn-label">Nova Entrada</span>
            </button>
            <button className="quick-btn" type="button"  onClick={()=> setIsopenModalNewOutput(true)}  >
              <div className="quick-btn-icon" style={{ background: "var(--orange-dim)", color: "var(--orange)" }}>{I.arrowUp}</div>
              <span className="quick-btn-label">Nova Saída</span>
            </button>
            <button className="quick-btn" type="button"  onClick={()=> setIsopenModalNewProduct(true)} >
              <div className="quick-btn-icon" style={{ background: "var(--blue-dim)", color: "var(--blue-light)" }}>{I.box}</div>
              <span className="quick-btn-label">Cadastrar Produto</span>
            </button>
            <button className="quick-btn" type="button"  onClick={()=> setIsopenModalNewSupplier(true) } >
              <div className="quick-btn-icon" style={{ background: "var(--purple-dim)", color: "var(--purple)" }}>{I.truck}</div>
              <span className="quick-btn-label">Novo Fornecedor</span>
            </button>
          </div>

       
        </div>
      </div>
      <ModalNewInput 
      isOpen={isOpenModalNewInput}
      onClose={()=>setIsopenModalNewInput(false)}
      />

<ModalNewOutput
     isOpen={isOpenModalNewOutput}
      onClose={()=>setIsopenModalNewOutput(false)}
/>

<ModalNewProduct
     isOpen={isOpenModalNewProduct}
      onClose={()=>setIsopenModalNewProduct(false)}
/>



<ModalNewSupplier
     isOpen={isOpenModalNewSupplier}
      onClose={()=>setIsopenModalNewSupplier(false)}
/>

    </div>
  );
}