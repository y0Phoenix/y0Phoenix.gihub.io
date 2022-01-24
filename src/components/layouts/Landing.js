import React, { Fragment, useRef } from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    const homeLink = useRef()
    const landingP = {
        "width": "45%"
    }
    return (
        <Fragment>
            <main className='px-3'>
                <h1 className='header'>Aaron Graybills Portfolio Website</h1>
                <p className='landing-p' style={landingP}>This is a personal webpage for me and all of my projects I have worked on up until this point.
                Feel free to contact me regarding any questions or inquiries</p>
                <p className='landing-p'><Link to='/portfolio' className='btn btn-lg btn-secondary fw-bold border-black bg-black'>Projects Page</Link></p>
            </main>
            <div style={{"textAlign": "center"}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NqfQgthE0O8" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{"textAlign": "center"}} allowfullscreen></iframe>
            </div>
        </Fragment>
    )
}

export default Landing
