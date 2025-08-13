import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const formRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
            )
            .then(() => {
                alert('Message sent successfully!');
                formRef.current.reset();
            })
            .catch((error) => {
                alert('Failed to send the message, please try again.');
                console.error('EmailJS error:', error);
            });
    };

    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>

                <p>
                    I'm always interested in freelance opportunities or full-time positions. 
                    Whether you have a project in mind or just want to say hello, my inbox is always open. 
                    Feel free to reach out, and I will get back to you as soon as possible!
                </p>

                <div className="contact-form">
                    <form ref={formRef} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="user_name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="user_email" placeholder="Email" required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

