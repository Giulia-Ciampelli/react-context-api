import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

// context
import APIContext from "../contexts/APIContext.jsx";

// stile
import style from "../components/SinglePost.module.css";

export default function SinglePost() {
    const { slug } = useParams();
    const [post, setPost] = useState();
    const navigate = useNavigate();
    const {baseUrl} = useContext(APIContext); // variabile context

    // funzione fetch
    useEffect(() => {
        fetch(`${baseUrl}/posts/${slug}`)
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
            <img src={`${baseUrl}/${post.image}`} alt={post.title} />
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