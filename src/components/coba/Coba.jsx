import React, { useState, useEffect } from 'react'
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom'

function Coba() {
    const [active, setActive] = useState('/coba1');
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavLinkClick = (path) => {
        setActive(path);
    };

    useEffect(() => {
        const { pathname } = location;
        setActive(pathname);

        if (pathname === '/') {
            navigate('/coba1');
        }
    }, [location, navigate]);

    return (
        <div className="flex">
            <div className="flex flex-col bg-black text-white w-[350px] h-screen items-center pt-10 gap-4">
                <Link
                    to="/coba1"
                    onClick={() => handleNavLinkClick('/coba1')}
                    className={`px-3 py-1 ${active === '/coba1' ? 'bg-white text-black' : 'text-white'}`}
                >
                    Home
                </Link>

                <Link
                    to="/coba2"
                    onClick={() => handleNavLinkClick('/coba2')}
                    className={`px-3 py-1 ${active === '/coba2' ? 'bg-white text-black' : 'text-white'}`}
                >
                    About
                </Link>
            </div>

            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}

export default Coba;
