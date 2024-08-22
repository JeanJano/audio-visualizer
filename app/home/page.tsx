import styles from "./Home.module.css";
import SearchInput from "@/components/searchInput";
import Image from "next/image";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className={`${styles.home}`}>
            <div className={`${styles.header_div}`}>
                <div className={`${styles.header}`}>Looking for a music</div>
                <Image src="/images/clover.png" alt="clover" width={39} height={39} />
            </div>
            <div className={`${styles.search}`}>
                <SearchInput />
            </div>
        </div>
    );
}

export default Home;
