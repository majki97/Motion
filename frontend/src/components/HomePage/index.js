import React from 'react';
import UpperNavComp from '../UpperNavComp';
import LowerNavComp from '../LowerNavComp';
import CreatePostComp from '../CreatePostComp';
import PostComp from '../PostComp/index.js';
import MyPostComp from '../MyPostComp/index.js';
import './style.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPostsAction } from '../../store/actions/post';




const Home = () => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllPostsAction());
         
}, [])

    
    return (
        <main className="main-left">
            <header className="top">
                <UpperNavComp />
                <LowerNavComp />
            </header>
            <section className="content">
                <div className="page-left">
                    <div className="content-left">
                        <CreatePostComp />
                        <MyPostComp />
                    </div>
                </div>
                <div className="page-right">
                    <div className="content-right">
                        {posts.length ? posts.map((post) => <PostComp key={post.id} post={post}/>) : "Loading..."} 
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home