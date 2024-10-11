import React, { useRef } from 'react';
import './style.css';
const Navbar = ()=>{
    const navRef = useRef();
    const showNavbar = ()=>{
        navRef.current.classList.toggle('show')
    }
    return(

        <>
        <nav>
            <div className='container'>
                <a href='#' className='brand'>Creator  Zaha</a>
                <ul className='nav-menu' ref={navRef}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Courses</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Testimonials</a></li>
                    <li><a href='#'>Subscribers</a></li>
                    <li class='login'><a href='#'>Login</a></li>
                    <li class='signup'><a href='#'>Signup</a></li>
                    <div className='close-btn' onClick={showNavbar}>
                    <span class='material-symbols-sharp'>Close</span>
                    </div>

                </ul>
            </div>
            <div className='btn-toggle' onClick={showNavbar}>
            <span class='material-symbols-sharp'>Sort</span>
            </div>
        </nav>
        </>
    )
}

export default Navbar;