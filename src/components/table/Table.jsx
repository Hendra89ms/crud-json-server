import React, { useEffect, useState } from 'react';
import { Loading, Modal, Data_Table } from '../../components'
import { deleteDataApi } from '../../api_JSON_SERVER/apiMethode'
import { Navigate, useNavigate } from 'react-router-dom'


const Table = ({ datas, setDatas }) => {

    const [isloading, setIsLoading] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [dataId, setDataId] = useState(null)

    const navigate = useNavigate()

    // UNTUK MENANGKAP DATA ID NYA SAJA KIRIM KE MODAL UNTUK DIEDIT
    const handleGetId = (id) => {
        setDataId(id)
        setIsOpenModal(true)
    }

    // FUNCTION UPDATE DATA
    const handleUpdateData = (updateData) => {
        // Temukan indeks data yang diperbarui dalam array data saat ini
        const dataIndex = datas.findIndex(item => item.id === updateData.id);

        if (dataIndex !== -1) {
            // Buat data array baru dengan data yang diperbarui
            const updatedDatas = [...datas];
            updatedDatas[dataIndex] = updateData;

            alert('DATA SUKSES DIEDIT!')
            setIsOpenModal(false)


            // Perbarui status dengan data array baru
            setDatas(updatedDatas);
        }
    }

    // FUNCTION DELETE DATA
    const handleDeleteData = async (id) => {

        // DICEK TERLEBIH DAHULU JIKA ID ADA MAKA AKAN DIRELOAD
        if (window.confirm('Apkah kamu mau menghapus data ini ? ')) {
            try {
                const response = await deleteDataApi(id)
                alert('DATA TELAH DIHAPUS')
                window.location.reload()

            } catch (error) {
                console.error(error)
            }
        }

        if (!id) {
            alert('Tolong Periksa Id')
        }

    }

    // FUNCTION DETAILS
    const handleDetails = async (id) => {

        navigate('/details/' + id)
    }

    return (
        <div className='relative'>
            {
                isloading ? <Loading /> : (
                    <div>
                        <Data_Table
                            datas={datas}
                            setDatas={setDatas}
                            setIsOpenModal={setIsOpenModal}
                            handleGetId={handleGetId}
                            handleDelete={handleDeleteData}
                            handleDetails={handleDetails}
                        />

                        {
                            isOpenModal && (
                                <Modal
                                    setIsOpenModal={setIsOpenModal}
                                    setDatas={setDatas}
                                    datas={datas}
                                    dataId={dataId}
                                    handleUpdateData={handleUpdateData}
                                />
                            )
                        }

                    </div>
                )
            }
        </div>
    );
};


export default Table;