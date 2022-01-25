import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Fragment>
            <div className='landing-container'>
                <h1 className='header'>Aaron Graybills Portfolio Website</h1>
                <p className='landing-p'>This is a personal webpage for me and all of my projects I have worked on up until this point.
                Feel free to contact me regarding any questions or inquiries</p>
                <Link to='/portfolio' className='btn btn-lg btn-secondary fw-bold border-black bg-black' style={{"padding": "10px"}}>Projects Page</Link>
            </div>
            <div style={{"textAlign": "center"}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NqfQgthE0O8" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{"textAlign": "center"}} allowfullscreen></iframe>
            </div>
        </Fragment>
    )
}

export default Landing
