import React from 'react';
import { useForm } from 'react-hook-form';
import { create, update } from '../../../Helpers/ApiConfig/Controllers/ControllersFetch';
import { API_POST_BRAND, API_PUT_BRAND } from '../../../Helpers/ApiConfig/Controllers/Apis';
import './BrandsForm.css';

export const BrandForm = ({ isUpdate = false, brandData }) => {
    const { register, handleSubmit, reset } = useForm({ defaultValues: brandData });

    const onSubmit = async (data) => {
        const url = isUpdate ? `${API_PUT_BRAND}/${data.id}` : API_POST_BRAND;
        isUpdate ? await update(url, data.id, data) : await create(url, data);
        reset();
    };

    return (
        <div className="form-container">
            <h2>{isUpdate ? 'Actualizar Marca' : 'Crear Marca'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <input {...register('nombre', { required: true })} required placeholder=" " />
                    <label>Nombre de la Marca</label>
                </div>
                <div className="input-group">
                    <input {...register('referencia', { required: true })} required placeholder=" " />
                    <label>Referencia de la Marca</label>
                </div>
                <button type="submit">{isUpdate ? 'Actualizar Marca' : 'Crear Marca'}</button>
            </form>
        </div>
    );
};
