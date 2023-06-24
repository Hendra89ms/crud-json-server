import React from 'react'

function Loading() {

    return (
        <div className='flex justify-center items-center text-red-500 text-2xl bg-gray-200 absolute  h-screen w-full'>
            <h1 className='animate-pulse  font-bold '>Loading...</h1>
        </div>
    )
}

export default Loading