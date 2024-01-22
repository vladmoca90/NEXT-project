"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import loadingImg from "../../../public/images/loading.gif";
import { useCallback, useEffect, useState } from "react";
import { Booking } from "../../../lib/booking/booking";

const bookingsUrl = "https://airport-next-new.vercel.app/api/bookings";

const LazyLoading = dynamic(() => import("../booking-not-found/page"), {
    ssr: false,
    loading: () => <Image width={100} height={100} alt="Loading icon" className="loading-img" src={loadingImg} />
});

export default function BookingDetails({ searchParams }: {
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
            <LazyLoading />
        );
    } else {
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
    }
}