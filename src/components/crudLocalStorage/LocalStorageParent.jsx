import React, { useState, useEffect } from 'react'
import Table from './Table'
import FormEdit from './FormEdit'
import FormAddData from './FormAddData'
import { deleteData, createData, getData } from '../../api/apiMethode'

function LocalStorageParent() {
    const [isOpenForm, setIsOpenForm] = useState(false)
    // KIRIM STATE IDFORM KE FORMEDIT SELANJUT NYA DIHANDLEEDITFORM SETID NYA
    const [idform, setId] = useState(null)

    const [data, setData] = useState([])

    const [isOpenAddData, setIsOpenAddData] = useState(false)

    // TRIGER UNTUK MENAMPILKAN FORM EDIT
    const handleEditForm = (id) => {
        setId(id)
        setIsOpenForm(true)
    }

    // SUBMIT DATA 
    const handleFormSubmit = async (updateData) => {

        console.log('data yg mau diupdate : ', updateData);

        const updated = data.map(item => {
            if (item.id === updateData.id) {
                return updateData; // Gunakan data baru dari respons API
            }
            return item;
        });

        setData(updated)
        setIsOpenForm(false)

    }

    // DELETE DATA
    const deleteDataApi = async (id) => {

        try {
            const response = await deleteData(id);
            if (response) {
                const newData = data.filter((item) => item.id !== id);
                setData(newData)
            }

        } catch (error) {
            console.log(error)
        }
    }

    // MENAMPILKAN FORM ADD DATA
    const handleIsOpenAddData = () => {
        setIsOpenAddData(true)
    }

    return (
        <div className='w-full'>
            <div className='w-full p-8'>
                <h1 className='text-2xl font-semibold text-center my-6'>REACT JS CRUD OPERATION </h1>

                <h1 className="text-2xl font-bold mb-4">Employee Listing</h1>

                <div className='ml-6 flex items-center gap-3 my-4'>
                    <h1 className='font-semibold text-xl'>Add Your data here</h1>
                    <button
                        onClick={handleIsOpenAddData}
                        className='bg-green-500 text-white p-3 rounded-md'
                    >
                        Add Data
                    </button>
                </div>

                <Table
                    handleEditForm={handleEditForm}
                    data={data}
                    setData={setData}
                    handleDelete={deleteDataApi}
                />
            </div>

            {/* MENAMPILKAN FORM EDIT DATA */}
            <div>
                {
                    isOpenForm && (
                        <FormEdit
                            setIsOpen={setIsOpenForm}
                            id={idform}
                            onSubmit={handleFormSubmit}
                            setData={setData}
                        />
                    )
                }
            </div>

            {/* ADD DATA FORM  */}
            <div>
                {
                    isOpenAddData && (
                        <FormAddData
                            setIsOpenAddData={setIsOpenAddData}
                            setData={setData}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default LocalStorageParent
