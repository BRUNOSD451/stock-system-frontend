import { useEffect, useState } from "react";
import "./modalNewProduct.css";
import { Toaster, toast } from "sonner";
import { CategoryService } from "../../../../resources/services/categoriesService";
import type { Supplier } from "../../../../resources/types/types";
import { SupplierService, supplierService } from "../../../../resources/services/suppliersService";
interface ModalNewProductProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Category {
  categoryId: number;
  categoryName: string;
}

export default function ModalNewProduct({
  isOpen,
  onClose,
}: ModalNewProductProps) {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [idSelectedCategory, setIdSelectedCategory] = useState<number>();
  const [ideSupplierSelected , setIdSupplierSelected] = useState<number>()
  const [suppliers , setSuppliers] = useState<Supplier[]>([])
  const [stock, setStock] = useState("");

  async function loadingData() {
    try {
      const dataCategories = await CategoryService.getAll()
      const suppliers = await SupplierService.getAll()
      setCategories(dataCategories);
      setSuppliers(suppliers)
    } catch (error) {
      
    }
  }



  useEffect(() => {
    if (isOpen) {
      loadingData();
    }
  }, [isOpen]);

  if (!isOpen) return null;



  
  return (
    <div className="modal-overlay">
      <Toaster/>
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

          <div className="form-group">
            <label>Categoria</label>

            <select
              value={idSelectedCategory}
              onChange={(e) =>
                setIdSelectedCategory(Number(e.target.value))
              }
            >
              <option value="">
                Selecione
              </option>

              {categories.map((category) => (
                <option
                  key={category.categoryId}
                  value={category.categoryId}
                >
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>

          <div className="product-row">
            <div className="form-group">
       



 <label>Fornecedor</label>

            <select
              value={ideSupplierSelected}
              onChange={(e) =>
                setIdSupplierSelected(Number(e.target.value))
              }
            >
              <option value="">
                Selecione
              </option>

              {suppliers.map((supplier) => (
                <option
                  key={supplier.supplierId}
                  value={supplier.supplierId}
                >
                  {supplier.supplierName}
                </option>
              ))}
            </select>
     




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

          <button  className="confirm-btn">
            Salvar Produto
          </button>
        </div>
      </div>
    </div>
  );
}