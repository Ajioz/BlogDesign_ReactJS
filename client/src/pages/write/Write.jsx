import './write.css'
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';


export default function Write() {

    const [title, setTitle] = useState(" ");
    const [desc, setDesc] = useState(" ");
    const [file, setFile] = useState(null);
    const [name, setName] = useState(" ");
    const { user } = useContext(Context);
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
        const verify = await items.find((findOne) => findOne === name )    
        const newPost = { title, desc, username: user.username, categories:name }

        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.photo = filename;
            try {
               const resData =  await axios.post('https://uzerefoods.herokuapp.com/api/upload', data);
               if(resData.status === 201){
                    window.location.replace('/');
               };
               
            } catch (error) { }
        }
        try {
            await axios.post('https://uzerefoods.herokuapp.com/api/posts', newPost);
            
            if(verify === undefined) {
                const resCat =  await axios.post('https://uzerefoods.herokuapp.com/api/categories', {name});
               if(resCat.status === 201){   
                    window.location.replace('/');
               }
            }
        } catch (error) { }

    }

    return (
        <div className="write">
            { file && (<img  className="writeImg" src={URL.createObjectURL(file)} alt="" />) }
          
            <form className="writeForm" encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">Add Image<i className="writeIcon fas fa-plus"></i></label>
                
                    <input 
                        type="file" 
                        id="fileInput" 
                        style={{display:"none"}} 
                        onChange={(e) => setFile(e.target.files[0])}
                        className="validate myFile" required
                    />
                    
                    <input 
                        type="text" 
                        placeholder="Title" style={{width:'60%'}}
                        className="writeInput validate" autoFocus={ true }
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <input 
                        type="text" style={{width:'60%'}}
                        placeholder="Category" 
                        className="writeInput validate" autoFocus={ true }
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                     <textarea 
                        placeholder="Tell Your Story..." required
                        type="text" className="writeText" rows={15}
                        onChange={(e) => setDesc(e.target.value)}>
                    </textarea>

                </div>

                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}