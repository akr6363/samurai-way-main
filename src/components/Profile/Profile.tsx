import React from 'react';

const Profile = () => {
    return (
        <div className="content">
            <div className="content__banner-wrapper">
                <img
                    src="https://kartinkin.net/pics/uploads/posts/2022-07/thumbs/1657890802_22-kartinkin-net-p-flamingo-v-krimu-zhivotnie-krasivo-foto-22.jpg"
                    alt="" className="content__banner"/>
            </div>
            <div className="content__user user">
                <div className="user__photo">
                    <img src="https://million-wallpapers.ru/wallpapers/2/49/9466422002144017775/kot-serditsya-na-xozyaina-i-pogodu.jpg" alt="" className="user__photo-img"/>
                </div>
                <div className="user__info">
                    <h3>Name</h3>
                    <div>descr</div>
                </div>
            </div>
            <div className="content__posts">
                <h2>My Posts</h2>
                <textarea placeholder='your news'></textarea>
                <button>Send</button>
                <div className="content__post post">
                    <img className="post__img" src="https://www.passion.ru/thumb/1280x720/smart/filters:quality(75)/imgs/2022/01/11/06/5160638/4d72f0fcf43671231996e69d245675b0601feb6e.jpg" alt=""/>
                    <p>text</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;