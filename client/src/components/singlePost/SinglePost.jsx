import { useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './singlePost.css';
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';

export default function SinglePost() {

    const PF = " https://uzerefoods.herokuapp.com/images/";

    const { postId } = useParams();
    const [post, setPost] = useState({});
    const { user } = useContext(Context);
    const [title, setTitle] = useState(" ");
    const [name, setName] = useState(" ");
    const [desc, setDesc] = useState(" ");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async() => {
            const response = await axios.get("/posts/" + postId);
            setPost(response.data.post);
            setTitle(response.data.post.title);
            setDesc(response.data.post.desc);
            setName(response.data.post.categories);
        };
        getPost();
    },[postId]);


    useEffect(() => {
        const getCat = async() => {
            await axios.get("/categories/");
        };
        getCat();
    },[]);

    const handleDelete = async() => {
        try {
            await axios.delete(`/posts/${postId}`, {
                data: {username: user.username}
            });
            window.location.replace('/');
        } catch (error){}  
    };

    const  handleUpdate = async () => {
       const update = { username: user.username, title, desc, name };
       try {
            await axios.put(`/posts/${postId}`, update);
            setUpdateMode(false)
            window.location.replace('/');
       }catch (error) {
            console.log('something went wrong', error);
       }  
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                
                { post.photo && ( <img src={PF + post.photo} alt="" className="singlePostImg" /> )}
                
                { updateMode ? (
                    <>
                        <input 
                            type="text" 
                            value={title} 
                            className="singlePostTitleInput validate" autoFocus={ true }
                            onChange={(e)=> setTitle(e.target.value)}
                            required                             
                        /> 

                        <input 
                            type="text" 
                            value={name} 
                            className="singlePostTitleInput validate" autoFocus={ true }
                            onChange={(e)=> setName(e.target.value)}
                            required
                        /> 
                    </>
                ) : (
                     <h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username && (
                            <div className="singlePostEdit">
                                <i className="singlePostIcon far fa-edit" onClick={()=> setUpdateMode(true)}></i>
                                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                        )}
                     </h1>
                )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:   
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {
                    updateMode ? (
                    <textarea 
                        className="singlePostDescInput" 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    ) : ( 
                        <p className="singlePostDesc">{desc}</p> 
                    )
                } 
                { updateMode && (<button className="singlePostButton" onClick={handleUpdate}>Update</button>) }        
            </div>
        </div>
    )
}