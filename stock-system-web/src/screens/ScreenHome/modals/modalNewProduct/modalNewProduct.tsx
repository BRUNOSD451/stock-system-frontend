import { useState } from "react";
import "./modalNewProduct.css";

interface ModalNewProductProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalNewProduct({
  isOpen,
  onClose,
}: ModalNewProductProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Novo Produto</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label>Nome do Produto</label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          </div>

          <div className="product-row">
            <div className="form-group">
              
            <div className="form-group">
              <label>Categoria</label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              >
                <option value="">
                  Selecione
                </option>

                <option>
                  Informática
                </option>

                <option>
                  Periféricos
                </option>

                <option>
                  Monitores
                </option>
              </select>
            </div>
            </div>

          </div>

          <div className="product-row">
            <div className="form-group">
              <label>Preço</label>

              <input
                type="number"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Estoque Inicial</label>

              <input
                type="number"
                value={stock}
                onChange={(e) =>
                  setStock(e.target.value)
                }
              />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancelar
          </button>

          <button className="confirm-btn">
            Salvar Produto
          </button>
        </div>
      </div>
    </div>
  );
}