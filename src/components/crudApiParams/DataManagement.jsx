import React, { useState, useEffect } from 'react';
import DataList from './DataList';
import EditModal from './EditModal';
import { getData, updateData, deleteData } from '../../api/apiMethode'

const DataManagement = () => {
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [editData, setEditData] = useState(null);


    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            const response = await getData()
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    const updateDataEdit = async (update) => {
        console.log('update: ', update)

        try {
            const response = await updateData(update);
            if (response.status === 200) {
                setData((prevData) =>
                    prevData.map((item) => (item.id === update.id ? response.data : item))
                );
                setModalVisible(false);
                setEditData(response.data);
            } else {
                console.log('Gagal mengupdate data');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const deleteDataHandler = async (update) => {
        console.log('id Update : ', update.id)

        try {
            const response = await deleteData(update.id)
            if (response.status === 200) {
                fetchData()
                console.log('Data berhasil dihapus!')
                console.log(response)
            }
            else {
                console.log('Gagal Menghapus Data')
            }
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            {/* Render komponen anak dan kirimkan data melalui props */}
            <DataList
                data={data}
                // createData={createData}
                setDeleteData={deleteDataHandler}
                showModal={() => setModalVisible(true)}
                // kita tangkap data yang diedit dari DataList 
                setEditData={setEditData}
            />


            {/* TAMPILKAN MODAL */}
            {
                modalVisible && (
                    <EditModal
                        data={data}
                        visible={modalVisible}
                        closeModal={() => {
                            setModalVisible(false);
                            setEditData(null);
                        }}
                        editData={editData}
                        updateDataEdit={updateDataEdit}
                    />
                )
            }
        </div>
    );
};

export default DataManagement;
