import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneData } from '../../api_JSON_SERVER/apiMethode'

function Details() {
    const { id } = useParams()
    const [detailsData, setDetailsData] = useState("")

    useEffect(() => {
        handleDetailsData(id)
    }, [id])

    // FUNCTION UNTUK MENANGKAP DATA DETAILS DARI API BERDASARKAN ID
    const handleDetailsData = async () => {
        if (id) {
            try {
                const response = await getOneData(id)

                if (response) {
                    setDetailsData(response.data)
                }
            } catch (error) {
                console.error(error)
            }
        }
    }


    return (
        <div className='fixed w-screen h-screen left-0 top-0 bg-white z-[99]'>
            <div className='flex w-full flex-col justify-center items-center mt-10'>

                <div className='flex flex-col gap-8'>
                    <Link to='/'>
                        <div className='flex  justify-center items-center bg-red-500 text-white w-[100px] p-2 rounded-md '>
                            Back
                        </div>
                    </Link>

                    <h1 className=' text-blue-500 text-2xl mb-2'>Details Data</h1>

                    <div className='w-[400px] h-[350px] border-gray-400 border-[1px] '>


                        <div className='flex flex-col justify-center items-center mt-8'>
                            {
                                detailsData ? (
                                    <>
                                        <div className='w-[150px] h-[150px] bg-gray-200 rounded-full mb-3 flex justify-center items-center text-blue-500 text-3xl'>
                                            <h1>IM</h1>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div>Name  : <b>{detailsData?.name}</b></div>
                                            <div>Email   :  <b>{detailsData?.email}</b></div>
                                            <div>Address :  <b>{detailsData?.address}</b></div>
                                        </div>

                                    </>

                                ) : <div>Loading...</div>
                            }
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details