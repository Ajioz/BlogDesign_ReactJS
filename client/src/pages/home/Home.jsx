import { useState, useEffect } from 'react';
import { useLocation } from 'react-router'
import Slider from '../../components/slider/Slides';
import Header from '../../components/header/Header'; 
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from "axios";

import './home.css'
import logo from '../../components/assets/logo.png'
import Stat from '../../components/statistics/Stat';


export default function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
   
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get("/posts" +  search)
            setPosts(response.data.posts)
        }
        fetchPosts();
    }, [search])
    return (
        <>
            <div className="row header">
                <div className="headerTitles">
                    <span className="headerTitleSm">Uzere Food & Industries</span>
                    <span className="logoLeft"><img src={logo} style={{width: '80px', height: '50px'}} /></span>
                </div>
            </div>
            < Slider />
            < Header />
            <div className="home">
                <Posts posts={posts} key={posts.Id}/>
                <Sidebar />
            </div>
            <section>
                <Stat />
            </section>
        </>
    )
}
