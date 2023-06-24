import React, { useState, useEffect } from 'react';

/*
    visible = boolean
    closeModal = function
    editData = state dari dataManagement.jsx
    updateDataEdit = function untuk menangkap value form
*/
const EditModal = ({ visible, closeModal, editData, updateDataEdit }) => {

    const [update, setUpdated] = useState(editData);

    useEffect(() => {
        if (editData) {
            setUpdated(editData);
        }
    }, [editData]);

    const handleChange = (e) => {
        setUpdated({ ...update, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // function dari parameter props
        updateDataEdit(update);
        closeModal();
    };

    return (
        <div className=''>
            {/* Render modal untuk mengedit data */}
            {visible && (
                <div className='w-[400px] p-5 text-black'>
                    <h2>Edit Data</h2>
                    <form
                        autoComplete='off'
                        onSubmit={handleSubmit}
                        className='flex gap-4'>
                        <input
                            type="text"
                            name="name"
                            value={update.name || ''}
                            onChange={handleChange}
                            className='border-[1px] border-black p-3'
                        />
                        <button
                            className='bg-green-500 text-white p-3'
                            type="submit">Submit
                        </button>
                        <button
                            className='bg-red-500 text-white p-3'
                            type="button"
                            onClick={closeModal}>
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default EditModal;
