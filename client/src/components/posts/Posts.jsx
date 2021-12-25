import Post from '../post/Post';
import './posts.css'

export default function Posts({ posts }) {
    return (
        <div className="posts" key={posts._id}>
            { posts.map((item) =>  (
               <Post post={item}  key={item._id}/>
            ))}
        </div>
    );
};
