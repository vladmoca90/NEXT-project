/* eslint-disable @next/next/no-img-element */
"use client";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import BookingContent from "../booking-content/page";
import { Booking } from "../../../lib/booking/booking";

const bookingsUrl = "https://airport-next-new.vercel.app/api/bookings";

const DynamicHeavyComponent = dynamic(() => import("../booking-content/page"), {
    ssr: false,
    loading: () => <p>Loading...</p>
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
    
    return (
        <BookingContent searchParams={{
            surname: searchParams.surname,
            bookingCode: searchParams.bookingCode
        }} />
    );
}