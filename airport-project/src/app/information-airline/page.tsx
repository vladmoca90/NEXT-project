/* eslint-disable @next/next/no-img-element */
"use client";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { useCallback, useEffect, useState } from "react";
import { Departure } from "../../../lib/searchDepartures/departure";
import { Arrival } from "../../../lib/searchArrivals/arrival";
import { FlightStatus } from "../../../lib/searchDepartures/flightStatus";

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

        case FlightStatus.cancelled:
        flightStatusClass = "airline-status--notAvailable";
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

            case FlightStatus.notAvailable:
                return "N/A";

        default:
            return "Unknown";
    }
}

export default function AirlineInformation({ searchParams }: {
    searchParams: {
        airlineName: string,
    }
}) {

    let departureAirlinesUrl = "https://airport-next-new.vercel.app/api/get-departure-flights-by-airline?airlineName=" + searchParams.airlineName;
    let arrivalAirlinesUrl = "https://airport-next-new.vercel.app/api/get-arrival-flights-by-airline?airlineName=" + searchParams.airlineName;

    const [departureAirlines, setDepartureAirlines] = useState<Departure[]>([]);
    const [arrivalAirlines, setArrivalAirlines] = useState<Arrival[]>([]);

    const getDepartureAirlines = useCallback(async () => {
        const res = await fetch(departureAirlinesUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setDepartureAirlines(data);
    }, [departureAirlinesUrl]);

    const getArrivalAirlines = useCallback(async () => {
        const res = await fetch(arrivalAirlinesUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setArrivalAirlines(data);
    }, [arrivalAirlinesUrl]);

    useEffect(() => {
        getDepartureAirlines();
        getArrivalAirlines();
    }, [getArrivalAirlines, getDepartureAirlines]);

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
                                    departureAirlines.map((departureAirline, index) => {
                                        return (
                                            <Tr key={index}>
                                                <Td className="airline-time">{departureAirline.time}</Td>
                                                <Td className="airline-code-number"><img className="airline-tailfin" alt={searchParams.airlineName} src={departureAirline.airlineFin} />{departureAirline.airlineCode}</Td>
                                                <Td className="airline-name">{searchParams.airlineName}</Td>
                                                <Td className="airline-destination">{departureAirline.destination}</Td>
                                                <Td className="airline-terminal">{departureAirline.terminal}</Td>
                                                <Td className="airline-check">{departureAirline.checkIn}</Td>
                                                <Td className="airline-gate">{departureAirline.gate}</Td>
                                                <Td className={getFlightStatusClassName(departureAirline.status)}>{getFlightStatusFriendlyName(departureAirline.status)}</Td>
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
                                    arrivalAirlines.map((arrivalAirline, index) => {
                                        return (
                                            <Tr key={index}>
                                                <Td className="airline-time">{arrivalAirline.time}</Td>
                                                <Td className="airline-code-number"><img className="airline-tailfin" alt={searchParams.airlineName} src={arrivalAirline.airlineFin} />{arrivalAirline.airlineCode}</Td>
                                                <Td className="airline-name">{searchParams.airlineName}</Td>
                                                <Td className="airline-destination">{arrivalAirline.origin}</Td>
                                                <Td className="airline-terminal">{arrivalAirline.terminal}</Td>
                                                <Td className="airline-gate">{arrivalAirline.belt}</Td>
                                                <Td className={getFlightStatusClassName(arrivalAirline.status)}>{getFlightStatusFriendlyName(arrivalAirline.status)}</Td>
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