import React from 'react';
import posts from './Posts.module.css';
import SinglePost from './SinglePost/SinglePost'


const Posts = (props) => {

    let postElements = props.dataPost.map(p => <SinglePost id={p.id} message={p.message} key={p.id} like={p.like}/>);
    let newPostText = props.newPostText;

    let onAddPost = () => {
        props.addPostAC();
    }
    let onPostChange = (a) => {
        let text = a.target.value;
        props.updateNewPostText(text);
    }
        return (
        <div className={posts.item}>
            <div><h3>My post</h3></div>

            <div>New post</div>
            <div><textarea onChange={onPostChange}
                           className={posts.area}
                           value={newPostText}
                           placeholder={'Enter text for the new post'}
            /></div>
            <div>
                <button className={posts.add}
                        onClick={onAddPost}>
                    Add post
                </button>
            </div>
            {postElements}
        </div>
    )
}
export default Posts; 