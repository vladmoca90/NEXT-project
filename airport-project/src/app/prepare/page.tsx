"use client";
import { useCallback, useEffect, useState } from "react";
import { CheckIn } from "../../../lib/prepareCheckIn/checkIn";

export default function AirportPrepare() {
    let checkInsUrl = "https://airport-next-new.vercel.app/api/prepare-check-in";

    const [checkIns, setCheckIns] = useState<CheckIn[]>([]);

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

    useEffect(() => {
        getCheckIns();
    }, [getCheckIns]);

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
                <div className="card-content">
                    <div className="card-image"></div>
                    <div className="card-content-text">
                        <h3 className="heading-content">I am British</h3>
                        <a className="card-link btn" title="Boarding" href="##">Check requirements</a>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-image"></div>
                    <div className="card-content-text">
                        <h3 className="heading-content">I am an Irish national</h3>
                        <a className="card-link btn" title="Boarding" href="##">Check requirements</a>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-image"></div>
                    <div className="card-content-text">
                        <h3 className="heading-content">Other nationalities</h3>
                        <a className="card-link btn" title="Boarding" href="##">Check requirements</a>
                    </div>
                </div>
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
                <div className="card-content">
                    <div className="card-image"></div>
                    <div className="card-content-text">
                        <h3 className="heading-content">Check-in procedures</h3>
                        <a className="card-link btn" title="Boarding" href="##">Check requirements</a>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-image"></div>
                    <div className="card-content-text">
                        <h3 className="heading-content">Check visa requirements</h3>
                        <a className="card-link btn" title="Boarding" href="##">Check requirements</a>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-image"></div>
                    <div className="card-content-text">
                        <h3 className="heading-content">For non-British legal residents</h3>
                        <a className="card-link btn" title="Boarding" href="##">Check requirements</a>
                    </div>
                </div>
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