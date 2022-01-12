import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Fragment>
            <h1 className='header'><Link to='/'>Aaron Graybill</Link></h1>
            <div className='container'>
                <header className='d-flex justify-content-center py-3'>
                    <ul className='nav nav-pills'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link active' aria-current="page">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio' className='nav-link' aria-current="page">Portfolio</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutme' className='nav-link' aria-current="page">About Me</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link' aria-current="page">Contact</Link>
                        </li>
                    </ul>
                </header>
            </div>
        </Fragment>
    )
}

export default Navbar
