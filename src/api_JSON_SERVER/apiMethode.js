import axios from "axios";

const API_URL = 'http://localhost:3004/users'

export const getDataApi = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data');
    }
}

export const createDataApi = async (data) => {
    try {
        const response = await axios.post(`${API_URL}`, data);

        return response;
    } catch (error) {
        alert('Data gagal di post')
        console.error('Error:', error);
        throw new Error('Failed to fetch data');
    }
}

export const editDataAPi = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, data);
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data');

    }
}

export const deleteDataApi = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data');
    }
}

export const getOneData = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/` + id)
        return response;
    } catch (error) {
        console.error(error)
    }

}

