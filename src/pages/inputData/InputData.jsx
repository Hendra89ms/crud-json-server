import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { createDataApi } from '../../api_JSON_SERVER/apiMethode'

function InputData() {

    const navigate = useNavigate()

    // STATE YANG UNTUK VALUE INPUTAN
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [address, addresschange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);

    const handleSubmitAdd = async (e) => {
        e.preventDefault()

        if (name === "" || email === "" || address === "") {
            return alert('You Must Input Data !!')
        }

        // MENGECEK JIKA USER MENGINPUT KURANG DARI 6 CHARACTER
        if (name.length <= 6 || email.length <= 6 || address.length <= 6) {
            return alert('character you must > 6')
        }

        // MENGECEK JIKA USER MENGINPUT SPASI SAJA
        if (name.trim().length === 0 || email.trim().length === 0 || address.trim().length === 0) {
            return alert('DONOT SPACE')
        }

        const inputData = {
            id: Date.now(),
            name,
            email,
            address
        }
        console.log(inputData)

        try {
            const response = await createDataApi(inputData)
            if (response) {
                alert('Data berhasil di post')
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }

        // KOSONG KAN VALUE KEMBALI SETELAH AKSI
        namechange('')
        emailchange('')
        addresschange('')
    }

    return (
        <div className='flex justify-center items-center mt-5'>
            <div className='w-[500px] h-[600px] border-gray-200 border-[1px] px-9 mt-5 flex flex-col justify-center items-center'>

                <h1 className='text-center text-3xl mb-8'>Add Your Data Here...</h1>

                <form onSubmit={handleSubmitAdd} className=' w-full flex flex-col gap-5' autoComplete='off'>
                    <div className='flex justify-between items-center gap-10'>
                        <label htmlFor="nama">Nama</label>
                        <input
                            type="text"
                            placeholder='Nama'
                            value={name}
                            onChange={(e) => namechange(e.target.value)}
                            className='border-gray-500 border-[1px] outline-blue-500 p-3 w-full '
                        />
                    </div>

                    <div className='flex justify-between items-center gap-10'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder='email'
                            value={email}
                            onChange={e => emailchange(e.target.value)}
                            className='border-gray-500 border-[1px] outline-blue-500 p-3 w-full'
                        />
                    </div>

                    <div className='flex justify-between items-center gap-5'>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            placeholder='Address'
                            value={address}
                            onChange={(e) => addresschange(e.target.value)}
                            className='border-gray-500 border-[1px] outline-blue-500 p-3 w-full'
                        />
                    </div>


                    <button
                        type='submit'
                        className={` h-[40px] bg-blue-500 text-white rounded-md hover:bg-blue-700 duration-300 ease-in-out mt-4 flex justify-center items-center w-full`}
                    >
                        Add Data
                    </button>

                </form>
            </div>
        </div>
    )
}

export default InputData