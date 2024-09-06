import React from 'react'
import './BoxesInfo.css'
const BoxesInfo = () => {
    return (
        <div className='boxesinfo'>
            <h1>What is Agrow ?</h1>
            <div class="container-boxes">
                <div class="service-box1">
                    <div class="icon">📦</div>
                    <h3>Personalized Crop Recommendations</h3>
                    <p>Analyzes land, soil, climate, and demand for optimized crop suggestions.</p>
                </div>
                <div class="service-box">
                    <div class="icon">👥</div>
                    <h3>Real-Time Supply Tracking</h3>
                    <p>Tracks farmer crop updates to prevent oversupply and balance demand.</p>
                </div>
                <div class="service-box1">
                    <div class="icon">🌱</div>
                    <h3>MSP Assurance</h3>
                    <p>Ensures crops align with MSP policies for guaranteed returns.</p>
                </div>
                <div class="service-box">
                    <div class="icon">🧬</div>
                    <h3>Aggrow Score</h3>
                    <p>Ranks crops based on suitability and profitability factors.</p>
                </div>
                <div class="service-box1">
                    <div class="icon">🔬</div>
                    <h3>Market Demand Insights</h3>
                    <p>Provides trends and profitability data for better crop choices.</p>
                </div>
                <div class="service-box">
                    <div class="icon">🏢</div>
                    <h3>Simple Interface</h3>
                    <p>Easy navigation with crop category filters and detailed reports.</p>
                </div>
            </div>

        </div>
    )
}

export default BoxesInfo;
