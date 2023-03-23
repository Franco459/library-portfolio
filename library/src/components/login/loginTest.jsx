import React, { useState } from "react";
import "./loginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";


const LoginTest = props => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handleClick = () => {
      setPasswordVisible(!isPasswordVisible);
    };
    
    function show() {
        alert('Hello!');
    }

    return (
        <div className="login-form">
            <form>
                <label className="inputLabel">
                    Nombre de usuario:
                    <input type="text" name="username" placeholder="usuario123" />
                </label>
                <label className="inputLabel passwordlbl">
                    Contraseña:
                    <input type={isPasswordVisible ? "text" : "password"} name="password" placeholder="*********"></input>
                    <span className={`password-icon ${isPasswordVisible  ? "fa fa-eye-slash eye-icon " : "fa fa-eye eye-icon"}`}
                        onClick={handleClick}>
                    </span>
                </label>
                <button type="submit">Iniciar sesion</button>
                
                <p id='noAcc' onClick={show}>No tengo cuenta</p>
            </form>
        </div>
    );
}

export default LoginTest;