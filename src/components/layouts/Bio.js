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
                        <p>My first job I ever had was at a Catering company Catering By Design in Rochester MN. At the time I knew nothing of culinary arts and didn't expect the job to last long. However I ended up working there for 5 years (until I was 20) and became an excellent chef. I made everything from asian dishes, italian , indian, american, etc. At the time I was under the impression that food would be my life, I mean I loved it, I was good at it and because I was good at it I could make a decent living. Then all of a sudden the Discord-Music-Bot-Pocalypse struck due to YouTube giving out Cease and Desist letters to all the major music bots. I said to myself well that sucks we can't listen to music in our Discord calls anymore. Then I had a thought, JUST MAKE MY OWN. I had worked with computers all my life, and I had modified code before so it shouldn't be too hard. Man was I wrong. It was the most challenging thing I had ever done with computers. I built my own computer, diagnosed it whenever it had problems but nothing like that came close to the challenges I faced when coding my very own Discord-Music-Bot Smoothy, and you know what, I loved it. The hard process was fun for me, I also love the community that coding has, most everybody is so helpful and sincere. I then started posting my work on GitHub (y0Phoenix). Shortly after I made Smoothy I enrolled into a part-time coding bootcamp MIT xPRO Full Stack Development. I decided to pursue a career in programming, although I loved making food and I probably will forever, a tech job is more sustainable.</p>
                        <img src='https://raw.githubusercontent.com/y0Phoenix/Smoothy/development/pictures/Smoothy%20Logo.png' alt='smoothy...' style={{"width": "200px", "height": "200px"}}></img>
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
