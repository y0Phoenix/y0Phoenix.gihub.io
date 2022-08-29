import React, { Fragment } from 'react'
import { Row, Card, Col} from 'react-bootstrap';

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
                <Row xs={1} md={3} lg={4} className='bg-light projects-row'>
                    <Col>
                        <Card>
                            <Card.Img style={{height: '460px', width: '445px'}} variant='top' src='https://openlearning.mit.edu/sites/default/files/connect-logos/xPRO-square.png'>
                            </Card.Img>
                            <Card.Body>
                                <Card.Title>Move Ball</Card.Title>
                                <Card.Text>
                                    Simple HTML element ball that moves around the page, sort of just dipping our feet into HTML, CSS and JS
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <a href='https://y0phoenix.github.io/Move-Ball/' className='btn btn-sm btn-outline-secondary'>Site</a>
                                        <a href='https://github.com/y0Phoenix/Move-Ball' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img style={{height: '460px', width: '445px'}} variant='top' src='https://github.com/y0Phoenix/Pacman/blob/main/images/PacMan1.png?raw=truehttps://github.com/y0Phoenix/Pacman/blob/main/images/PacMan1.png?raw=true'></Card.Img>
                            <Card.Body>
                                <Card.Title>Pacman</Card.Title>
                                <Card.Text>
                                    Simple HTML element as an img that moves from side to side, a small step up from the move ball activity
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <a href='https://y0phoenix.github.io/Pacman/' className='btn btn-sm btn-outline-secondary'>Site</a>
                                        <a href='https://github.com/y0Phoenix/Pacman' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img style={{height: '460px', width: '445px'}} variant='top' src='https://github.com/y0Phoenix/WalkBoston/blob/main/images/boston.png?raw=true'></Card.Img>
                            <Card.Body>
                                <Card.Title>Walk Boston</Card.Title>
                                <Card.Text>
                                    Small data searching application dealing with 22233 entries of employee data in the city of Boston
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <a href='https://y0phoenix.github.io/WalkBoston/' className='btn btn-sm btn-outline-secondary'>Site</a>
                                        <a href='https://github.com/y0Phoenix/WalkBoston' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img style={{height: '460px', width: '445px'}} variant='top' src='https://openlearning.mit.edu/sites/default/files/connect-logos/xPRO-square.png'></Card.Img>
                            <Card.Body className='card-body'>
                                <Card.Title>Eye Movement</Card.Title>
                                <Card.Text>
                                    Eye balls that follow the mouse around the screen using window global variables
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <a href='https://y0phoenix.github.io/eye-movement/' className='btn btn-sm btn-outline-secondary'>Site</a>
                                        <a href='https://github.com/y0Phoenix/eye-movement' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img style={{height: '460px', width: '445px'}} variant='top' src='https://openlearning.mit.edu/sites/default/files/connect-logos/xPRO-square.png'></Card.Img>
                            <Card.Body>
                                <Card.Title>Bus Tracker</Card.Title>
                                <Card.Text>
                                    Basic Bus route viewer from MIT to Harvard, works with the MapBoxGL API Library
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <a href='https://y0phoenix.github.io/Bus-Stop-Viewer/' className='btn btn-sm btn-outline-secondary'>Site</a>
                                        <a href='https://github.com/y0Phoenix/Bus-Stop-Viewer' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img style={{height: '460px', width: '445px'}} variant='top' src='https://raw.githubusercontent.com/y0Phoenix/aaron-graybillbankingapp/master/src/images/BIZ-bank28-inside.webp'></Card.Img>
                            <Card.Body>
                                <Card.Title>Bad Bank</Card.Title>
                                <Card.Text>
                                    Bad Bank referring to it's low security. Built with React and Redux.
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <a href='https://aaron-graybillbankingapp.herokuapp.com/' className='btn btn-sm btn-outline-secondary'>Site</a>
                                        <a href='https://github.com/y0Phoenix/aaron-graybillbankingapp' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img style={{height: '460px', width: '445px'}} variant='top' src='https://png.pngitem.com/pimgs/s/576-5769008_order-food-online-symbol-hd-png-download.png'></Card.Img>
                            <Card.Body>
                                <Card.Title>Foodie</Card.Title>
                                <Card.Text>
                                    Restaurant Online Ordering Full Stack Application. Using Stripe for Payment Authentication
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <a href='https://aaron-graybillfsrestaurantapp.herokuapp.com/' className='btn btn-sm btn-outline-secondary'>Site</a>
                                        <a href='https://github.com/y0Phoenix/mit-capstone-restaurant-app' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr></hr>
                <h1 className='portfolio-h1' id='personal'>Personal Projects</h1>
                <Row className='bg-light projects-row' xs={1} md={3} lg={4}>
                    <Col>
                        <Card>
                            <Card.Img style={{height: '460px', width: '445px'}} variant='top' src='https://github.com/y0Phoenix/Smoothy/blob/development/pictures/Smoothy%20Logo.png?raw=true'></Card.Img>
                            <Card.Body>
                                <Card.Title>Smoothy</Card.Title>
                                <Card.Text>
                                    Complex Discord-Music-Bot written in TypeScript and compiled into ES7 nodejs
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <a href='https://github.com/y0Phoenix/Smoothy' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img style={{height: '460px', width: '445px'}} variant='top' src='https://assets.codepen.io/246331/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1505126718&width=512'></Card.Img>
                            <Card.Body>
                                <Card.Title>MERN TraveryMedia</Card.Title>
                                <Card.Text>
                                    A social networking application using the full MERN stack
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <a href='https://github.com/y0Phoenix/MERN-Course-TraveryMedia' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img style={{height: '460px', width: '445px'}} variant='top' src='https://cdn-icons-png.flaticon.com/512/1094/1094675.png'></Card.Img>
                            <Card.Body>
                                <Card.Title>Reciger</Card.Title>
                                <Card.Text>
                                    Web Based Recipe Manager that communicates with the USDA API to integrate Nutritional Data into the ingredients.
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='btn-group'>
                                        <a href='http://reciger.com' className='btn btn-sm btn-outline-secondary'>Site</a>
                                        <a href='https://github.com/y0Phoenix/MERN-Course-TraveryMedia' className='btn btn-sm btn-outline-secondary'>Repository</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                    
                <hr></hr>
                <h1 className='portfolio-h1' id='future'>Future Projects</h1>
                <div className='future-container'>
                    <ul>
                        <li>My webpage build with three.js and webGL</li>
                        <li>A video game</li>
                    </ul>
                </div>
            </main>
        </Fragment>
    )
}

export default Projects
