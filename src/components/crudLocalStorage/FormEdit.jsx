import React, { useState, useEffect } from 'react'
import { updateData } from '../../api/apiMethode'
/*
    @params
    setIsOpen = function boolean untuk menghandle Modal
    id merupakan state dari localStorageParent.jsx dan diset disana
    onSubmit = function untuk menangkap data ketika menput data nya 
*/
function FormEdit({ setIsOpen, id, onSubmit, setData }) {

    const [selectedData, setSelectedData] = useState({})

    useEffect(() => {
        // GET DATA DARI LOCAL STORAGE
        const storedData = localStorage.getItem('data');
        const parsedData = JSON.parse(storedData);

        setData(parsedData)
        // CARI DATA BERDASARKAN ID 
        const foundData = parsedData.find(item => item.id === id);

        // PANGGIL STATE SETFORMDATA
        setSelectedData(foundData)
    }, []);

    // Meng-handle perubahan nilai input
    const handleChange = (e) => {
        // SETFORMDATA UNTUK ONCHANGE VALUE
        setSelectedData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    // PUT API DAN SUBMIT DATA
    const handleSubmit = async (e) => {
        e.preventDefault()

        onSubmit(selectedData)
    }

    return (
        <div className='w-full h-screen fixed top-0 left-0 bg-[#00000090] flex justify-center items-center'>
            <div className='w-[500px]  border-white border-[1px] bg-black p-8'>
                <h2 className='font-bold text-center text-white text-xl'>Edit Data</h2>
                <form
                    autoComplete='off'
                    onSubmit={handleSubmit}
                    className='flex gap-4 flex-col mt-5'>

                    <div className='flex justify-between items-center gap-4'>
                        <label htmlFor="name" className='text-white font-semibold'>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='name'
                            value={selectedData.name || ''}
                            onChange={handleChange}
                            className='border-[1px] border-black p-3 w-full text-black'
                        />
                    </div>

                    <div className='flex justify-between items-center gap-4'>
                        <label htmlFor="Email" className='text-white font-semibold'>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='email'
                            value={selectedData.email || ''}
                            onChange={handleChange}
                            className='border-[1px] border-black p-3 w-full text-black'
                        />
                    </div>

                    <div className='flex justify-between items-center gap-4'>
                        <label htmlFor="Phone" className='text-white font-semibold'>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder='Phone'
                            value={selectedData.phone || ''}
                            onChange={handleChange}
                            className='border-[1px] border-black p-3 w-full text-black'
                        />
                    </div>

                    <div className='flex justify-between'>
                        <button
                            className='bg-green-500 text-white p-3'
                            type="submit">Submit
                        </button>
                        <button
                            className='bg-red-500 text-white p-3'
                            type="button"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormEdit