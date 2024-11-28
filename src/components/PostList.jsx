import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

// context
import APIContext from "../contexts/APIContext";
import PostListContext from "../contexts/PostListContext";

// stile
import style from "../components/Main.module.css";

export default function PostList({ handleTrashPost }) {
    const {baseUrl} = useContext(APIContext);
    const { postList } = useContext(PostListContext);

    return (
        <>
            <h1>
                I miei post
            </h1>
            <ul>
                {
                    postList.length ? postList.map((post, index) => <li key={index}>
                        <div className={style.card}>
                            <h2>

                                {/* prova: aggiungi un modo per accedere allo slug giusto */}
                                <Link to={`/posts/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>
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

                        {/* RICORDA: inserire sempre type=button per bottoni non per POST, o va in submit per default */}
                        <button type="button" data-slug={post.slug} onClick={() => handleTrashPost(post.slug)}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </li>) : <p>No posts yet</p>
                }
            </ul>
        </>
    )
}