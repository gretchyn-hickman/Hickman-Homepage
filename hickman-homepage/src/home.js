import React from 'react';
import './App.css';
import picture from './img/picture.png'


export default function Home() {
    return (
        <div className='App'>
            <h1 className='title'>Gretchyn Hickman's Developer Homepage</h1>
            <img src={picture} alt='Gretchyn Hickman' className='Profile'/>
            <div className='para'>
                <p>Hi! My name is Gretchyn Hickman. I am a 20 year old full-stack developer. I might be young but I am determined and creative when it comes to my projects. </p>
            </div>
        </div>

    )
}