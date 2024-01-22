/* eslint-disable @next/next/no-img-element */
"use client";
import { useCallback, useEffect, useState } from "react";
import { Booking } from "../../../lib/booking/booking";
import { redirect } from "next/navigation";

const bookingsUrl = "https://airport-next-new.vercel.app/api/bookings";

export default function BookingContent({ searchParams }: {
    searchParams: {
        surname: string,
        bookingCode: string,
    }
}) {
    const [flightDetails, setFlightDetails] = useState<Booking>();

    const getBookingData = useCallback(async () => {
        const res = await fetch(bookingsUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "surname": searchParams.surname,
                "bookingCode": searchParams.bookingCode,
            }),
        })

        if (!res.ok) {
            console.log("The details are NOT valid!");
            return;
        } else {
            console.log("The details are valid!");
        }

        const data = await res.json();

        setFlightDetails(data.body);
    }, [searchParams.bookingCode, searchParams.surname]);

    useEffect(() => {
        getBookingData();
    }, [getBookingData]);

    if (!flightDetails) {
        return (
            <div className="booking-details--found">
                <span className="booking-details-title">Your ticket itinerary</span>
                <div className="booking-details--not-found">
                    <h3>No booking could be found!</h3>
                </div>
                <div className="booking-details-top">
                    <span className="booking-surname">{searchParams.surname}</span>
                    <span className="booking-code">{searchParams.bookingCode}</span>
                </div>
                <div className="booking-details-middle">
                    <span><span className="booking-label">Ticket number: </span>-</span>
                    <span><span className="booking-label">Time: </span>-</span>
                    <span><span className="booking-label">Airline: </span>-</span>
                    <span>
                        <span className="booking-label">Airline Number:</span>
                        <span className="booking-airline">
                            -
                        </span>
                    </span>
                    <span><span className="booking-label">Destination: </span>-</span>
                </div>
                <div className="booking-details-bottom">
                    <span><span className="booking-label">Terminal: </span>-</span>
                    <span><span className="booking-label">Seat: </span>-</span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="booking-details--found">
                <span className="booking-details-title">Your ticket itinerary</span>
                <div className="booking-details-top">
                    <span className="booking-surname">{searchParams.surname}</span>
                    <span className="booking-code">{searchParams.bookingCode}</span>
                </div>
                <div className="booking-details-middle">
                    <span><span className="booking-label">Ticket number: </span>{flightDetails.flightDetails.ticketNumber}</span>
                    <span><span className="booking-label">Time: </span>{flightDetails.flightDetails.time}</span>
                    <span><span className="booking-label">Airline: </span>{flightDetails.flightDetails.airlineName}</span>
                    <span>
                        <span className="booking-label">Airline Number:</span>
                        <span className="booking-airline">
                            <img className="booking-tailfin" alt={flightDetails.flightDetails.airlineName} src={flightDetails.flightDetails.airlineFin} />
                            {flightDetails.flightDetails.airlineNumber}
                        </span>
                    </span>
                    <span><span className="booking-label">Destination: </span>{flightDetails.flightDetails.destination}</span>
                </div>
                <div className="booking-details-bottom">
                    <span><span className="booking-label">Terminal: </span>{flightDetails.flightDetails.terminal}</span>
                    <span><span className="booking-label">Seat: </span>{flightDetails.flightDetails.seat}</span>
                </div>
            </div>
        );
    }
}