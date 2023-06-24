import React, { useEffect, useState } from 'react'

function FormAddData({ setIsOpenAddData }) {

    const data = []

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;


        const newData = {
            id: Date.now(),
            name: name,
            email: email,
            phone: phone,
        };

        data.push(newData)

        console.log('data : ', data)
        localStorage.setItem('data', JSON.stringify(data))

        setIsOpenAddData(false);
    };

    return (
        <div className='w-full h-screen fixed top-0 left-0 bg-[#00000090] flex justify-center items-center'>
            <div className='w-[500px]  border-white border-[1px] bg-black p-8'>
                <h2 className='font-bold text-center text-white text-xl'>Add Data</h2>
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
                            className='border-[1px] border-black p-3 w-full text-gray-500'
                        />
                    </div>

                    <div className='flex justify-between items-center gap-4'>
                        <label htmlFor="Email" className='text-white font-semibold'>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='email'
                            className='border-[1px] border-black p-3 w-full text-gray-500'
                        />
                    </div>

                    <div className='flex justify-between items-center gap-4'>
                        <label htmlFor="Phone" className='text-white font-semibold'>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder='Phone'
                            className='border-[1px] border-black p-3 w-full text-gray-500'
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
                            onClick={() => setIsOpenAddData(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormAddData