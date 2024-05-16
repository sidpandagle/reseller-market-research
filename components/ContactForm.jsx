'use client'
import React, { useState } from 'react'
import axios from 'axios';
import CreateEmail from '@/utils/CreateEmail';
import { apiUrl, reCaptchaKey } from '@/constants';
import { useForm } from 'react-hook-form';
import { notifyError, notifySuccess } from '@/utils/CustomToastContainer';
import ReCAPTCHA from 'react-google-recaptcha';
import CustomToastContainer from '@/utils/CustomToastContainer';

export default function ContactForm() {

    const recaptchaRef = React.createRef();

    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors },
    } = useForm();

    const [captchaChecked, setCaptchaChecked] = useState(false)
    const [captchaToken, setCaptchaToken] = useState('')

    function onSubmit(formData) {
        if (captchaChecked) {
            window.grecaptcha.reset();

            const url = `${apiUrl}/email`;
            const data = {
                // subject: enquiryType + ' - ' + reportTitle,
                subject: 'Contact Us Request',
                content: CreateEmail('Contact Us Request', formData),
                response_token: captchaToken,
            };

            axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    setCaptchaChecked(false)
                    reset();
                    notifySuccess("We'll contact you soon!!!");
                })
                .catch(error => {
                    console.error('Error:', error);
                    notifyError('Email us at congruencemarketresearch@gmail.com');
                });
        } else {
            notifyError('Check the reCaptcha checkbox')
        }
    }


    function onChange(value) {
        if (value) {
            setCaptchaChecked(true)
            setCaptchaToken(value)
        }
    }
    function onErrored(value) {
        setCaptchaChecked(false)
    }
    function onExpired(value) {
        setCaptchaChecked(false)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomToastContainer />
            <div>
                <div className="mb-6">
                    <input
                        type='text'
                        placeholder='Your Name'
                        name='name'
                        {...register('name')}
                        className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    />
                </div>
            </div>
            <div>
                <div className="mb-6">
                    <input
                        type='text'
                        placeholder='Your Email'
                        name='email'
                        {...register('email')}
                        className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    />
                </div>
            </div>
            <div>
                <div className="mb-6">
                    <input
                        type='text'
                        placeholder='Your Phone'
                        name='phone'
                        {...register('phone')}
                        className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    />
                </div>
            </div>
            <div>
                <div className="mb-6">
                    <textarea
                        placeholder="Your Message"
                        name="details"
                        defaultValue=""
                        rows='6'
                        {...register('details')}
                        className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    />
                </div>
            </div>

            <div>
                <div className="mb-6">
                    <ReCAPTCHA
                        sitekey={reCaptchaKey}
                        onChange={onChange}
                        onErrored={onErrored}
                        onExpired={onExpired}
                    />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full p-3 bg-[#3056D3] text-white transition border rounded border-primary bg-primary hover:bg-opacity-90"
                >
                    Send Message
                </button>
            </div>
        </form>
    )
}
