import React, { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const { REACT_APP_RECAPTCHA_SITE_KEY } = process.env

interface Props {
    reset: boolean;
    handlerCheckRecaptcha: Function;
}

const Recaptcha = ({ reset, handlerCheckRecaptcha }: Props) => {

    // Recaptcha
    const reRef = useRef<ReCAPTCHA>(null);

    // Submit
    const onChange = (value: string | null) => {
        handlerCheckRecaptcha(value);
    };

    useEffect(() => {
        if(reRef.current && reset){
            reRef.current.reset();
        }
      }, [reset]);

    return (
        <ReCAPTCHA
            sitekey={REACT_APP_RECAPTCHA_SITE_KEY!}
            ref={reRef}
            onChange={onChange}
        >
        </ReCAPTCHA>
    )
}



export default Recaptcha;