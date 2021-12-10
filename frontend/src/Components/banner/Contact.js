import React, { Fragment, useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import HelmetData from '../Helmet';

const Contact = () => {
    const [data, setdata] = useState({ email: '', name: '', Subject: '', message: '' })
    const url = "https://mighty-chamber-40377.herokuapp.com/api/query"

    const Registration = (e) => {
        e.preventDefault();
        const contactData = { email: data.email, Subject: data.Subject, message: data.message, name: data.name }
        axios.post(url, contactData).then((res) => {
            if (res.status == 200) {
                // console.log(res)S
                swal('Information Submitted Sucessfully')
                setdata({ email: '', name: '', Subject: '', message: '' })
            } else {
                console.log('err')
            }
        })
    }
    const onChange = (e) => {
        e.preventDefault();
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <Fragment>
            {/* <HelmetData/> */}
            <section id="contact" className="contact-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h3>Get in touch.</h3>
                        <p>Contact Me to fulfill your bussiness need with great and amazing bussiess technologies.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info">
                                <i className="fa fa-map-marker" />
                                <p>Mumbai , <br /> 400063, MH</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info">
                                <i className="fa fa-phone" />
                                <p>+91-8779742206</p>
                                <p>8779742206</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info mb-0">
                                <i className="fa fa-envelope" />
                                <p><a href="mailto:06sagar1998@gmail.com" className="__cf_email__" >06sagar1998@gmail.com</a></p>
                                <p><a href="mailto:08sagar.s@gmail.com" className="__cf_email__" >08sagar.s@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-lg-4 col-md-4">
                            <div className="lets-connect">
                                <h3 className="title">Let’s Connect</h3>
                                <ul>
                                    <li><a href="https://www.instagram.com/__sagar__.08"><i className="fa fa-instagram" /> Instagram</a></li>
                                    <li><a href="https://www.linkedin.com/in/sagar-singh-0b4ba11a0/"><i className="fa fa-linkedin" /> Linkedin</a></li>
                                    <li><a href="https://github.com/sagardeveloper08"><i className="fa fa-github" /> Github</a></li>
                                    {/* <li><a href="#"><i className="fa fa-pinterest" /> Pinterest</a></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <h3 className="title">Send Me a Message</h3>
                            <form id="contactForm" onSubmit={Registration}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name"
                                                onChange={onChange}
                                                value={data.name}
                                                id="name" placeholder="Your Name"
                                                required data-error="Please enter your name" />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email"
                                                value={data.email}
                                                onChange={onChange}
                                                id="email" placeholder="Your Email" required data-error="Please enter your email" />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                value={data.Subject}
                                                onChange={onChange}
                                                name="Subject" id="subject" placeholder="Subject" required data-error="Please enter your subject" />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message"
                                                className="form-control" id="message"
                                                value={data.message}
                                                onChange={onChange}
                                                cols={30} rows={6} placeholder="Message" required data-error="Write your message" defaultValue={""} />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="btn btn-primary">Send Message <i className="fa fa-angle-double-right" /></button>
                                        <div id="msgSubmit" className="h3 text-center hidden" />
                                        <div className="clearfix" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30158.707745885247!2d72.85098086365937!3d19.114741022189662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61b41dfb131%3A0xa668297563ddac31!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1638635191189!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
            </div>
        </Fragment>
    )
}

export default Contact