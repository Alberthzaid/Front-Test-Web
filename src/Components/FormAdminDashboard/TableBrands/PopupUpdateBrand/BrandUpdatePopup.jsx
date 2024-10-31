import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getDataById, update } from '../../../../Helpers/ApiConfig/Controllers/ControllersFetch';
import { API_PUT_BRAND , API_GET_BRAND} from '../../../../Helpers/ApiConfig/Controllers/Apis';
import './BrandUpdatePopup.css';

export const BrandUpdatePopup = ({ brandId, onClose }) => {
    const { register, handleSubmit, setValue, reset } = useForm();

    useEffect(() => {
        const fetchBrandData = async () => {
            const data = await getDataById(`${API_GET_BRAND}/${brandId}`);
            if (data) {
                Object.keys(data).forEach(key => setValue(key, data[key]));
            }
        };
        if (brandId) fetchBrandData();
    }, [brandId, setValue]);

    const onSubmit = async (data) => {
        reset();
        onClose();
    };

    return (
        <div className="BrandPopup open">
            <button onClick={onClose} className="close-btn">X</button>
            <h2>Actualizar Marca</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <input {...register('nombre')} placeholder="Nombre de la Marca" />
                </div>
                <div className="input-group">
                    <input {...register('referencia')} placeholder="Referencia de la Marca" />
                </div>
                <button type="submit">Actualizar Marca</button>
            </form>
        </div>
    );
};
