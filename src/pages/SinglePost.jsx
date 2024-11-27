import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// stile
import style from "../components/SinglePost.module.css";

export default function SinglePost() {
    const { slug } = useParams();
    const [post, setPost] = useState();
    const url = `http://localhost:3000/posts/${slug}`;
    const navigate = useNavigate();

    // funzione fetch
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPost(data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [slug])

    // condizionale per slug non trovato
    if (!post) {
        return <p>
            Post non trovato
        </p>
    }

    return (
        <div className={style.single}>
            <div className={style.title}>
                <button onClick={() => navigate(-1)}>
                    Torna ai post
                </button>
                <h2>
                    {post.title}
                </h2>
            </div>
            <img src={`http://localhost:3000/${post.image}`} alt={post.title} />
            <p>
                {post.content}
            </p>
            <p>
                {post.category}
            </p>
            <div className={style.tags}>
                <h2>
                    Tags:
                </h2>
                <p>
                    {Array.isArray(post.tags) && post.tags.length > 0 ? post.tags.join(', ') : 'No tags available'}
                </p>
            </div>
            <p>
                {post.public ? 'Post pubblico' : 'Post privato'}
            </p>
        </div>
    )
}