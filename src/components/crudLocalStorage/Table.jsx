import React, { useEffect, useState } from 'react';

/*
@params
handleEditForm = mengklose modal 
data = state dari localStorageParant.jsx untuk menyimpan data dari api
*/
function Table({ handleEditForm, handleDelete }) {

    const [data, setData] = useState([])

    useEffect(() => {

        const localStr = localStorage.getItem('data')
        const parseData = JSON.parse(localStr)

        setData(parseData)
    }, [])


    return (
        <div className='w-full px-5'>
            <div className="overflow-x-scroll">

                <table className="min-w-max w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Nama</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Phone</th>
                            <th className="py-2 px-4 border-b">Aksi</th>
                        </tr>
                    </thead>

                    {/* <tbody>
                        {
                            data.length === 0 ?
                                <tr>
                                    <td className="py-2 px-4 border-b text-center" colSpan="5">Data Empty</td>
                                </tr>
                                : data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                                            <td className="py-2 px-4 border-b text-center">{item.name}</td>
                                            <td className="py-2 px-4 border-b text-center">{item.email}</td>
                                            <td className="py-2 px-4 border-b text-center">{item.phone}</td>
                                            <td className="py-2 px-4 border-b text-center">
                                                <button
                                                    className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                                                    onClick={() => handleEditForm(item.id)}
                                                >edit
                                                </button>
                                                <button
                                                    onClick={() => { handleDelete(item.id) }}
                                                    className="bg-red-500 text-white py-1 px-2 rounded mr-2"
                                                >delete
                                                </button>
                                                <button className="bg-yellow-500 text-white py-1 px-2 rounded">details</button>
                                            </td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody> */}

                </table>


            </div>
        </div>
    );
}

export default Table;


  // const dataIndex = datas.findIndex(data => data.id === updatedData.id)

  // // Membuat salinan array data untuk diubah
  // const updatedDatas = [...datas];

  // // Memperbarui data di indeks yang ditemukan
  // updatedDatas[dataIndex] = updatedData;