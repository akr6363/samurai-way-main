import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostsType = {
    id: number
    message: string
    likeCount: number
}


let dialogsData = [
    {id: 1, name: "Sveta"},
    {id: 2, name: "Dima"},
    {id: 3, name: "Igor"},
    {id: 4, name: "Oksana"},
    {id: 5, name: "Andrey"},
]

let messageData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Im fine motherfuker"},
]

let postsData: Array<PostsType> = [
    {id: 1, message: "Hi, how are you?", likeCount: 15},
    {id: 2, message: "It is my first post", likeCount: 20},
    {id: 3, message: "Yoooo", likeCount: 1111},
    {id: 4, message: "Vlad dibil", likeCount: 100500},
]



ReactDOM.render( <App
    dialogsData={dialogsData}
    messageData={messageData}
    postsData={postsData}/>, document.getElementById('root'));