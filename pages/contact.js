import React, { useState, useEffect } from 'react'
import Layout from '../containers/layout'
import * as yup from 'yup'

let schema = yup.object().shape({
    email: yup
        .string()
        .required('Email address required')
        .email('Enter a valid email address'),
    message: yup.string().required('Message required'),
})

const Contact = () => {
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const [formValid, setFormValid] = useState(false)
    const [formDirty, setFormDirty] = useState(false)
    const [error, setError] = useState()

    const handleEmailChange = e => {
        setFormDirty(true)
        setEmail(e.target.value)
    }

    const handleMessageChange = e => {
        setFormDirty(true)
        setMessage(e.target.value)
    }

    useEffect(() => {
        // check validity
        schema
            .validate({
                email,
                message,
            })
            .then(function(valid) {
                setFormValid(valid)
            })
            .catch(err => {
                setError(err)
            })
    }, [email, message])
    return (
        <Layout>
            <form
                name="contact-norma-avalos-photography"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input
                    type="hidden"
                    name="form-name"
                    value="contact-norma-avalos-photography"
                />

                <div className="for" noValidate>
                    <label htmlFor="email" className="font-cinzel">
                        Email address
                    </label>
                    <input
                        name="email"
                        onChange={e => handleEmailChange(e)}
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="font-cinzel">
                        Message
                    </label>
                    <textarea
                        name="message"
                        onChange={e => handleMessageChange(e)}
                        className="form-control"
                        id="message"
                        rows="3"
                    ></textarea>
                </div>
                {!formValid && formDirty && (
                    <p className="text-danger">{error.message}</p>
                )}
                <div className="d-flex justify-content-center">
                    <button
                        disabled={!formValid}
                        type="submit"
                        className="btn btn-secondary font-cinzel align-self-center"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </Layout>
    )
}

export default Contact
