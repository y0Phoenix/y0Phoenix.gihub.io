import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText';

const Bio = () => {
    const [replay, setReplay] = useState(true);
    // Placeholder text data, as if from API
    const placeholderText = [
        { type: "heading1", text: "Framer Motion" },
        {
        type: "heading2",
        text: "Animating responsive text!"
        }
    ];

    const container = {
        visible: {
        transition: {
            staggerChildren: 0.025
        }
        }
    };

    // Quick and dirt for the example
    const handleReplay = () => {
        setReplay(!replay);
        setTimeout(() => {
        setReplay(true);
        }, 600);
    };
    return (
        <Fragment>
            <div className='bio-container'>
                <div>
                    <h1>Background</h1>
                    <p>I grew up working with computers and playing video games, so When it came to understanding basic computer science I had a small advantage. Although most of my time was spent playing games I made YouTube videos, kind of embarrassing, however making videos and thumbnails taught me alot about graphics, process and vision.</p>
                </div>
                <hr></hr>
                <div className='bio-started-container'>
                    <h1>How I got Started in the industry</h1>
                    <div className='bio-started'>
                        <p>I started out by making Smoothy as an answer to the Discord Music Bots getting shutdown. It is built with Node and an npm package called Discord.js.
                            It communicates with the Discord API to send and recieve messages and play music in voice channels. Not long after I started that project I enrolled in a Full Stack Bootcamp.
                            I am now a passionate developer who has worked with Linux and even Microcontrollers running binary C++ code, ontop of being a Web Developer I have learned so much in my short "dev age".
                        </p>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <motion.p layout >That is where my programming journey starts and my projects and future projects shown below are where it's going. You can contact me via my Linkedin (Aaron Graybill), or email me via the contact page.</motion.p>
                </div>
                {/* <motion.div
                    className="App"
                    initial="hidden"
                    // animate="visible"
                    animate={replay ? "visible" : "hidden"}
                    variants={container}
                    >
                    <div className="container">
                        {placeholderText.map((item, index) => {
                        return <AnimatedText {...item} key={index} />;
                        })}
                    </div>
                    <button onClick={handleReplay}>
                        Replay <span>⟲</span>
                    </button>
                </motion.div> */}
                <div className='bio-container-link'>
                    <Link to='/portfolio'>Portfolio</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Bio
