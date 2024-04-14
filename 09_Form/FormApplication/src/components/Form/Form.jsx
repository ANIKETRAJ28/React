import { useEffect, useRef, useState } from "react";
import passwordValidator from "../../helper/passwordValidator";
import emailValidation from "../../helper/emailValidator";

import "./Form.css"

function Form() {

    const [formValues, setFormValues] = useState({
        email: 'ab@cd.com',
        password: ''
    });

    const exampleRef = useRef(0);

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(exampleRef);
    }, [count]);

    const handleValidatePassword = () => {
        const password = formValues.password;
        if(!passwordValidator(password)) {
            console.log("password doesn't contain required parameters");
        }
    }

    const handleValidateEmail = () => {
        const email = formValues.email;
        if(!emailValidation(email)) {
            console.log("email doesn't contain required parameters");
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleValidatePassword();
        handleValidateEmail();
        console.log(formValues);
    }

    return (
        <div>
            New Form<br/>

            Count: {count}<br/>
            ExampleRef: {exampleRef.current}<br/>
            <button onClick={() => setCount(count+1)}>update count</button>
            <button onClick={() => exampleRef.current++}>update ref</button>


            <form onSubmit={handleFormSubmit}>
                <div className="wrapper email-input-wrapper">
                    <input
                        type="text"
                        value={formValues.email}
                        onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                    />
                </div>
                <div className="wrapper password-input-wrapper">
                    <input 
                        type="password"
                        value={formValues.password}
                        onChange={(e) => setFormValues({...formValues, password: e.target.value})}
                    />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form