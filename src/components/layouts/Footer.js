import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Fragment>
            <div className='container'>
                <footer className='py-3 my-4'>
                    <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link px-2 text-muted'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/portfolio' className='nav-link px-2 text-muted'>Portfolio</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutme' className='nav-link px-2 text-muted'>About Me</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link px-2 text-muted'>Contact</Link>
                        </li>
                    </ul>
                    <p className='text-center text-muted'>&copy; Aaron Graybill 2022</p>
                </footer>
            </div>
        </Fragment>
    )
}

export default Footer
