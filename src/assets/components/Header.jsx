import React,{ useCallback } from 'react'
import headerlogo from '../images/headerlogo.png'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Header() {

        const particlesInit = useCallback(async engine => {
            console.log(engine);
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadFull(engine);
        }, []);
    
        const particlesLoaded = useCallback(async container => {
            await console.log(container);
        }, []);


    return (
        <>
        <Particles
         id="tsparticles"
          init={particlesInit} 
          loaded={particlesLoaded}
          options={{
            fullScreen: {
                enable: false,
                zIndex:0,
              },
            background: {
                color: {
                    value: "#000",
                },
                repeat:{
                    value: 'no-repeat',
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "random",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
          />
        <div className='first-section relative'>
            <div className='header fixed z-10 pt-10 w-full'>
                <div className='header-container'>
                    <div className='top-bar border rounded-2xl px-8 py-4 flex justify-between items-center'>
                        <div><img src={headerlogo} /></div>
                        <nav>
                            <ul className='text-white no-underline flex gap-16 font-roboto font-weight300 text14'>
                                <li>Destinations</li>
                                <li>Activities</li>
                                <li>About Us</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                        <button class="bg-white rounded-xl px-8 py-3 text16 font-roboto font-weight600">Signin</button>
                    </div>
                </div>
            </div>
            <div className='hero pak-container flex justify-center flex-col'>
                <h1 className='text60 font-weight700 font-inter'>Excited to announce </h1>
                <h2 className='text-white text46 font-weight600 w-6/12 pt-6 font-inter'>the venues of Dubai UnConference 25-26th Jan.</h2>
                <div class="pt-20"><button className='rounded-xl px-10 py-5 text18 font-weight600 font-roboto'> Contact us</button></div>
            </div>
        </div>
        </>
    )
}
