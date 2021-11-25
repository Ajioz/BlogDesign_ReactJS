import './sidebar.css'
import farm from '../assets/farm.jpg'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [category, setCategory] = useState([]);

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
                <img src={farm} alt="farm" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque, ad, ratione voluptatibus harum iure doloribus necessitatibus aliquid, maiores corporis similique! Cum cumque ullam impedit veniam pariatur, culpa nobis illo.</p>
            </div>

            <div className="sidebarItem">
                  <span className="sidebarTitle">CATEGORIES</span>
                  <ul className="sidebarList">
                    {category.map((cat)=>(
                        <Link to={`/?cat=${cat.name}`} className="link" key={cat._id}>
                            <li className="sidebarListItem">{cat.name}</li>
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

        </div>
    )
}
