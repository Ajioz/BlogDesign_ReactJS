import { Link } from 'react-router-dom'
import React from 'react'
import './stat.css'

export default function Stat() {
    return (
        <div className="before-footer">
            <div className="sypnosis">
            <div className="sypnosis-heading" data-aos="fade-down" data-aos-delay="100">
                <h2>How we can help you</h2>
            </div>
            <div className="sypnosis-content">

                <div data-aos="fade-left" data-aos-delay="200">
                <h5>Fire Protection & Fireproofing</h5>
                <p>Design of fire protection systems for buildings and structures Procurement & supply of fire protection & fireproofing materials Procurement & supply of fireproofing equipment & accessories Installation of fire protection systems Installation of fireproofing</p>
                <button className="btn"><Link to ="/contact" className="btn-blog">Learn More</Link></button>
                </div>

                <div data-aos="fade-left" data-aos-delay="300">
                <h5>Procurement Services</h5>
                <p>Design of fire protection systems for buildings and structures Procurement & supply of fire protection & fireproofing materials Procurement & supply of fireproofing equipment & accessories Installation of fire protection systems Installation of fireproofing</p>
                <button className="btn"><Link to ="/contact" className="btn-blog">Learn More</Link></button>
                </div>

                <div data-aos="fade-left" data-aos-delay="400">
                <h5>Supply of Technical Manpower</h5>
                <p>Design of fire protection systems for buildings and structures Procurement & supply of fire protection & fireproofing materials Procurement & supply of fireproofing equipment & accessories Installation of fire protection systems Installation of fireproofing</p>
                <button className="btn"><Link to ="/contact" className="btn-blog">Learn More</Link></button>
                </div>

            </div>
            </div>

            <div className="statistics">
            <div className="statistics-heading" data-aos="flip-down" data-aos-delay="100"> 
                <h2>More than 10 Years of Experience</h2>
            </div>
            <div className="statistics-content">
                <div className="stat-icon" data-aos="fade-right" data-aos-delay="100">
                <i className="fas fa-suitcase"></i>
                <span>221 projects completed</span>
                </div>
                <div  className="stat-icon" data-aos="flip-up" data-aos-delay="100">
                <i className="fas fa-award"></i>
                <span>12 awards won</span>
                </div>
                <div  className="stat-icon" data-aos="fade-left" data-aos-delay="100">
                <i className="fas fa-thumbs-up"></i>
                <span>58 satisfied clients</span>
                </div>
            </div>
            </div>

            <div className="contact-us">
            <p data-aos="fade-left" data-aos-delay="100">
                We look forward to bringing our traditional dedication to work for your esteemed company.
            </p>
            <button className="btn form-btn" data-aos="fade-right" data-aos-delay="100"> 
                <Link to ="/contact" className="btn-blog"> Contact Us </Link>
            </button>
            </div>
        </div>
    )
}
