import { useState, useEffect } from 'react';
import { useLocation } from 'react-router'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from "axios";
import './home.css'

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
            < Header />
            <div className="home">
                <Posts posts={posts} key={posts.Id}/>
                <Sidebar />
            </div>
        </>
    )
}
