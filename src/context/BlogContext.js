import createDataContext from "./createDataContext";


const blogReducer = (state, action) => {

    switch(action.type) {
        
        case "add_new_blogpost":
            return [...state, {id: `${state.length + 1}`, title: `Blog Post #${state.length + 1}`}]
  
        
        default:
            return state;
    };
};


const addNewBlogPost = (dispatch) => {
    return dispatch({type: "add_new_blogpost"});
};

const actions = {
    addNewBlogPost: addNewBlogPost
}

const initialState = [];

export const {Context, Provider} = createDataContext(blogReducer, actions, initialState)

