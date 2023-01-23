import React, { useEffect, useState, useRef } from 'react';
import './Video.css';
import { useInView } from 'react-intersection-observer';

function Video() {

    const videoSrc1 = "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4";
    const videoSrc2 = "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4";
    const videoSrc3 = "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4";

    const img1 = 'https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-poster-00001.jpg';
    const img2 = 'https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-poster-00001.jpg';
    const img3 = 'https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-poster-00001.jpg';


    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


   
    console.log("position;", scrollPosition)

   


    return (
        <div className='container'>

            <img className='image' src={scrollPosition < 400 ? 'https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-poster-00001.jpg' : 'https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-poster-00001.jpg'} />
            
            

            <video loop autoPlay muted className='video'>
                <source src='https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4' type="video/webm" />
            </video>


            {(() => {
                if (scrollPosition < 400) {
                    <video loop autoPlay muted className='video'>
                        <source src='https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4' type="video/webm" />
                    </video>
                } else {

                    <video loop autoPlay muted className='video'>
                        <source src='https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4' type="video/webm" />
                    </video>

                }
                if (scrollPosition > 1000) {

                    <video loop autoPlay muted className='video'>
                        <source src='https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4' type="video/webm" />
                    </video>

                }
            })}





        </div>
    )

}

export default Video