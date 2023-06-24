import React from 'react';
import { FaEdit, FaTrash, FaInfoCircle } from 'react-icons/fa';

/*
    data = state data array dari DataManagement.jsx
    showModal = function untuk menghandle Modal
    setEdit = function untuk menangkap berdasarkan id
    deleteData = function untuk menangkap id
*/
const DataList = ({ data, setDeleteData, showModal, setEditData }) => {

    const handleUpdate = (id) => {
        const selectedData = data.find(item => item.id === id);
        setEditData(selectedData);
        showModal();
    };

    const handleDelete = (id) => {
        const selectedData = data.find(item => item.id === id);
        setDeleteData(selectedData)
    }

    return (
        <div className='p-5'>
            <ul className='w-[400px] border-[1px] border-red-500 p-4' >
                {data.map(item => (
                    <li key={item.id} className='w-full flex justify-between'>
                        {item.name}

                        <div className='flex gap-6 text-xl'>
                            <button className='hover:bg-blue-500' onClick={() => handleUpdate(item.id)}>
                                <FaEdit />
                            </button>
                            <button onClick={() => handleDelete(item.id)}>
                                <FaTrash />
                            </button>
                            <button>
                                <FaInfoCircle />
                            </button>
                        </div>

                    </li>
                ))}
            </ul>
            {/* ... */}
        </div>
    );
};

export default DataList;
