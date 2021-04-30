import Head from "next/head";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";
import axios from 'axios';
import SearchInput from "../components/SearchInput/SearchInput";
import Countries from "../components/Countries/Countries";
import {useState} from "react";

export default function Home({countries}) {
    const [keyword, setKeyword] = useState("");
    const onInputChange = (value) => {
        setKeyword(value);
    }
    const filteredCountries = countries.filter(
        (country) =>
            country.name.toLowerCase().includes(keyword) ||
            country.region.toLowerCase().includes(keyword) ||
            country.subregion.toLowerCase().includes(keyword)
    );
    return (
        <Layout>
            <div className="mb-3 w-full">
                <div className={styles.counts}>
                    Found {countries.length} countries
                </div>
                <div className={styles.input}>
                    <SearchInput
                        onInputChange={onInputChange}
                        placeholder="Filter by Name, Region or Subregion"
                    />
                </div>
                <Countries countries={filteredCountries}/>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await res.json();

    return {
        props: {
            countries
        }
    }
}
