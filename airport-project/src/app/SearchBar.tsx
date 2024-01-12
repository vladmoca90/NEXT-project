"use client";
import React, { ChangeEvent, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import searchLogo from "../../public/images/london-logo.png";
import { AirlineOrFlight } from "../../lib/airlineOrFlight/airlineOrFlight";

export default function AirportSearchBar() {
    const [airlineOrFlightText, setFlightOrAirlineText] = useState("");
    const [results, setResults] = useState<AirlineOrFlight[]>([]);

    const onFlightOrAirline = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setFlightOrAirlineText(value);

        let airlineOrFlightUrl = "https://airport-next-new.vercel.app/api/search-airlines?text=" + value;

        if (value.length >= 2) {
            const res = await fetch(airlineOrFlightUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const body = await res.json();
            const result = body.result;

            setResults(result);
        }
    }, []);

    return (
        <div id="searchBar" className="card-shadow">
            <div className="search-bar-top">
                <h3 className="search-bar-title"><i className="fa-brands fa-plane"></i>Flight information</h3>
                <div className="search-bar-dateTime">
                    <Image src={searchLogo} className="london-img" alt="London icon" />
                </div>
            </div>
            <div className="search-bar-content">
                <div id="searchBarAirline" className="search-bar-input">
                    <form>
                        <label>Search airline or flight number:</label>
                        <input placeholder="Search airline or flight number" type="text" name="airline" onChange={onFlightOrAirline} value={airlineOrFlightText} />
                    </form>
                    <ul id="searchBarOptions">
                        {
                            results.map((result, index) => {
                                if (result.type === "Flight") {
                                    return (
                                        <li className="search-bar-list" key={index}>
                                            <Link
                                                href={{
                                                    pathname: "/information-" + result.type.toLocaleLowerCase(),
                                                    query: {
                                                        "flightNumber": result.name,
                                                        "flightType": result.flightType,
                                                    }
                                                }}>
                                                <Image width={45} height={45} src={result.airlineFin} alt={result.name} />{result.name}
                                            </Link>
                                        </li>
                                    );
                                }
                                else {
                                    return (
                                        <li className="search-bar-list" key={index}>
                                            <Link
                                                href={{
                                                    pathname: "/information-" + result.type.toLocaleLowerCase(),
                                                    query: {
                                                        "airlineName": result.name,
                                                    },
                                                }}>
                                                <Image width={45} height={45} src={result.airlineFin} alt={result.name} />{result.name}
                                            </Link>
                                        </li>
                                    );
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}