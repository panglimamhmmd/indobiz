import React, { useState } from 'react';
import './SwipeableCards.css'; // We'll write CSS separately.

const services = [
    {
        title: 'Management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '3.5 Jt',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        title: 'Production',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '3.5 Jt',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        title: 'Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '3.5 Jt',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        title: 'Branding',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '3.5 Jt',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        title: 'Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '3.5 Jt',
        image: 'https://via.placeholder.com/300x200',
    },
];

const SwipeableCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === services.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? services.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel-container">
            <h2 className="carousel-title">
                Our <span>Services</span>
            </h2>
            <p className="carousel-subtitle">
                Layanan Profesional yang Dirancang untuk Bisnis Anda
            </p>
            <div className="carousel">
                <button className="carousel-button left" onClick={prevSlide}>
                    &#8592;
                </button>
                <div className="carousel-track">
                    {services.map((service, index) => (
                        <div
                            className={`carousel-card ${
                                index === currentIndex ? 'active' : ''
                            }`}
                            key={index}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="carousel-image"
                            />
                            <div className="card-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <p className="price">{service.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-button right" onClick={nextSlide}>
                    &#8594;
                </button>
            </div>
            <div className="carousel-indicators">
                {services.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${
                            index === currentIndex ? 'active' : ''
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default SwipeableCards;
