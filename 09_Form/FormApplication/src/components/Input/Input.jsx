import React, { useContext, useEffect, useImperativeHandle, useRef, useState } from "react"
import { FormContext } from "../../context/FormContext";
import './Input.css'

function Input({type, id, lable, chechOnBlur}, ref) {
    const { formValues, setFormValues } = useContext(FormContext);
    const [text, setText] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [shake, setShake] = useState(false);

    // introduce a local ref
    const localRef = useRef(null);

    useEffect(() => {
        setIsValid(true);
        setShake(false);
    }, [text])

    useImperativeHandle(ref, () => {
        return {
            focus: () => localRef.current.focus(),
            setInvalid: () => setIsValid(false),
            shake: () => setShake(true)
        }
    }, []);

    return (
        <>
            <input
                className={`${(!isValid) ? "error-input" : ""} ${shake ? "shake" : ""}`}
                type={type}
                id={id}
                value={text}
                ref={localRef}
                onBlur={chechOnBlur}
                onChange={(e) => {
                    setText(e.target.value);
                    setFormValues({...formValues, [lable]: e.target.value});
                }}
            />
            <br/>
            <span>{(!isValid) ? `${lable} is invalid` : ''}</span>
        </>
    )
}

export default React.forwardRef(Input);