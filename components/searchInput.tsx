import React from 'react';
import styles from './SearchInput.module.css';
import Image from 'next/image';

const SearchInput: React.FC = () => {
    return (
        <div className={styles.input_container}>
            <Image src='/images/search.svg' alt='search' width={20} height={20} />
            <input
                type="text"
                className={styles.search_input}
                placeholder='All Star'
            />
        </div>
    );
}

export default SearchInput;