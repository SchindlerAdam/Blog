import {React, useContext, useState} from "react";
import { Context as blogContext } from "../context/BlogContext";
import Form from "../components/form";



const CreateBlogScreen = ({navigation}) => {

    const [titleInputState, setTitleInputState] = useState("");
    const [contentInputState, setContentInputState] = useState("");
    const blogContextData = useContext(blogContext);

    const onSubmit = () => {
        blogContextData.actions.addNewBlogPost(blogContextData.dispatch, {title: titleInputState, content: contentInputState})
        navigation.navigate("indexScreen");
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


export default CreateBlogScreen;