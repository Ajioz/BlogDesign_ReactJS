import './sidebar.css'
import farm from '../assets/cassava.jpg'
import processed from '../assets/Cassava_process.jpg'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Sidebar() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        Aos.init();
    }, [])

    useEffect(() => {
      const getCat = async () => {
          const response = await axios.get('/categories');
          setCategory(response.data.cats);
      }
      getCat();
    }, [])

    return (
        <div className="sidebar">

            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img src={farm} alt="farm" data-aos="zoom-in-up" data-aos-delay="200" />
                <p>
                    We are a Leading Cassava Processing company since 2008. Uzere Foods and Industries Ltd ( UFIL) is an agro-allied company, Formerly known as Uzere Cassava Processing Factory Ltd  which operates under the Public Private Partnership (PPP) under the Leadership of her Managing Director, Samuel Askia Jr.
                </p>
                <img src={processed} alt="farm"  data-aos="zoom-in-down" data-aos-delay="200" /> 
                <p> 
                    UFIL has been leading the  initiative of Commercial Cassava Cultivation in Delta State and Environs. 
                    Partnering over Two Hundred Farmers in the Cultivation of Cassava. Our Production Capacity is estimated at 25MT per day for Starch and 25MT for Flour.
                </p>
            </div>

            <div className="sidebarItem">
                  <span className="sidebarTitle">CATEGORIES</span>
                  <ul className="sidebarList">
                    {category.map((cat)=>(
                        <Link to={`/?cat=${cat.name}`} className="link" key={cat._id}>
                            <li className="sidebarListItem" data-aos="flip-left" data-aos-delay="100">{cat.name}</li>
                        </Link>
                    ))}
                  </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>

            <div className="popular-farm">  
               <h4 className="foodTitle">Uzere Foods</h4>         
                <div className="category">
                    <ul className="category-list">
                        <li className="list-items" data-aos="fade-left" data-aos-delay="100">
                        <a href="#">Software</a>
                       
                        </li>
                        <li className="list-items" data-aos="fade-left" data-aos-delay="200">
                        <a href="#">Technology</a>
                       
                        </li>
                        <li className="list-items" data-aos="fade-left" data-aos-delay="300">
                        <a href="#">LifeStyle</a>
                        
                        </li>
                        <li className="list-items" data-aos="fade-left" data-aos-delay="400">
                        <a href="#">Shopping</a>
                       
                        </li>
                        <li className="list-items" data-aos="fade-left" data-aos-delay="500">
                        <a href="#">Food</a>
                        
                        </li>
                    </ul>
                </div>
            </div>

            <div className="popular-post">
                <h4 className="foodTitle">Popular Post</h4>     
                <div className="post-content" data-aos="flip-up" data-aos-delay="100">
                    <div className="post-image">
                        <div><img className="img" src={farm} alt="Blog1" /></div>
                        <div className="post-info flex-row">
                            <span
                            >&nbsp;&nbsp;<i class="fas fa-calendar-alt text-gray"></i
                            >&nbsp;&nbsp; January 14, 2019 &nbsp;&nbsp;</span
                            >
                            <span>2 Comments</span>
                        </div>
                    </div>
                    <div class="post-title">
                     <h6>New data recording to better serve the ecosytem</h6>
                    </div>
                </div>
                <div className="post-content" data-aos="flip-right" data-aos-delay="300">
                <div className="post-image">
                    <div>
                    <img className="img" src={farm} alt="Blog1" /></div>
                    <div className="post-info flex-row">
                        <span>&nbsp;&nbsp;<i class="fas fa-calendar-alt text-gray"></i
                            >&nbsp;&nbsp; January 14, 2019 &nbsp;&nbsp;
                        </span>
                        <span>2 Comments</span>
                    </div>
                </div>
                <div class="post-title">
                    <h6>New data recording to better serve the ecosytem</h6>
                </div>
            </div>
        </div>

    </div>
    )
}
