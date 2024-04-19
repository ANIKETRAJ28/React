import { useContext, useRef, useState } from "react";
import "./Form.css"
import Input from "../Input/Input";
import { FormContext } from "../../context/FormContext";
import emailValidator from '../../helper/emailValidator';
import passwordValidator from '../../helper/passwordValidator';

function Form() {

    const { formValues } = useContext(FormContext);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        passValid();
        emailValid();
    }

    const passValid = () => {
        if(!passwordValidator(formValues.password)) {
            passwordRef.current.setInvalid();
            passwordRef.current.shake();
        }
    }

    const emailValid = () => {
        if(!emailValidator(formValues.email)) {
            emailRef.current.setInvalid();
            emailRef.current.shake();
        }
    }

    return (
        <div>
            New Form <br/>
            <form onSubmit={handleFormSubmit} noValidate>
                <div className="wrapper email-input-wrapper">
                    <Input 
                        type="email " 
                        id="input-text"
                        lable="email"
                        chechOnBlur={emailValid}
                        ref={emailRef}
                    />

                </div>
                <div className="wrapper password-input-wrapper">
                    <Input 
                        type="password" 
                        id="password-text"
                        lable="password"
                        chechOnBlur={passValid}
                        ref={passwordRef}
                    />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form