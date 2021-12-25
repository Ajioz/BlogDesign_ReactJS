import './post.css'
import { Link } from 'react-router-dom'



export default function Post({post}) {
    const PF = " https://uzerefoods.herokuapp.com/images/";
    return (
        <>
            <Link to = {`/post/${post._id}`}  className="post link" key={post._id} >
                {post.photo && (<img className="postImg" src={PF + post.photo} alt="" />)}
                <div className="postInfo">
                    <div className="postCats">
                        {post.categories.map((cat) => ( <span className="postCat" key={cat._id}>{cat.name}</span> ))}    
                    </div>
                        <span className="postTitle">{post.title}</span><hr/>
                    <span className="postDate">{ new Date(post.createdAt).toDateString() }</span>
                </div>
                <p className="postDesc">{post.desc}</p>
            </Link>
        </>
    )
}
