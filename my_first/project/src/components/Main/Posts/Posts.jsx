import React from 'react';
import posts from './Posts.module.css';
import SinglePost from './SinglePost/SinglePost'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validator";
import {Textarea} from "../../Common/FormsControl";


const Posts = (props) => {

    let postElements = props.dataPost.map(p => <SinglePost id={p.id} message={p.message} key={p.id} like={p.like}/>);
    let addNewPost = (values) => {
        props.addPostAC(values.newMessageBody);
    }
    return (
        <div className={posts.item}>
            <div><h3>My post</h3></div>

            <div>New post</div>
            <AddPostSendRedux onSubmit={addNewPost}/>
            <div>{postElements}</div>
        </div>
    )
}
const maxLength150 = maxLengthCreator(150);
const AddPostSend = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div><Field className={posts.area}
                        component={Textarea}
                        placeholder='Enter text for the new post'
                        name='newMessageBody'
                        validate={[requiredField, maxLength150]}
            /></div>
            <div>
                <button className={posts.add}
                >
                    Add post
                </button>
            </div>
        </form>
    )
}
const AddPostSendRedux = reduxForm({form: 'AddPostSend'})(AddPostSend);
export default Posts; 