import React, { Fragment } from 'react'

const Projects = () => {
    const aStyle = {
        "margin": "5px"
    };
    return (
        <Fragment>
            <main>
                <section className='py-5 text-center container'>
                    <div className='row py-lg-5'>
                        <div className='col-lg-6 col-md-8 mx-auto'>
                            <h1 className='header'>Portfolio</h1>
                            <p className='lead text-muted'>Here are my projects I have worked on or am working on up until this point</p>
                            <p> 
                                <a href='#mit' className='btn btn-primary my-2' style={aStyle}>MIT Projects</a>
                                <a href='#personal' className='btn btn-primary my-2' style={aStyle}>Personal Projects</a>
                                <a href='#future' className='btn btn-primary my-2' style={aStyle}>Future Projects</a>
                            </p>
                        </div>
                    </div>
                </section>
                <h1 className='portfolio-h1' id='mit'>MIT Projects</h1>
                <div className='album py-5 bg-light'>
                    <div className='container'>
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                            <div className='col'>
                                <div className='card shadow-sm'>
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width='100%' height='100%' fill='#55595c'></rect>
                                        <text x='50%' y='50%' fill='#eceeef' dy='-.5em' dx='-2em'>Move Ball</text>
                                    </svg>
                                    <div className='card-body'>
                                        <p className='card-text'>
                                            Simple HTML element ball that moves around the page, sort of just dipping our feet into HTML, CSS and JS
                                        </p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='btn-group'>
                                                <a href='https://y0phoenix.github.io/Move-Ball/' className='btn btn-sm btn-outline-secondary'>Site</a>
                                                <a href='https://github.com/y0Phoenix/Move-Ball' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card shadow-sm'>
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width='100%' height='100%' fill='#55595c'></rect>
                                        
                                        <text x='50%' y='50%' fill='#eceeef' dy='-.5em' dx='-2em'>PacMan</text>
                                    </svg>
                                    <div className='card-body'>
                                        <p className='card-text'>
                                            Simple HTML element as an img that moves from side to side, a small step up from the move ball activity
                                        </p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='btn-group'>
                                                <a href='https://y0phoenix.github.io/Pacman/' className='btn btn-sm btn-outline-secondary'>Site</a>
                                                <a href='https://github.com/y0Phoenix/Pacman' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card shadow-sm'>
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width='100%' height='100%' fill='#55595c'></rect>
                                        <text x='50%' y='50%' fill='#eceeef' dy='-.5em' dx='-2.5em'>WalkBoston</text>
                                    </svg>
                                    <div className='card-body'>
                                        <p className='card-text'>
                                            Small data searching application dealing with 22233 entries of employee data in the city of Boston
                                        </p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='btn-group'>
                                                <a href='https://y0phoenix.github.io/WalkBoston/' className='btn btn-sm btn-outline-secondary'>Site</a>
                                                <a href='https://github.com/y0Phoenix/WalkBoston' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card shadow-sm'>
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width='100%' height='100%' fill='#55595c'></rect>
                                        <text x='50%' y='50%' fill='#eceeef' dy='-.5em' dx='-3.5em'>Eye Movement</text>
                                    </svg>
                                </div>
                                <div className='card-body'>
                                        <p className='card-text'>
                                            Eye balls that follow the mouse around the screen using window global variables
                                        </p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='btn-group'>
                                                <a href='https://y0phoenix.github.io/eye-movement/' className='btn btn-sm btn-outline-secondary'>Site</a>
                                                <a href='https://github.com/y0Phoenix/eye-movement' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className='col'>
                                <div className='card shadow-sm'>
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width='100%' height='100%' fill='#55595c'></rect>
                                        <text x='50%' y='50%' fill='#eceeef' dy='-.5em' dx='-3.5em'>Bust Stop Viewer</text>
                                    </svg>
                                    <div className='card-body'>
                                        <p className='card-text'>
                                            Basic Bus route viewer from MIT to Harvard, works with the MapBoxGL API Library
                                        </p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='btn-group'>
                                                <a href='https://y0phoenix.github.io/Bus-Stop-Viewer/' className='btn btn-sm btn-outline-secondary'>Site</a>
                                                <a href='https://github.com/y0Phoenix/Bus-Stop-Viewer' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <h1 className='portfolio-h1' id='personal'>Personal Projects</h1>
                <div className='album py-5 bg-light'>
                    <div className='container'>
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                            <div className='col'>
                                <div className='card shadow-sm'>
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width='100%' height='100%' fill='#55595c'></rect>
                                        <text x='50%' y='50%' fill='#eceeef' dy='-.5em' dx='-2em'>Smoothy</text>
                                    </svg>
                                    <div className='card-body'>
                                        <p className='card-text'>
                                            Complex Discord-Music-Bot written in TypeScript and compiled into ES7 nodejs
                                        </p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='btn-group'>
                                                <a href='https://github.com/y0Phoenix/Smoothy' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card shadow-sm'>
                                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width='100%' height='100%' fill='#55595c'></rect>
                                        
                                        <text x='50%' y='50%' fill='#eceeef' dy='-.5em' dx='-4.5em'>MERN TraversyMedia</text>
                                    </svg>
                                    <div className='card-body'>
                                        <p className='card-text'>
                                            A social networking application using the full MERN stack
                                        </p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='btn-group'>
                                                <a href='https://github.com/y0Phoenix/MERN-Course-TraveryMedia' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <h1 className='portfolio-h1' id='future'>Future Projects</h1>
                <div className='future-container'>
                    <ul>
                        <li>My webpage build with three.js and webGL</li>
                        <li>A POS website that holds recipes, ingredient prices and general prices associated with a product, a time sheet where employees clock their hours</li>
                        <li>A video game</li>
                    </ul>
                </div>
            </main>
        </Fragment>
    )
}

export default Projects
