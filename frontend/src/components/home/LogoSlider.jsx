// import React from 'react';
import './LogoSlider.css';

const logos = [
    'https://via.placeholder.com/150x80?text=Logo+1',
    'https://via.placeholder.com/150x80?text=Logo+2',
    'https://via.placeholder.com/150x80?text=Logo+3',
    'https://via.placeholder.com/150x80?text=Logo+4',
    'https://via.placeholder.com/150x80?text=Logo+5',
    'https://via.placeholder.com/150x80?text=Logo+6',
    'https://via.placeholder.com/150x80?text=Logo+7',
    'https://via.placeholder.com/150x80?text=Logo+8',
];

const LogoSlider = () => {
    return (
        <div className="logo-slider-container">
            <div className="logo-slider">
                {/* Loop through the logos and render them */}
                {logos.map((logo, index) => (
                    <div key={index} className="logo-slide">
                        <img src={logo} alt={`Logo ${index + 1}`} className="logo-img" />
                    </div>
                ))}
                {/* Duplicate logos to enable infinite scrolling */}
                {logos.map((logo, index) => (
                    <div key={index + logos.length} className="logo-slide">
                        <img src={logo} alt={`Logo ${index + 1}`} className="logo-img" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoSlider;
