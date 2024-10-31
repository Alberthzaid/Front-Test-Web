import React, { useEffect, useState } from 'react';
import './TableBrands.css';
import { getData } from '../../../Helpers/ApiConfig/Controllers/ControllersFetch.js';
import { API_DELETE_BRAND, API_PUT_BRAND } from '../../../Helpers/ApiConfig/Controllers/Apis.js';
import { deletes } from '../../../Helpers/ApiConfig/Controllers/ControllersFetch.js';
import { BrandUpdatePopup } from './PopupUpdateBrand/BrandUpdatePopup.jsx';
import { useNavigate } from 'react-router-dom';

export const TableBrand = ({ api }) => {
    const [brands, setBrands] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getBrandList = async () => {
            try {
                const data = await getData(api);
                console.log(data)
                setBrands(data);
            } catch (error) {
                console.error(error);
            }
        };
        getBrandList();
    }, [api]);

    const handleDelete = async (id) => {
        await deletes(API_DELETE_BRAND, id);
        setBrands(brands.filter((brand) => brand.id !== id));
    };

    const handleUpdate = (brand) => {
        setSelectedBrand(brand);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedBrand(null);
    };

    const handleUpdateBrand = async (updatedBrand) => {
        try {
            await fetch(`${API_PUT_BRAND}/${updatedBrand.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBrand),
            });

            // Actualizar la lista de marcas en la tabla después de la actualización exitosa
            setBrands(brands.map((brand) => (brand.id === updatedBrand.id ? updatedBrand : brand)));
            handleClosePopup();
        } catch (error) {
            console.error("Error actualizando la marca:", error);
        }
    };

    return (
        <section className="tableBrands">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Reference</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nombre ? item.nombre : "empty"}</td>
                            <td>{item.referencia}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>Eliminar</button>
                                <button onClick={() => handleUpdate(item)}>Actualizar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isPopupOpen && (
                <BrandUpdatePopup
                    brand={selectedBrand}
                    onClose={handleClosePopup}
                    onUpdate={handleUpdateBrand}
                />
            )}
        </section>
    );
};
