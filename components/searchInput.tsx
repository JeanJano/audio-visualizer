"use client";

import React from 'react';
import styles from './SearchInput.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';

const SearchInput: React.FC = () => {
    const inputContainerRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const tl = gsap.timeline({ paused: true });

    const clickHandler = () => {
        if (!inputContainerRef.current) return;

        
        const headerPos = document.getElementById('header')?.getBoundingClientRect();
        if (!headerPos) return;
        
        const inputContainerPos = inputContainerRef.current.getBoundingClientRect();
        if (!inputContainerPos) return;
        
        tl
        .to(inputContainerRef.current, {
            duration: 1.5,
            y: - (window.innerHeight - headerPos.bottom - inputContainerPos.top - 20),
            ease: 'power4.inOut',
        })
        .to(inputContainerRef.current, {
            duration: 1,
            width: '60vw',
            ease: 'power4.inOut',
        }, 0.75)
        .to(inputRef.current, {
            duration: 1,
            width: '60vw',
            ease: 'power4.inOut',
        }, 0.75)
        
        tl.play();
    }

    const onBlur = () => {
        const outputContainer = document.getElementById('output_container');
        if (outputContainer) outputContainer.remove();
        tl.reverse();
    }

    return (
        <div>
            <div
            ref={inputContainerRef}
            className={`${styles.input_container}`}
            >
                <Image src='/images/search.svg' alt='search' width={20} height={20} className={styles.search_icon} />
                <input
                    type="text"
                    className={styles.search_input}
                    placeholder='All Star'
                    ref={inputRef}
                    onClick={clickHandler}
                    onBlur={onBlur}
                />
            </div>
            <div>
                <div>All star</div>
            </div>
        </div>
    );
}

export default SearchInput;