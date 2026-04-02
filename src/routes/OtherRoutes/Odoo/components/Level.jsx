import React, { useRef, useState, useEffect } from 'react'
import redHighlight from '../../../../assets/detail/red_highlight.svg'
import greenHighlight from '../../../../assets/detail/green_highlight.svg'

const Level = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleProgressChange = (e) => {
        const value = e.target.value;
        setProgress(value);
        if (videoRef.current) {
            const time = (value / 100) * videoRef.current.duration;
            videoRef.current.currentTime = time;
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(progress);
        }
    };

    return (
        <div className="flex flex-col bg-gray-200 h-[520px] lg:h-[900px]">
            <div className="flex justify-end">
                <div
                    className="bg-white h-[400px] w-full lg:w-[90vw] lg:h-[800px] rounded-l-full p-8 relative overflow-hidden"
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="absolute inset-0 bg-white/80"></div>
                    <div className="text-center relative z-10">
                        <h1 className="text-5xl md:text-7xl font-bold mt-20 relative font-caveatRegular leading-tight">
                            <span className="relative inline-block mr-4">
                                Level up
                                <span
                                    className="absolute top-1/2 left-0 -translate-y-1/2 h-[2.5rem] w-full -z-10 transform -rotate-1"
                                    style={{
                                        backgroundImage: `url(${redHighlight})`,
                                        backgroundSize: '100% 100%',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                ></span>
                            </span>

                            your quality of{' '}

                            <span className="relative inline-block ml-4">
                                work
                                <span
                                    className="absolute top-10 lg:top-14 left-0 -translate-y-1/2 h-[2.5rem] w-full -z-10 transform -rotate-1"
                                    style={{
                                        backgroundImage: `url(${greenHighlight})`,
                                        backgroundSize: '100% 100%',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                ></span>
                            </span>
                        </h1>

                    </div>
                </div>
            </div>

            <div className='absolute mt-[250px] left-1/2 transform -translate-x-1/2'>
                <div className="mb-n5">
                    <div className='bg-white rounded-lg shadow-lg  w-[90vw] h-[250px] lg:w-[60vw] lg:h-[550px] mx-auto relative overflow-hidden'>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <video
                                ref={videoRef}
                                loop
                                muted
                                className="p-2 w-full h-full object-contain"
                                onTimeUpdate={handleTimeUpdate}
                                onClick={handleVideoClick}
                                playsInline
                            >
                                <source src="https://download.odoocdn.com/videos/odoo_com/video_homepage.webm" type="video/webm" />
                                <source src="https://download.odoocdn.com/videos/odoo_com/video_homepage.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-4 hidden md:flex">
                        <button
                            onClick={handlePlayPause}
                            className="bg-transparent text-pink-900 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200"
                        >
                            {isPlaying ? (
                                <i className="fas fa-pause text-xl"></i>
                            ) : (
                                <i className="fas fa-play text-xl"></i>
                            )}
                        </button>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={handleProgressChange}
                            className="progressbar p-0 mx-4 w-1/2"
                            style={{
                                WebkitAppearance: 'none',
                                background: 'transparent',
                            }}
                        />
                        <style>
                            {`
                                input[type="range"] {
                                    -webkit-appearance: none;
                                    appearance: none;
                                    background: transparent;
                                    position: relative;
                                }
                                input[type="range"]::-webkit-slider-thumb {
                                    -webkit-appearance: none;
                                    appearance: none;
                                    width: 15px;
                                    height: 15px;
                                    border-radius: 50%;
                                    background: #831843;
                                    cursor: pointer;
                                    margin-top: -5.5px;
                                }
                                input[type="range"]::-webkit-slider-runnable-track {
                                    width: 100%;
                                    height: 2px;
                                    background: gray;
                                    border-radius: 2px;
                                    cursor: pointer;
                                }
                                input[type="range"]::-moz-range-thumb {
                                    width: 15px;
                                    height: 15px;
                                    border-radius: 50%;
                                    background: #831843;
                                    cursor: pointer;
                                    border: none;
                                }
                                input[type="range"]::-moz-range-track {
                                    width: 100%;
                                    height: 4px;
                                    background: #000000;
                                    border-radius: 2px;
                                    cursor: pointer;
                                }
                            `}
                        </style>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Level