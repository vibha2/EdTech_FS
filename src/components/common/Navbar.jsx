import React from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link, matchPath } from 'react-router-dom'
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'


function Navbar() {
    const location = useLocation();

    const matchRoute = (route) => {
        // jo bhi path click krre hai i.e path:route equal hota hai url le path se i.e location.pathname
        return matchPath({path:route}, location.pathname);
    }

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
           {/* logo added */}
            <Link to="/">
                <img src={logo} width={160} height={42} loading='lazy' alt="logo" />
            </Link>

            {/* Nav Links */}
            <nav>
                <ul className='flex gap-x-6 text-richblack-25'>
                {
                    NavbarLinks.map( (link, index) => (
                        <li key={index}>
                        {
                            link.title === "Catalog"?
                            (<div>abc</div>):
                            (
                            <Link to={link?.path}>
                             <p className={`${matchRoute(link?.path)? "text-yellow-25": "text-richblack-25"}`}>{link.title}</p>
                            </Link>
                            )
                        }
                            
                        </li>
                    )
                   
                 )
                }
                </ul>
            </nav>

            {/* Buttons */}
            {/* Login/Signup/Dashboard */}
            <div className='flex gap-x-4 items-center'>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar