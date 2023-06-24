import React, { useState, useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { editDataAPi } from '../../api_JSON_SERVER/apiMethode'

const Modal = ({ setIsOpenModal, dataId, datas, handleUpdateData }) => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [address, addresschange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);

    useEffect(() => {
        // Temukan data dengan dataId yang cocok
        const foundData = datas.find(item => item.id === dataId);

        // Tetapkan variabel status dengan nilai data yang ditemukan
        if (foundData) {
            idchange(foundData.id);
            namechange(foundData.name);
            emailchange(foundData.email);
            addresschange(foundData.address);
            // setActive(foundData.active);
            // setValidation(foundData.validation);
        }
    }, [dataId, datas]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateData = {
            id: dataId,
            name, email, address
        }

        // EDIT DATA API
        try {
            const response = await editDataAPi(dataId, updateData)

            // FUNCTION DARI TABLE.JSX DAN MENANGKAP DATANYA DISINI
            handleUpdateData(response.data)

        } catch (error) {
            console.error(error)
        }


    };


    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center  outline-none focus:outline-none">
                <div className="relative w-auto max-w-3xl mx-auto my-6 flex justify-center items-center">
                    <div className="bg-white w-[400px] p-8  rounded-lg shadow-lg  absolute z-[99]">

                        <button
                            className="text-red-500 hover:text-gray-600 focus:outline-none absolute top-[-5px] right-[-5px] duration-300"
                            onClick={() => { setIsOpenModal(false) }}
                        >

                            <AiOutlineCloseCircle size={28} />
                        </button>

                        <form onSubmit={handleSubmit} className=' w-full flex flex-col gap-5'>
                            <div className='flex justify-between items-center'>
                                <label htmlFor="nama">Nama</label>
                                <input
                                    type="text"
                                    placeholder='Nama'
                                    name='name'
                                    value={name}
                                    onChange={(e) => namechange(e.target.value)}
                                    className='border-gray-500 border-[1px] text-blue-500 outline-blue-500 p-3'
                                />
                            </div>

                            <div className='flex justify-between items-center'>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    placeholder='email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => emailchange(e.target.value)}
                                    className='border-gray-500 border-[1px] text-blue-500 outline-blue-500 p-3'
                                />
                            </div>

                            <div className='flex justify-between items-center'>
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    placeholder='Address'
                                    name='address'
                                    value={address}
                                    onChange={(e) => addresschange(e.target.value)}
                                    className='border-gray-500 border-[1px] text-blue-500 outline-blue-500 p-3'
                                />
                            </div>

                            <button
                                type='submit'
                                className='h-[40px] bg-blue-500 text-white rounded-md hover:bg-blue-700 duration-300 ease-in-out mt-4'
                            >
                                Edit Data
                            </button>
                        </form>

                    </div>
                </div>
                <div className="fixed inset-0 bg-black opacity-50"></div>
            </div>



        </>
    );
};

export default Modal;
