import React, { useEffect } from 'react'
import { FaEdit, FaTrash, FaInfoCircle } from 'react-icons/fa';
import { getDataApi } from '../../api_JSON_SERVER/apiMethode'

function Data_Table({ datas, handleGetId, setDatas, handleDelete, handleDetails }) {


    // CEK MAPPING JIKA item.address.city
    const mappedData = datas.map(user => {
        if (typeof user.address === 'object' && user.address.city) {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                address: user.address.city
            };
        }
        if (typeof user.address === 'string') {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                address: user.address
            };
        }
    });

    return (
        <div className=" p-4  overflow-x-scroll w-full">

            <table className="w-full ">
                <thead>
                    <tr>
                        <th className="py-2">No</th>
                        <th className="py-2">Nama</th>
                        <th className="py-2">Email</th>
                        <th className="py-2">Alamat</th>
                        <th className="py-2">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mappedData.map((item, index) => (

                            <tr key={index} >
                                <td className="py-2 text-center">{index + 1}.</td>
                                <td className="py-2 text-center truncate max-w-[100px]">{item.name}</td>
                                <td className="py-2 text-center  truncate max-w-[120px] ">{item.email}</td>
                                <td className="py-2  text-center  truncate max-w-[100px]">{item.address}</td>

                                <td className="py-2 flex text-center w-[80px]">

                                    <button
                                        onClick={() => handleGetId(item.id)}
                                        className="px-4 py-2 mr-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-700 "
                                    >
                                        <FaEdit />
                                    </button>

                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="px-4 py-2 mr-2 text-sm text-white bg-red-500 rounded hover:bg-red-700"
                                    >
                                        <FaTrash />
                                    </button>

                                    <button
                                        onClick={() => handleDetails(item.id)}
                                        className="px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-700"
                                    >
                                        <FaInfoCircle />
                                    </button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Data_Table