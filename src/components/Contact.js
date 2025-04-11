import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="container my-5">
            <h2 className="text-center">Contact Me</h2>
            <div className="row">
                <div className="col-md-6">
                    <h4>Get in Touch</h4>
                    <p>If you have any questions or would like to get in touch, feel free to reach out!</p>
                    <ul className="list-unstyled">
                        <li src={`${process.env.PUBLIC_URL}/img/gmail.jpg`}>kpopn9420@gmail.com</li>
                        <li src={`${process.env.PUBLIC_URL}/img/github.jpg`}><a href="https://github.com/kpopn9420" target="_blank" rel="noopener noreferrer">kpopn9420</a></li>
                        <li src={`${process.env.PUBLIC_URL}/img/linkedin.jpg`}><a href="https://www.linkedin.com/in/yi-ting-xie-7b613b214/" target="_blank" rel="noopener noreferrer">Xie Yi Ting</a></li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h4>Contact Form</h4>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;