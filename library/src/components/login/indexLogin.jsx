import './indexLogin.css'
import React, {Component} from 'react';

function indexLogin(){
    function show() {
        alert('Hello!');
    }
    return (
    <div>
        <form id="form" action="">
            <input id="input" autocomplete="off" placeholder="Nombre de usuario" /><br />
            <input id="input" autocomplete="off" placeholder="Contraseña" /><br />
            <button>Send</button> <br />
            <p id='noAcc' onClick={show}>No tengo cuenta</p>
        </form>
    </div>
    )
}

export default indexLogin;