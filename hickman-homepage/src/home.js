import React from 'react';
import './App.css';
import picture from './img/picture.png'


export default function Home() {
    return (
        <div className='App'>
            <h1>Gretchyn Hickman's Developer Homepage</h1>
            <img src={picture} alt='Gretchyn Hickman' className='Profile'/>
        </div>

    )
}