import React, { useState } from "react";
import { createContext } from "react";


const BlogContext = createContext();


export const BlogProvider = ({children}) => {

    const [blogPosts, setBlogPosts] = useState([]);

    const addNewBlogPost = () => {
        setBlogPosts([...blogPosts, {id: `${blogPosts.length + 1}`, title: `Blog Post #${blogPosts.length + 1}`}])
    }

    const data = {
        blogPosts: blogPosts,
        addNewBlogPost: addNewBlogPost
    }

    return (
        <BlogContext.Provider value={data}>{children}</BlogContext.Provider>
    )
}


export default BlogContext;