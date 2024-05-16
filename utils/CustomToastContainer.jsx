import React, { Component, useRef } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = (value) => toast.success(value);
export const notifyWarning = (value) => toast.warning(value);
export const notifyError = (value) => toast.error(value);
export const notifyInfo = (value) => toast.info(value);

export default function CustomToastContainer() {
    return (
            
        <ToastContainer
          position='top-center'
          theme='light'
          hideProgressBar />
    )
}
