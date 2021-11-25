import './write.css'
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';


export default function Write() {

    const [title, setTitle] = useState(" ");
    const [desc, setDesc] = useState(" ");
    const [file, setFile] = useState(null);
    const [name, setName] = useState(" ");
    const {user} = useContext(Context);
    const [items, setItems] = useState([])

    useEffect(() => {
        const getCat = async () => {
            let itemCat = [];
            const response = await axios.get('/categories');
            response.data.cats.map((item)=> {
                itemCat.push(item.name);
            });
            setItems(itemCat);
        }
        getCat();
    }, [name])
    
    
    const handleSubmit = async(e) => {

        e.preventDefault();
        const verify = items.find((findOne) => findOne === name )    
        const newPost = { title, desc, username: user.username, categories:name }
    
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.photo = filename;
            try {
                await axios.post('http://localhost:3005/api/upload', data)
                window.location.replace('/');
            } catch (error) { }
        }
        try {
            await axios.post('http://localhost:3005/api/posts', newPost);
            if(verify === undefined) await axios.post('http://localhost:3005/api/categories', {name});
            window.location.replace('/');
        } catch (error) { }
    }

    return (
        <div className="write">
            { file && (<img  className="writeImg" src={URL.createObjectURL(file)} alt="" />) }
          
            <form className="writeForm" encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className="writeIcon fas fa-plus"></i></label>

                    <input 
                        type="file" 
                        id="fileInput" 
                        style={{display:"none"}} 
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    
                    <input 
                        type="text" 
                        placeholder="Title" 
                        className="writeInput"autoFocus={ true }
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input 
                        type="text" 
                        placeholder="Category" 
                        className="writeInput"autoFocus={ true }
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="writeFormGroup">
                    <textarea 
                        placeholder="Tell Your Story..." 
                        type="text" className="writeInput writeText"
                        onChange={(e) => setDesc(e.target.value)}>
                    </textarea>
                </div>

                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}