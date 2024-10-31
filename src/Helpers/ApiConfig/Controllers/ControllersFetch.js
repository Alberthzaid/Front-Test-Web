import { API_AUTH_USER } from "./Apis.js";


export const authUser = async (data )=>{
    try {
        const response = await fetch(API_AUTH_USER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Error en la petición');
        }

        const result = await response.json();
        console.log(result)
        return result
    } catch (error) {
        console.error('Error:', error);
    }
}


export const getData = async (url)=>{
    try{
        const request = await  fetch(url);
        const response = await request.json();
        console.log(response)
        return response.data;
    }catch(error){
        throw error
    }

}

export const getDataById = async (url , id )=>{
    try {
        const response = await fetch(`${url}/${id}}`)
        const result = await response.json()
        console.log(result)
        return result;
    } catch (error) {
        throw error
    }
}




export const create = async (url,data)=>{
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Error en la petición');
        }

        const result = await response.json();
        console.log('Success:', result);
        reset(); 
    } catch (error) {
        console.error('Error:', error);
    }
}

export const deletes = async (url, id) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error en la petición de eliminación');
        }

        const result = await response.json();
        console.log('Producto eliminado:', result);
        return result; // Devuelve el resultado en caso de que se necesite más tarde
    } catch (error) {
        console.error('Error eliminando el producto:', error.message);
        throw error; // Lanza el error para manejarlo en la llamada
    }
};


export const update = async (url, id, updatedData) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error('Error en la petición de actualización');
        }

        const result = await response.json();
        console.log('Producto actualizado:', result);
        return result; // Devuelve el resultado en caso de que se necesite más tarde
    } catch (error) {
        console.error('Error actualizando el producto:', error.message);
        throw error; // Lanza el error para manejarlo en la llamada
    }
};

