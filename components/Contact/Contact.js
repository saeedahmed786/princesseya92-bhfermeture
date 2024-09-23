"use client";

import React, { useState } from 'react';
import styles from "./Contact.module.css";
import { FcCustomerSupport } from "react-icons/fc";
import axios from "axios";
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUsPage = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
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
                        <h2 className='text-[28px] font-bold'>Coordonnées de Contact</h2>
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
                        <p className='mb-4'>Veuillez remplir ce formulaire avec vos informations afin que nous puissions vous recontacter au sujet de nos services.</p>
                        <div className={styles.item}>
                            <label>
                                Nom Complet
                            </label>
                            <input type="text" required placeholder='Entrez votre nom complet' onChange={(e) => handleChange("name", e.target.value)} />
                        </div>
                        <div className={styles.item}>
                            <label>
                                Email
                            </label>
                            <input type="email" required placeholder='Entrez votre email' onChange={(e) => handleChange("email", e.target.value)} />
                        </div>
                        <div className={styles.item}>
                            <label>
                                Phone
                            </label>
                            <input type="phone" required placeholder='Entrez votre phone' onChange={(e) => handleChange("phone", e.target.value)} />
                        </div>
                        <div className={styles.item}>
                            <label>
                                Date appropriée pour rappeler
                            </label>
                            <input type="date" required placeholder='Entrez votre date' onChange={(e) => handleChange("date", e.target.value)} />
                        </div>
                        <div className={styles.item}>
                            <label>
                                Moment approprié pour rappeler
                            </label>
                            <input type="time" required placeholder='Entrez votre moment' onChange={(e) => handleChange("time", e.target.value)} />
                        </div>
                        <div className={styles.item}>
                            <label>
                                Message
                            </label>
                            <textarea type="text" required placeholder='Entrez votre message' onChange={(e) => handleChange("message", e.target.value)} />
                        </div>
                        <div className={styles.item}>
                            <button type="submit" disabled={loading}>
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
