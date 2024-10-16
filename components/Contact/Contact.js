"use client";

import React, { useState } from 'react';
import styles from "./Contact.module.css";
import { FcCustomerSupport } from "react-icons/fc";
import axios from "axios";
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyDatePicker from './DatePicker';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const ContactUsPage = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
    });

    const SuccessAlert = (msg) => toast.success(msg);
    const ErrorAlert = (msg) => toast.error(msg);

    /*********************************************** onChange *******************************************/
    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        });
    }

    /************************************************ Submit **********************************************/

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post(`api/send-email/`, formData).then(res => {
            setLoading(false);
            if (res.status === 200) {
                SuccessAlert(res.data.message);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    date: "",
                    time: "",
                    message: ""
                })
            } else {
                ErrorAlert(res.data.message);
            }
        }).catch(err => {
            setLoading(false);
            console.log(err);
            ErrorAlert(err?.message);
        });
    }


    return (
        <div className={styles.contactPage} id="contact">
            <ToastContainer />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div data-aos="zoom-in-right" data-aos-duration="1000" className={styles.contactCards}>
                    <FcCustomerSupport className='text-[200px]' />
                    <div className="mb-[32px]">
                        <h2 className='text-[28px] font-bold text-black'>Coordonnées de Contact</h2>
                        <p className='mt-2'>Pour toute question ou demande d'information supplémentaire, n'hésitez pas à nous contacter via les coordonnées ci-dessous. Notre équipe est à votre disposition pour vous assister.</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div data-aos="zoom-in" data-aos-duration="2000" className={styles.card}>
                            <h4>Email</h4>
                            <p>
                                <a href='mailto: BH.FERMETURE@GMAIL.COM'>
                                    BH.FERMETURE@GMAIL.COM
                                </a>
                            </p>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="2000" className={styles.card}>
                            <h4>Téléphone</h4>
                            <p>
                                <a href='tel: BH.FERMETURE@GMAIL.COM'>
                                    0749441729
                                </a>
                            </p>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="2000" className={styles.card}>
                            <h4>Adresse</h4>
                            <p>60 rue François 1er 75008 PARIS</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="1000" className={styles.formCol}>
                    <form className={styles.form} onSubmit={submitHandler}>
                        <h1>Nous Contacter</h1>
                        <p className='mb-4'>Veuillez remplir ce formulaire avec vos informations afin que nous puissions vous recontacter</p>
                        <div className={styles.item}>
                            <label>
                                Entrer votre prénom
                            </label>
                            <input value={formData?.firstName} type="text" required placeholder='Prénom' onChange={(e) => handleChange("firstName", e.target.value)} />
                        </div>
                        <div className={styles.item}>
                            <label>
                                Nom
                            </label>
                            <input value={formData?.lastName} type="text" required placeholder='Nom' onChange={(e) => handleChange("lastName", e.target.value)} />
                        </div>
                        <div className={styles.item}>
                            <label>
                                Email
                            </label>
                            <input value={formData?.email} type="email" required onChange={(e) => handleChange("email", e.target.value)} />
                        </div>
                        <div className={styles.item}>
                            <label>
                                Telephone
                            </label>
                            <input value={formData?.phone} type="phone" required onChange={(e) => handleChange("phone", e.target.value)} />
                        </div>
                        <MyDatePicker formData={formData} handleChange={handleChange} />
                        <div className={styles.item}>
                            <label>
                                Heure de rappel souhaité
                            </label>
                            <div className={styles.TimePicker}>
                                <TimePicker className="w-full d-flex" format='hh:mm a' locale='fr' value={formData.time} onChange={(val) => handleChange("time", val)} />
                            </div>
                            {/* <input value={formData?.time} type="time" required placeholder='Entrez votre moment' onChange={(e) => handleChange("time", e.target.value)} /> */}
                        </div>
                        <div className={styles.item}>
                            <label>
                                Message
                            </label>
                            <textarea value={formData?.message} type="text" required onChange={(e) => handleChange("message", e.target.value)} />
                        </div>
                        <p className='bg-[#ddffff] border p-4 rounded-[10px]'>En cas d'urgence, vous pouvez appeler directement le numéro de téléphone ou envoyer un sms.</p>
                        <div className={styles.item}>
                            <button className={styles.submitBtn} type="submit" disabled={loading}>
                                {loading ? <Loading /> : "Envoyer"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;
