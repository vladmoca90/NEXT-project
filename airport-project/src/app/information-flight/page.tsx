"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Departure } from "../../../lib/departures/departure";
import { Arrival } from "../../../lib/arrivals/arrival";

export default function FlightInformation({ searchParams }: {
    searchParams: {
        flightNumber: string,
        flightType: "Departure" | "Arrival",
    }
}) {

    let departureFlightUrl = "https://airport-next-3ccx1ojiy-vladmoca90s-projects.vercel.app/api/get-departure-flight?flightNumber=" + searchParams.flightNumber;
    let arrivalFlightUrl = "https://airport-next-3ccx1ojiy-vladmoca90s-projects.vercel.app/api/get-arrival-flight?flightNumber=" + searchParams.flightNumber;

    const [departureFlight, setDepartureFlight] = useState<Departure>([] as any);
    const [arrivalFlight, setArrivalFlight] = useState<Arrival>([] as any);

    const getDepartureFlight = useCallback(async () => {
        const res = await fetch(departureFlightUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            console.log("The details are NOT valid!");
            return;
        } else {
            console.log("The details are valid!");
        }

        const data = await res.json();

        setDepartureFlight(data.flight);
    }, [departureFlightUrl]);

    const getArrivalFlight = useCallback(async () => {
        const res = await fetch(arrivalFlightUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            console.log("The details are NOT valid!");
            return;
        } else {
            console.log("The details are valid!");
        }

        const data = await res.json();

        setArrivalFlight(data.flight);
    }, [arrivalFlightUrl]);

    useEffect(() => {
        getDepartureFlight();
        getArrivalFlight();
    }, [getArrivalFlight, getDepartureFlight]);

    if (searchParams.flightType === "Departure") {
        return (
            <div className="flight-information">
                <div className="flight-information-banner top-banner">
                    <h1 className="heading-title">View your flight</h1>
                </div>
                <div className="flight-information-container">
                    <div>
                        <div className="flight-information-top">
                            <div className="flight-information-airline">
                                <div className="flight-information-tailfin">
                                    <Image width={100} height={100} className="airline-tailfin" alt={searchParams.flightNumber} src={departureFlight.airlineFin} />
                                    <span className="airline-code">{departureFlight.airlineCode}</span>
                                </div>
                                <div className="flight-information-name">
                                    <span>{departureFlight.airlineName}</span>
                                </div>
                            </div>
                            <div className="flight-information-status">
                                <span>{departureFlight.status}</span>
                                <span>{departureFlight.time}</span>
                            </div>
                        </div>
                        <div className="flight-information-middle">
                            <h3>Flight details</h3>
                            <div className="flight-information-route">
                                <div>
                                    <span>London</span>
                                    <span className="flight-arrow">
                                        <span className="arrow-right"></span>
                                    </span>
                                    <span>{departureFlight.destination}</span>
                                </div>
                            </div>
                            <div className="flight-information-middle-info">
                                <div>
                                    <span className="flight-information-label">Departure:</span> <span className="flight-information-value">{departureFlight.time}</span>
                                </div>
                                <div>
                                    <span className="flight-information-label">Terminal:</span> <span className="flight-information-value">{departureFlight.terminal}</span>
                                </div>
                                <div>
                                    <span className="flight-information-label">Check-in:</span> <span className="flight-information-value">{departureFlight.checkIn}</span>
                                </div>
                                <div>
                                    <span className="flight-information-label">Gate:</span> <span className="flight-information-value">{departureFlight.gate}</span>
                                </div>
                            </div>
                            <div className="flight-information-middle-button">
                                <Link className="btn" target="_blank" href="https://www.britishairways.com/travel/home/public/en_gb/">Contact the airline</Link>
                                <Link className="btn" target="_blank" href="https://www.flightradar24.com/data/flights">View flight map</Link>
                                <Link className="btn" target="_blank" href="/flights">View all flights</Link>
                            </div>
                        </div>
                        <div className="flight-information-bottom">
                            <p>This flight also operates under the following flight numbers under codeshare arrangements with various airlines.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flight-information">
                <div className="flight-information-banner top-banner">
                    <h1 className="heading-title">View your flight</h1>
                </div>
                <div className="flight-information-container">
                    <div>
                        <div className="flight-information-top">
                            <div className="flight-information-airline">
                                <div className="flight-information-tailfin">
                                    <Image width={100} height={100} className="airline-tailfin" alt={searchParams.flightNumber} src={arrivalFlight.airlineFin} />
                                    <span className="airline-code">{arrivalFlight.airlineCode}</span>
                                </div>
                                <div className="flight-information-name">
                                    <span>{arrivalFlight.airlineName}</span>
                                </div>
                            </div>
                            <div className="flight-information-status">
                                <span>{arrivalFlight.status}</span>
                                <span>{arrivalFlight.time}</span>
                            </div>
                        </div>
                        <div className="flight-information-middle">
                            <h3>Flight details</h3>
                            <div className="flight-information-route">
                                <div>
                                    <span>{arrivalFlight.origin}</span>
                                    <span className="flight-arrow">
                                        <span className="arrow-right"></span>
                                    </span>
                                    <span>London</span>
                                </div>
                            </div>
                            <div className="flight-information-middle-info">
                                <div>
                                    <span className="flight-information-label">Terminal:</span><span className="flight-information-value">{arrivalFlight.terminal}</span>
                                </div>
                                <div>
                                    <span className="flight-information-label">Belt:</span><span className="flight-information-value">{arrivalFlight.belt}</span>
                                </div>
                                <div>
                                    <span className="flight-information-label"></span>
                                </div>
                            </div>
                            <div className="flight-information-middle-button">
                                <Link className="btn" target="_blank" href="https://www.britishairways.com/travel/home/public/en_gb/">Contact the airline</Link>
                                <Link className="btn" target="_blank" href="https://www.flightradar24.com/data/flights">View flight map</Link>
                                <Link className="btn" target="_blank" href="/flights">View all flights</Link>
                            </div>
                        </div>
                        <div className="flight-information-bottom">
                            <p>This flight also operates under the following flight numbers under codeshare arrangements with various airlines.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}