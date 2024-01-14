"use client";
import { useCallback, useEffect, useState } from "react";
import { CheckIn } from "../../../lib/prepareCheckIn/checkIn";
import { OutsideUK } from "../../../lib/prepareOutsideUK/outsideUK";
import { Nationality } from "../../../lib/prepareNationalities/Nationality";

export default function AirportPrepare() {
    let checkInsUrl = "https://airport-next-new.vercel.app/api/prepare-check-in";
    let outsideUKUrl = "https://airport-next-new.vercel.app/api/prepare-outside-uk";
    let nationalitiesUrl = "https://airport-next-new.vercel.app/api/prepare-identities";

    const [checkIns, setCheckIns] = useState<CheckIn[]>([]);
    const [outsides, setOutsides] = useState<OutsideUK[]>([]);
    const [nationalities, setNationalities] = useState<Nationality[]>([]);

    const getCheckIns = useCallback(async () => {
        const res = await fetch(checkInsUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setCheckIns(data.body);
    }, [checkInsUrl]);

    const getOutsides = useCallback(async () => {
        const res = await fetch(outsideUKUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setOutsides(data.body);
    }, [outsideUKUrl]);

    const getNationalities = useCallback(async () => {
        const res = await fetch(nationalitiesUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setNationalities(data.body);
    }, [nationalitiesUrl]);

    useEffect(() => {
        getCheckIns();
        getOutsides();
    }, [getCheckIns, getOutsides, getNationalities]);

    return (
        <div id="airportPrepare">
            <div className="airportPrepare-banner top-banner">
                <h1 className="heading-title">Travel formalities at Heathrow Airport</h1>
            </div>
            <h2 className="heading-subtitle">What are the essential documents for travel?</h2>
            <div className="cards">
                <div className="card-content card-boarding-pass cards-half-width">
                    <div className="card-image"></div>
                    <div className="card-content-text">
                        <h3 className="heading-content">Boarding pass</h3>
                        <p className="content-text">Boarding passes are issued directly by the airline at the check-in desk or the self-service check-in terminals at the airport, or when you check in online on the website of the airline.</p>
                        <a className="card-link btn" title="Boarding" href="##">Get boarding pass</a>
                    </div>
                </div>
                <div className="card-content card-vaccination cards-half-width">
                    <div className="card-image"></div>
                    <div className="card-content-text">
                        <h3 className="heading-content">Compulsory vaccination</h3>
                        <p className="content-text">Certain vaccinations may be required. Check the British Diplomatic website to view the health policy for your destination country. Please make sure you have your vaccination certificate ready.</p>
                        <a className="card-link btn" title="Vaccination status" href="##">Check vaccination conditions</a>
                    </div>
                </div>
            </div>
            <h2 className="heading-subtitle">What identity documents do I need to carry?</h2>
            <div className="cards cards-nationality">
                {
                    nationalities.map((nationality, index) => {
                        return (
                            <div className="card-content" key={index}>
                                <div className="card-image"></div>
                                <div className="card-content-text">
                                    <h3 className="heading-content">{nationality.title}</h3>
                                    <a className="card-link btn" title="Boarding" href="##">{nationality.urlText}</a>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <h2 className="heading-subtitle">I am traveling within the UK</h2>
            <div className="cards cards-travel-within">
                <div className="card-content cards-half-width">
                    <div className="card-image"></div>
                    <div className="card-content-text">
                        <h3 className="heading-content">Driving licenses</h3>
                        <p className="content-text">NOT ACCEPTED AS TRAVEL DOCUMENTS!</p>
                    </div>
                </div>
                <div className="card-content card-vaccination cards-half-width">
                    <div className="card-image"></div>
                    <div className="card-content-text">
                        <h3 className="heading-content">Your passport</h3>
                        <p className="content-text">THIS IS MANDATORY!</p>
                    </div>
                </div>
            </div>
            <h2 className="heading-subtitle">I am traveling outside the UK</h2>
            <div className="cards cards-nationality cards-outside-UK">
                {
                    outsides.map((outside, index) => {
                        return (
                            <div className="card-content" key={index}>
                                <div className="card-image"></div>
                                <div className="card-content-text">
                                    <h3 className="heading-content">{outside.title}</h3>
                                    <a className="card-link btn" title="Boarding" href="##">{outside.urlText}</a>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="prepare-check-in">
                <div>
                    {
                        checkIns.map((checkIn, index) => {
                            return (
                                <div key={index}>
                                    <h3 className="heading-subtitle">{checkIn.title}</h3>
                                    <p className="heading-content">{checkIn.content}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}