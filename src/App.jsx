import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Home, Dashboard, InputData, Details } from './pages'
import { ToastContainer } from 'react-toastify'
import { LocalStorageParent } from './components'

function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        {/* <Route path='/' element={<Home />}>
          <Route index path='/dashboard' element={<Dashboard />} />
          <Route path='/input' element={<InputData />} />
          <Route path='/details/:id' element={<Details />} />

        </Route> */}

        <Route path='/' element={<LocalStorageParent />} />

        <Route path='*' element={<h1 className='text-red-500 text-3xl'>PAGE NOT FOUND!!!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App