import React, { useEffect, useState } from 'react';
import { getData, deletes } from '../../../Helpers/ApiConfig/Controllers/ControllersFetch';
import { API_DELETE_PRODUCTS } from '../../../Helpers/ApiConfig/Controllers/Apis';
import { ProductUpdatePopup } from './PopupUpdateproducts/ProductUpdatePopup';

export const TableStock = ({ api }) => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);

    useEffect(() => {
        const getProductsList = async () => {
            try {
                const data = await getData(api);
                setProducts(data);
            } catch (error) {
                throw error;
            }
        };
        getProductsList();
    }, [api]);

    const handleDelete = async (id) => {
        await deletes(API_DELETE_PRODUCTS, id);
        setProducts(products.filter((product) => product.id !== id));
    };

    const handleUpdate = (id) => {
        setSelectedProductId(id);
    };

    return (
        <section className="tableProducts">
            {selectedProductId && (
                <ProductUpdatePopup 
                    productId={selectedProductId} 
                    onClose={() => setSelectedProductId(null)} 
                />
            )}
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Brand</th>
                        <th>Load Date</th>
                        <th>Description</th>
                        <th>Unit</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img src={item.imagen || 'ruta/a/imagen/default.png'} alt={item.nombre || 'Sin imagen'} style={{ width: '50px', height: '50px' }} />
                            </td>
                            <td>{item.nombre || "empty"}</td>
                            <td>{item.cantidad_inventario || "empty"}</td>
                            <td>{item.marca || "empty"}</td>
                            <td>{item.fecha_embarque || "empty"}</td>
                            <td>{item.observaciones || "empty"}</td>
                            <td>{item.unidad_medida || "empty"}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>Eliminar</button>
                                <button onClick={() => handleUpdate(item.id)}>Actualizar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};
