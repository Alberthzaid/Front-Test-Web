import React from 'react';
import { useForm } from 'react-hook-form';
import { create, update } from '../../../Helpers/ApiConfig/Controllers/ControllersFetch';
import { API_POST_PRODUCTS, API_PUT_PRODUCTS } from '../../../Helpers/ApiConfig/Controllers/Apis';
import './createProductsForm.css';

export const ProductForm = ({ isUpdate = false, productData }) => {
    const { register, handleSubmit, reset } = useForm({ defaultValues: productData });

    const onSubmit = async (data) => {
        const url = isUpdate ? `${API_PUT_PRODUCTS}/${data.id}` : API_POST_PRODUCTS;
        isUpdate ? await update(url, data.id, data) : await create(url, data);
        reset();
    };

    return (
        <div className="form-container">
            <h2>{isUpdate ? 'Actualizar Producto' : 'Crear Producto'}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <input {...register('nombre', { required: true })} required placeholder=" " />
                    <label>Nombre del Producto</label>
                </div>
                <div className="input-group">
                    <input {...register('unidad_medida_id', { required: true })} type="number" required placeholder=" " />
                    <label>Unidad de Medida ID</label>
                </div>
                <div className="input-group">
                    <textarea {...register('observaciones')} placeholder="Descripcion" />
                </div>
                <div className="input-group">
                    <input {...register('marca_id', { required: true })} type="number" required placeholder=" " />
                    <label>Marca ID</label>
                </div>
                <div className="input-group">
                    <input {...register('cantidad_inventario', { required: true })} type="number" required placeholder=" " />
                    <label>Cantidad en Inventario</label>
                </div>
                <div className="input-group">
                    <input {...register('fecha_embarque', { required: true })} type="date" required placeholder=" " />
                </div>
                <div className="input-group">
                    <textarea {...register('imagen')} placeholder="Agrega el link de una imagen" />
                </div>
                <button type="submit">{isUpdate ? 'Actualizar Producto' : 'Crear Producto'}</button>
            </form>
        </div>
    );
};
