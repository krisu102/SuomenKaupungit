import React from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './CitySelect.module.css';

const CitySelect = ({handleCityChange, CityNames}) => {

 

const names = Object.values(CityNames);

    return(
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCityChange(e.target.value)}>
                <option value="">Kaikki kaupungit</option>
                {names.map((city, i) => <option key={i} value={city}>{city}</option>)}

            </NativeSelect>
        </FormControl>
    )
}

export default CitySelect;