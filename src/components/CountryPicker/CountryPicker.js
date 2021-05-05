import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { countries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = (props) => {
    const[fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setFetchedCountries(await countries());
        };
        fetchCountries();
    });

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(event) => props.getCountryName(event.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;