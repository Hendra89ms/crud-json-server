import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Metode GET
export const getData = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data');
    }
};

// Metode CREATE
export const createData = async (newData) => {
    try {
        const response = await axios.post(`${API_URL}/`, newData);
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to create data');
    }
};

// Metode UPDATE
export const updateData = async (id, update) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, update);
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to update data');
    }
};

// Metode DELETE
export const deleteData = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to delete data');
    }
};
