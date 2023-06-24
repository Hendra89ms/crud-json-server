import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const navigate = useNavigate();

    // State untuk mengatur link yang aktif
    const [activeLink, setActiveLink] = useState('/ dashboard');


    const handleNavLinkClick = (path) => {
        setActiveLink(path);
    };

    useEffect(() => {
        const { pathname } = location;
        setActiveLink(pathname);

        // CEK JIKA PATH DI / MAKA AKAN MEMINDAHKAN PAGE KE /dashboard
        if (pathname === '/') {
            navigate('/dashboard');
        }
    }, [location, navigate]);

    return (
        <div className='w-full flex p-5'>
            <div className='bg-gray-400 h-screen hidden md:block md:w-[25%] p-4'>
                <h1 className='text-center text-white text-xl p-2'>Employee App</h1>
                <hr />

                <div className='text-white mt-5 flex flex-col gap-4 w-full'>
                    <NavLink to='/dashboard' onClick={() => handleNavLinkClick('/dashboard')}>
                        <div
                            className={`${activeLink === '/dashboard' ? 'bg-white text-black' : 'text-white'} bg-black p-4 cursor-pointer hover:text-gray-500 duration-300 ease-in-out`}
                        >
                            Dashboard
                        </div>
                    </NavLink>

                    <NavLink to='/input' onClick={() => handleNavLinkClick('/input')}>
                        <div
                            className={`${activeLink === '/input' ? 'bg-white text-black' : 'text-white'} bg-black p-4 cursor-pointer hover:text-gray-500 duration-300 ease-in-out`}
                        >
                            Add Data
                        </div>
                    </NavLink>
                </div>
            </div>

            <aside className='flex-1'>
                <Outlet />
            </aside>
        </div>
    );
}

export default Home;

