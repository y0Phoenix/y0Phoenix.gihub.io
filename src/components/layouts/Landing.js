import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Fragment>
            <main className='px-3'>
                <h1 className='header'>Aaron Graybills Portfolio Website</h1>
                <p className='landing-p'>This is a personal webpage for me and all of my projects I have worked on up until this point.
                Feel free to contact me regarding any questions or inquiries</p>
                <p className='landing-p'><Link to='/portfolio' className='btn btn-lg btn-secondary fw-bold border-black bg-black'>Projects Page</Link></p>
            </main>
        </Fragment>
    )
}

export default Landing
