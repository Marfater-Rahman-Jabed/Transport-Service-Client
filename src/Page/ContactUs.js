import React from 'react';
import ContactImage from '../Image/ContactUs3-removebg-preview.png'
import { GiPhone } from "react-icons/gi";
import { GoMail } from "react-icons/go";
import { BsWhatsapp } from "react-icons/bs";
const ContactUs = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-0 ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-12 rounded-none">
                        <div className="card-body h-72">
                            <div className='flex flex-row'>
                                <div>
                                    <GiPhone className='text-3xl'></GiPhone><br />
                                    <GoMail className='text-3xl'></GoMail> <br />
                                    <BsWhatsapp className='text-3xl'></BsWhatsapp>

                                </div>
                                <div>
                                    <span>0181555555555</span><br /><br />
                                    <span>0181555555555</span><br />
                                    <span>0181555555555</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="text-center lg:text-left flex flex-col">
                        <h1 className="text-5xl font-bold  shadow-2xl">Contact Us</h1>
                        <div className=" h-80 w-full mt-8">

                            <img src={ContactImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;