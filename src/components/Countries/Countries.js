import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {
    KeyboardArrowDownRounded,
    KeyboardArrowUpRounded,
} from "@material-ui/icons";


const orderBy = (countries, value, direction) => {
    if (direction === "asc") {
        return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }
    if (direction === "desc") {
        return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }
    return countries;
}
const SortArrow = ({direction}) => {
    if (!direction) {
        return <></>;
    }
    if (direction === "desc") {
        return (
            <div className="flex justify-center items-center ml-0.5">
                <KeyboardArrowDownRounded color="inherit"/>
            </div>
        );
    } else {
        return (
            <div className="flex justify-center items-center ml-0.5">
                <KeyboardArrowUpRounded color="inherit"/>
            </div>
        );
    }
};
const Countries = ({countries}) => {
    const [value, setValue] = useState();
    const [direction, setDirection] = useState();

    const orderedCountries = orderBy(countries, value, direction);
    const switchDirection = () => {
        if (!direction) {
            setDirection('desc');
        } else if (direction === 'desc') {
            setDirection('asc');
        } else {
            setDirection(null);
        }
    };
    const setValueAndDirection = (value) => {
        switchDirection();
        setValue(value);
    };
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-center items-center mt-1 mb-1">
                <div
                    className="cursor-pointer flex justify-center items-center border-none outline-none bg-transparent text-center p-5 focus:outline-none hover:bg-default transition duration-200 rounded-lg font-medium w-1/5">Flag
                </div>
                <button onClick={() => setValueAndDirection('name')}
                        className="flex justify-center items-center border-none outline-none bg-transparent text-center p-5 focus:outline-none hover:bg-default transition duration-200 rounded-lg font-medium w-1/5">
                    Name
                    {value === "name" && <SortArrow direction={direction}/>}
                </button>
                <button onClick={() => setValueAndDirection('population')}
                        className="flex justify-center items-center border-none outline-none bg-transparent text-center p-5 focus:outline-none hover:bg-default transition duration-200 rounded-lg font-medium w-1/5">
                    Population
                    {value === "population" && <SortArrow direction={direction}/>}
                </button>
                <button onClick={() => setValueAndDirection('area')}
                        className="flex justify-center items-center border-none outline-none bg-transparent text-center p-5 focus:outline-none hover:bg-default transition duration-200 rounded-lg font-medium w-1/5">
                    Area (km<sup style={{fontSize: "0.5rem"}}>2</sup>)
                    {value === "area" && <SortArrow direction={direction}/>}
                </button>
                <button onClick={() => setValueAndDirection("gini")}
                        className="flex justify-center items-center border-none outline-none bg-transparent text-center p-5 focus:outline-none hover:bg-default transition duration-200 rounded-lg font-medium w-1/5"
                >
                    <div>Gini</div>
                    {value === "gini" && <SortArrow direction={direction}/>}
                </button>
            </div>

            {orderedCountries.map((country, index) => (
                <Link href={`/country/${country.alpha3Code}`}>
                    <div key={index}
                         className="flex p-5 mt-2 mb-2 text-center rounded-lg shadow-default hover:bg-default hover:translate-x-2 cursor-pointer transform transition duration-200">
                        <div className="flex flex-1 items-center justify-center">
                            <img src={country.flag} alt="Flag" className="w-16 m-auto"/>
                        </div>
                        <div className="flex flex-1 items-center justify-center">{country.name}</div>
                        <div className="flex flex-1 items-center justify-center">{country.population}</div>
                        <div
                            className="flex flex-1 items-center justify-center">{country.area ? country.area : 0}</div>
                        <div
                            className="flex flex-1 items-center justify-center">{country.gini ? country.gini + "%" : 0 + "%"}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Countries;