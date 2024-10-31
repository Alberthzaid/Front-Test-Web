import React from 'react';
import { useForm } from 'react-hook-form';
import './ProductUpdatePopup.css';

export const ProductUpdatePopup = ({ productId, onClose }) => {
    const { register, handleSubmit, setValue, reset } = useForm();


    const onSubmit = async (data) => {
        reset();
        onClose();
    };

    return (
        <div className="ProductPopup">
            <div className="popup-content">
                <button onClick={onClose} className="close-btn">X</button>
                <h2>Actualizar Producto</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <input {...register('nombre')} placeholder="Nombre del Producto" />
                    </div>
                    <div className="input-group">
                        <input {...register('unidad_medida_id')} type="number" placeholder="Unidad de Medida ID" />
                    </div>
                    <div className="input-group">
                        <textarea {...register('observaciones')} placeholder="Descripción" />
                    </div>
                    <div className="input-group">
                        <input {...register('marca_id')} type="number" placeholder="Marca ID" />
                    </div>
                    <div className="input-group">
                        <input {...register('cantidad_inventario')} type="number" placeholder="Cantidad en Inventario" />
                    </div>
                    <div className="input-group">
                        <input {...register('fecha_embarque')} type="date" placeholder="Fecha de Embarque" />
                    </div>
                    <div className="input-group">
                        <textarea {...register('imagen')} placeholder="Imagen URL" />
                    </div>
                    <button type="submit">Actualizar Producto</button>
                </form>
            </div>
        </div>
    );
};
