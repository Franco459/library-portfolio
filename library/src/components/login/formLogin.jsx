import './formLogin.css'
import React, { Component } from 'react';

function formLogin() {
    
    function show() {
        alert('Hello!');
    }
    return (
        <div id="login-container">
            <h1> Login de biblioteca </h1>
            <form id="form" action="">
                <p>Nombre de usuario : <input id="inputUserName" autocomplete="off" placeholder="Nombre de usuario" /></p>
                <p>Contraseña : <input id="inputPassword" autocomplete="off" placeholder="Contraseña" /></p>
                <button>Send</button> <br />
                <p id='noAcc' onClick={show}>No tengo cuenta</p>
            </form>
        </div>
    )
}

export default formLogin;