import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import styles from "./Contact.module.css";
import { fr } from 'date-fns/locale/fr';
registerLocale('fr', fr);

const MyDatePicker = ({ formData, handleChange }) => {
    return (
        <div className={styles.item}>
            <label>Jour de rappel souhaité</label>
            <DatePicker
                selected={formData?.date ? new Date(formData.date) : null}
                onChange={(date) => handleChange('date', date)}
                locale="fr"
                dateFormat="dd/MM/yyyy"
                placeholderText="Entrez votre date"
                required
            />
        </div>
    );
};

export default MyDatePicker;
