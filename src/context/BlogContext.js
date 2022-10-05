import React, { useReducer} from "react";
import { createContext } from "react";


const BlogContext = createContext();


export const BlogProvider = ({children}) => {

    const blogReducer = (state, action) => {

        switch(action.type) {
            
            case "add_new_blogpost":
                return [...state, {id: `${state.length + 1}`, title: `Blog Post #${state.length + 1}`}]
            
            default:
                return state;
        };
    };


    const [state, dispatch] = useReducer(blogReducer, []);

    const addNewBlogPost = () => {
        dispatch({type: "add_new_blogpost"})
    }

    const data = {
        blogPosts: state,
        addNewBlogPost: addNewBlogPost
    }

    return (
        <BlogContext.Provider value={data}>{children}</BlogContext.Provider>
    )
}


export default BlogContext;