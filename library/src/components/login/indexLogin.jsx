import './indexLogin.css'
import React, { Component } from 'react';
import Form from './formLogin';
import background from './img/library-bg.png'

function indexLogin() {
    return (
        <section id='background' style={{
            backgroundImage: `url(${background})`,
            width: '100vw',
            height: '101.0365vh',
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            marginTop: '-15%'
        }}>
            <center>
                <Form></Form>
            </center>
        </section>
    )
}

export default indexLogin;