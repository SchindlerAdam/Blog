import createDataContext from "./createDataContext";


const blogReducer = (state, action) => {

    switch(action.type) {
        
        case "add_new_blogpost":
            return [...state, {id: Math.floor(Math.random() * 9999), title: `Blog Post #${state.length + 1}`}]

        case "delete_blog":
            return state.filter((blogPostItem) => blogPostItem.id !== action.payload)
        
        default:
            return state;
    };
};


const addNewBlogPost = (dispatch) => {
    return dispatch({type: "add_new_blogpost"});
};

const deletePostById = (dispatch, id) => {
    return dispatch({type: "delete_blog", payload: id})
}

const actions = {
    addNewBlogPost: addNewBlogPost,
    deleteBlogPost: deletePostById
}

const initialState = [];

export const {Context, Provider} = createDataContext(blogReducer, actions, initialState)

