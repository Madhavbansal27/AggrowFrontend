import React, { useEffect } from 'react';
import './Scheme.css';
import { initializeCarousel, nextSlide, prevSlide, clearCarousel } from './carousel.js';

const Scheme = () => {
    useEffect(() => {
        initializeCarousel(); // Initialize the carousel and start auto-slide

        // Cleanup function to clear intervals on unmount
        return () => clearCarousel();
    }, []);

    return (
        <div className='scheme'>
            <h1>Top government schemes</h1>
            <div className="scheme-content">
                <section className="carousel" aria-label="Image Gallery">
                    <div className="carousel__container">
                        <div className="carousel__slides">
                            <div className="carousel__slide">
                                <img src="https://www.tractorjunction.com/blog/wp-content/uploads/2021/05/Pradhan-Mantri-Krishi-Sinchai-Yojana-PMKSY.jpg" alt="Description of image 1" />
                            </div>
                            <div className="carousel__slide">
                                <img src="https://www.tractorjunction.com/blog/wp-content/uploads/2021/05/Kisan-Credit-Card-KCC.jpg" alt="Description of image 2" />
                            </div>
                            <div className="carousel__slide">
                                <img src="https://www.tractorjunction.com/blog/wp-content/uploads/2021/05/National-Mission-For-Sustainable-Agriculture-NMSA.jpg" alt="Description of image 3" />
                            </div>
                            <div className="carousel__slide">
                                <img src="https://www.tractorjunction.com/blog/wp-content/uploads/2021/05/Pradhan-Mantri-Fasal-Bima-Yojana-PMFBY.jpg" alt="Description of image 4" />
                            </div>
                        </div>
                    </div>
                    <button className="carousel__button carousel__button--prev" onClick={prevSlide}>&#10094;</button>
                    <button className="carousel__button carousel__button--next" onClick={nextSlide}>&#10095;</button>
                </section>
                <div className="news-ticker">
                    <div class="news-alerts holder">
                        <h3>News</h3>
                        <div className="news">
                        <ul id="news-alerts" class="news-alert-list">
                            <li><a href="#">Revival of fasal bima Yojana</a></li>
                            <li><a href="#">Cabinet approves the clean plant programme under mission of integrated development for horticulture</a></li>
                            <li><a href="#">Union Minister Shri Shivraj Singh Chouhan launches Krishi Nivesh Portal & AgriSure Fund and distributes AIF Excellence Awards</a></li>
                            <li><a href="#">Cabinet approves the Digital Agriculture Mission today with an outlay of Rs. 2817 Crore, including the central share of Rs. 1940 Crore</a></li>
                            <li><a href="#">Cabinet accords approval for progressive expansion of Central Sector Scheme of Agriculture Infrastructure Fund</a></li>
                            <li><a href="#">
                            MoS Shri Bhagirath Choudhary launches the digital geo-spatial platform, Krishi-Decision Support System</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Scheme;
