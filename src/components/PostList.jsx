import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

// stile
import style from "../components/Main.module.css";

export default function PostList({postList, handleTrashPost}) {
    return (
        <ul ul >
        {
            postList.length ? postList.map((post, index) => <li key={index}>
                <div className={style.card}>
                    <h2>

                        {/* prova: aggiungi un modo per accedere allo slug giusto */}
                        <Link to={`/posts/${post.slug}`}>
                            {post.title}
                        </Link>
                    </h2>
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

                {/* RICORDA: inserire sempre type=button per bottoni non per POST, o va in submit per default */}
                <button type="button" data-slug={post.slug} onClick={() => handleTrashPost(post.slug)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </li>) : <p>No posts yet</p>
        }
        </ul>
    )
}