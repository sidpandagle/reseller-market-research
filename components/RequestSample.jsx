import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { apiUrl, reCaptchaKey, toCapitalCase, countryList } from '@/constants';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { notifyError, notifySuccess } from '@/utils/CustomToastContainer';
import CustomToastContainer from '@/utils/CustomToastContainer';
import ClientListSlider from '@/components/ClientListSlider';
import axios from 'axios';
import CreateEmail from '@/utils/CreateEmail'


export default function RequestSample({ reportTitle, enquiryType, closeModal }) {
    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors },
    } = useForm();

    const [captchaChecked, setCaptchaChecked] = useState(false)
    const [captchaToken, setCaptchaToken] = useState('')

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
    function onSubmit(formData) {
        formData = { report: toCapitalCase(reportTitle), ...formData }
        if (captchaChecked) {
            window.grecaptcha.reset();

            const url = `${apiUrl}/email`;
            const data = {
                subject: enquiryType + ' - ' + toCapitalCase(reportTitle),
                content: CreateEmail(enquiryType, formData),
                response_token: captchaToken,
            };
            // console.log(data)
            // return;
            axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    closeModal()
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
    return (
        <section>
            <CustomToastContainer />
            <div className="my-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-3">
                        <div className="w-full">
                            <input {...register('name')} type="text" name="name" id="name" defaultValue={""} className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Full Name" required />
                        </div>
                        <div className="w-full">
                            <input {...register('email')} type="text" name="email" id="email" defaultValue={""} className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Business Email" required />
                        </div>
                        <div className="w-full">
                            <input {...register('company')} type="text" name="company" id="company" defaultValue={""} className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Company Name" required />
                        </div>
                        <div>
                            <input {...register('designation')} type="text" name="designation" id="designation" defaultValue={""} className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Job/Designation" required />
                        </div>
                        <div>
                            <select  {...register('country')} id="country" defaultValue='Select Country' className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                <option value="">Select Country</option>
                                {
                                    countryList.map((r, i) => {
                                        return <option key={i} value={r}>{r}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <input {...register('contact')} type="text" placeholder='Contact No' name="contact" id="contact" defaultValue={""} className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " required />
                        </div>
                        <div className='col-start-1 col-end-3'>
                            <textarea {...register('message')} id="message" defaultValue={""} rows={5} className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg outline-0 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Kindly specify your research needs." />
                        </div>
                        <div className="flex flex-col md:flex-row sm:col-span-2">
                            <ReCAPTCHA
                                sitekey={reCaptchaKey}
                                onChange={onChange}
                                onErrored={onErrored}
                                onExpired={onExpired}
                            />
                            <div className='pt-4 md:pl-4 md:pt-0 '>
                                This website is secure and your personal details are safe.
                                We're committed to keeping your personal details safe and secure.
                                We do not share your information with anyone.
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <motion.button type="submit" className="inline-flex items-center justify-center gap-2 px-4 py-3 mt-6 font-semibold text-white transition-all bg-primary border border-transparent rounded-md hover:bg-quaternary focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {/* <button > */}
                            Submit Request <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 14l11 -11" />
                                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                            </svg>

                            {/* </button> */}
                        </motion.button>
                    </div>
                </form>
            </div>
        </section>
    )
}
