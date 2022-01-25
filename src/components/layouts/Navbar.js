import React, { Fragment, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const homeLink = useRef();
    const portfolioLink = useRef();
    const aboutMeLink = useRef();
    const contactLink = useRef();

    const location = useLocation();

    useEffect(() => {
        const navArr = [
            homeLink,
            portfolioLink,
            aboutMeLink,
            contactLink
        ];
        navArr.forEach(element => {
            if (element.current.className === 'nav-button-active') {
                element.current.className = 'nav-button';
            }
            if(element.current.id === location.pathname) {
                element.current.className = 'nav-button-active';
            }
        });
    }, [location])
    
    return (
        <Fragment>
            <h1 className='header'><Link to='/' className='header-link'>Aaron Graybill</Link></h1>
            <div className='navbar-container'>
                <div className='nav-item-1'>
                    <Link to='/' className='nav-button' aria-current="page" ref={homeLink} id='/'>Home</Link>
                </div>
                <div className='nav-item-2'>
                    <Link to='/portfolio' className='nav-button' aria-current="page" ref={portfolioLink} id='/portfolio'>Portfolio</Link>
                </div>
                <div className='nav-item-3'>
                    <Link to='/aboutme' className='nav-button' aria-current="page" ref={aboutMeLink} id='/aboutme'>About Me</Link>
                </div>
                <div className='nav-item-4'>
                    <Link to='/contact' className='nav-button' aria-current="page" ref={contactLink} id='/contact'>Contact</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar
