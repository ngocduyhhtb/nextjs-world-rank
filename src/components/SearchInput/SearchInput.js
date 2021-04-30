import React from 'react';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import styles from './SearchInput.module.css';

const SearchInput = ({placeholder, onInputChange}) => {
    return (
        <div className={styles.wrapper}>
            <SearchRoundedIcon/>
            <input onChange={(e) => onInputChange(e.target.value.toLowerCase())}
                   className={styles.input}
                   placeholder={placeholder}
            />
        </div>
    );
}

export default SearchInput;