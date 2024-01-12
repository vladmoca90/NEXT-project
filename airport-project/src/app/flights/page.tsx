/* eslint-disable @next/next/no-img-element */
"use client";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useCallback, useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { FlightStatus } from "../../../lib/departures/fligthStatus";
import { Departure } from "../../../lib/departures/departure";
import { Arrival } from "../../../lib/arrivals/arrival";

const getFlightStatusClassName = (status: FlightStatus) => {
    let flightStatusClass = "";

    switch (status) {
        case FlightStatus.onTime:
            flightStatusClass = "airline-status--onTime";
            break;

        case FlightStatus.delayed:
            flightStatusClass = "airline-status--delayed";
            break;

        case FlightStatus.cancelled:
            flightStatusClass = "airline-status--cancelled";
            break;
    }

    return `airline-status ${flightStatusClass}`;
}

const getFlightStatusFriendlyName = (status: FlightStatus) => {
    switch (status) {
        case FlightStatus.onTime:
            return "On time";

        case FlightStatus.delayed:
            return "Delayed";

        case FlightStatus.cancelled:
            return "Cancelled";

        default:
            return "Unknown";
    }
}

export default function AirportFlights() {
    let arrivalsUrl = "https://airport-next-new.vercel.app/api/arrivals";
    let departuresUrl = "https://airport-next-new.vercel.app/api/departures";

    const [departures, setDepartures] = useState<Departure[]>([]);
    const [arrivals, setArrivals] = useState<Arrival[]>([]);

    const getArrivals = useCallback(async () => {
        const res = await fetch(arrivalsUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setArrivals(data.body);
    }, [arrivalsUrl]);

    const getDepartures = useCallback(async () => {
        const res = await fetch(departuresUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setDepartures(data.body);
    }, [departuresUrl]);

    useEffect(() => {
        getArrivals();
        getDepartures();
    }, [getArrivals, getDepartures]);

    return (
        <div id="airportFlights">
            <div className="airportFlights-banner top-banner">
                <h1 className="heading-title">Check all Arrivals and Departures at Heathrow Airport</h1>
            </div>
            <div id="flightsTabs">
                <Tabs defaultActiveKey="Departures" id="uncontrolled-tab-example">
                    <Tab eventKey="Departures" title="Departures">
                        <Table className="table-main table">
                            <Thead className="table-header">
                                <Tr>
                                    <Th scope="col">Scheduled</Th>
                                    <Th scope="col">Flight</Th>
                                    <Th scope="col">Airline</Th>
                                    <Th scope="col">Destination</Th>
                                    <Th scope="col">Terminal</Th>
                                    <Th scope="col">Check-in</Th>
                                    <Th scope="col">Gate</Th>
                                    <Th scope="col">Status</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    departures.map((departure, index) => {
                                        return (
                                            <Tr key={index}>
                                                <Td className="airline-time">{departure.time}</Td>
                                                <Td className="airline-code-number"><img className="airline-tailfin" alt={departure.airlineName} src={departure.airlineFin} /> {departure.airlineCode}</Td>
                                                <Td className="airline-name">{departure.airlineName}</Td>
                                                <Td className="airline-destination">{departure.destination}</Td>
                                                <Td className="airline-terminal">{departure.terminal}</Td>
                                                <Td className="airline-check">{departure.checkIn}</Td>
                                                <Td className="airline-gate">{departure.gate}</Td>
                                                <Td className={getFlightStatusClassName(departure.status)}>{getFlightStatusFriendlyName(departure.status)}</Td>
                                            </Tr>
                                        );
                                    })
                                }
                            </Tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="Arrivals" title="Arrivals">
                        <Table className="table-main table">
                            <Thead className="table-header">
                                <Tr>
                                    <Th scope="col">Scheduled</Th>
                                    <Th scope="col">Flight</Th>
                                    <Th scope="col">Airline</Th>
                                    <Th scope="col">Origin</Th>
                                    <Th scope="col">Terminal</Th>
                                    <Th scope="col">Belt</Th>
                                    <Th scope="col">Status</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    arrivals.map((arrival, index) => {
                                        return (
                                            <Tr key={index}>
                                                <Td className="airline-time">{arrival.time}</Td>
                                                <Td className="airline-code-number"><img className="airline-tailfin" alt={arrival.airlineName} src={arrival.airlineFin} /> {arrival.airlineCode}</Td>
                                                <Td className="airline-name">{arrival.airlineName}</Td>
                                                <Td className="airline-destination">{arrival.origin}</Td>
                                                <Td className="airline-terminal">{arrival.terminal}</Td>
                                                <Td className="airline-gate">{arrival.belt}</Td>
                                                <Td className={getFlightStatusClassName(arrival.status)}>{getFlightStatusFriendlyName(arrival.status)}</Td>
                                            </Tr>
                                        );
                                    })
                                }
                            </Tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}