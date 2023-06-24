import React, { useEffect, useState } from 'react'
import { Table } from '../../components'
import { getDataApi } from '../../api_JSON_SERVER/apiMethode'

function Dashboard() {

    const [inputValue, setInputValue] = useState('')
    const [datas, setDatas] = useState([]);
    const [filterData, setFilterData] = useState([])

    const handleChange = (e) => {

        setInputValue(e.target.value)
    }

    useEffect(() => {
        getData()
    }, [])

    // GET DATA API 
    const getData = async () => {
        try {
            const response = await getDataApi()

            setDatas(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const filtered = datas.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));

        // setFilterData(filtered)
    }, [datas, filterData])

    return (
        <div className='w-full mt-2'>
            <div className='flex gap-4 justify-between px-7 items-center'>
                <input
                    type="text"
                    placeholder='Search Employee'
                    value={inputValue}
                    onChange={handleChange}
                    className='border-gray-500 border-[1px] w-[70%] rounded-md outline-none p-3'
                />

                <div className='flex items-center gap-2'>
                    <h1 className='truncate max-w-[100px] text-[18px]'>Hendra ms </h1>
                    <div className='w-[50px] h-[50px] rounded-full bg-gray-300 text-white flex justify-center items-center'>
                        <h1>HM</h1>
                    </div>
                </div>
            </div>

            <div>
                <Table
                    datas={filterData}
                    setDatas={setDatas}
                />
            </div>
        </div>
    )
}

export default Dashboard