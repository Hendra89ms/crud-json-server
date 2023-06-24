import React, { useEffect, useState } from 'react'
import FormKomp from './FormKomp';

function ParentKomp() {

    const apiData = [
        {
            id: 1,
            name: 'hendra',
            email: 'hendra89ms@gmia.com'
        },
        {
            id: 2,
            name: 'yosua',
            email: 'yosua@gmia.com'
        },
    ]

    const [datas, setDatas] = useState(apiData)

    const [isOpen, setIsOpen] = useState(false)
    const [selectedData, setSelectedData] = useState();
    const [index, setIndex] = useState(-1)

    const editData = (id) => {
        setIsOpen(true)

        // CARI ID MENGGUNAKAN METHODE ARRAY FIND
        const findId = datas.find(item => item.id === id)
        console.log(findId)

        setSelectedData(findId)

    }

    const deleteData = (id) => {
        console.log('data id', id)
        const newData = datas.filter((item) => item.id !== id);

        console.log(newData)
        setDatas(newData)
    }

    // MEMASUKKAN PARAMETER DARI E.TARGET.VAlUE
    const handleFormSubmit = (updatedData) => {

        // Temukan indeks dari data yang ingin diubah dalam array datas
        const dataIndex = datas.findIndex((item) => item.id === updatedData.id);

        if (dataIndex >= 0) {

            // Perbarui data yang sesuai dengan data yang disubmit
            const updatedDatas = [...datas];

            // Perbarui data yang sesuai dengan data yang disubmit
            updatedDatas[dataIndex] = updatedData;

            setDatas(updatedDatas)

        }

        setIsOpen(false);
    };

    return (
        <div className='flex flex-col gap-4 p-5'>

            {
                datas.length === 0 ? <h1>YOU CAN ADD DATA</h1> : datas.map((item) => {
                    return (
                        <div key={item.id} className='w-[300px] border-[1px] border-black p-4'>

                            <h1> Name : {item.name}</h1>
                            <p>Email : {item.email}</p>

                            <div className='flex justify-between mt-3 w-full'>
                                <button onClick={() => { editData(item.id) }} className='bg-blue-500 text-white h-[30px] px-3'>Edit</button>
                                <button
                                    className='bg-red-500 text-white h-[30px] px-3'
                                    onClick={() => { deleteData(item.id) }}
                                >Delete</button>
                            </div>
                        </div>
                    )
                })
            }

            {
                isOpen && (

                    <FormKomp
                        index={selectedData.id}
                        editData={editData}
                        setIsOpen={setIsOpen}
                        selectedData={selectedData}
                        onSubmit={handleFormSubmit}
                    />
                )
            }
        </div>
    )
}

export default ParentKomp;

