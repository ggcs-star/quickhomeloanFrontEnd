import React from 'react'

function Profiles({ className }) {
    return (
        <div>
            <ul className="flex items-center text-center px-2">
                <li className="border-r-1 border-l-1 last:border-r-0 border-gray-200">
                    <a href="" draggable="false" target="_blank" rel="noopener noreferrer"
                        className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${className}`}>
                        <i className="fa-brands fa-facebook-f text-sm"></i>
                    </a>
                </li>
                <li className="border-r last:border-r-0 border-gray-200">
                    <a href="" target="_blank" rel="noopener noreferrer"
                        className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${className}`}>
                        <i className="fa-brands fa-youtube text-sm"></i>
                    </a>
                </li>
                <li className="border-r border-gray-200">
                    <a href="" target="_blank" rel="noopener noreferrer"
                        className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${className}`}>
                        <i className="fa-brands fa-linkedin-in text-sm"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Profiles;
