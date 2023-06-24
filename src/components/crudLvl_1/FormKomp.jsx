import React, { useState } from "react";

const FormKomp = ({ onSubmit, selectedData, setIsOpen }) => {

    const [inputData, setInputData] = useState(selectedData);

    const changeName = (e) => {
        setInputData({ ...inputData, name: e.target.value })
    }

    const changeEmail = (e) => {
        setInputData({ ...inputData, email: e.target.value })
    }

    const handleModal = () => {
        setIsOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Panggil prop onSubmit dan kirimkan data yang disubmit
        onSubmit(inputData);
        setIsOpen(false)
    };

    return (
        <div key={selectedData.id} className='fixed top-0 left-0 bg-[#00000090] z-[99] w-full h-screen flex justify-center items-center text-white'>

            <form onSubmit={handleSubmit} className='border-[1px] border-white p-8 w-[400px] flex flex-col gap-3 justify-center items-center relative'>
                <h1>Form Edit </h1>

                <div className='flex justify-between items-center w-full gap-3'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={inputData.name}
                        onChange={changeName}
                        id='name'
                        className='p-2 w-full text-gray-900'
                    />
                </div>

                <div className='w-full flex justify-between items-center gap-3'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={inputData.email}
                        onChange={changeEmail}
                        id='email'
                        className='p-2 w-full text-gray-900'
                    />
                </div>

                <button
                    type='submit'
                    className='bg-blue-500 text-white w-full p-2'>
                    Submit
                </button>

                <div onClick={handleModal} className='text-white font-bold text-3xl absolute top-[-17px] right-[-5px]'>x</div>

            </form>
        </div>
    )
}

export default FormKomp;