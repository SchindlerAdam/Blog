import {React, useContext, useState} from "react";
import { Context as blogContext } from "../context/BlogContext";
import Form from "../components/form";


const EditScreen = (props) => {
    
    const blogId = props.route.params.id;
    const blogContextData = useContext(blogContext);

    const [titleInputState, setTitleInputState] = useState("");
    const [contentInputState, setContentInputState] = useState("");

    const onSubmit = () => {
        blogContextData.actions.editBlogPost(blogContextData.dispatch, blogId, titleInputState, contentInputState);
        props.navigation.navigate("indexScreen")
    }

    return (
        <Form 
            titleState = {titleInputState}
            setTitleState = {setTitleInputState}
            contentState = {contentInputState}
            setContentState = {setContentInputState}
            submit = {onSubmit}
        />
    );
};



export default EditScreen;