import { createContext, useState, useEffect, useContext } from "react";
import APIContext from "./APIContext.jsx";

const PostListContext = createContext();

export function PostListProvider({ children }) {
    const { baseUrl } = useContext(APIContext); // variabile context API
    const [postList, setPostList] = useState([]); // variabile fetch

    // Fetch posts from API
    useEffect(() => {
        fetch(`${baseUrl}/posts`)
            .then((res) => res.json())
            .then((data) => setPostList(data.data))
            .catch((err) =>
                console.error("Error fetching posts", err));
    },
    [baseUrl]);

    return (
        <PostListContext.Provider value={{ postList, setPostList }}>
            {children}
        </PostListContext.Provider>
    );
}

export default PostListContext;