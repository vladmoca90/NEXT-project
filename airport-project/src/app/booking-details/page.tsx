/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import loadingImg from "../../../public/images/loading.gif";
import { useState } from "react";
import { Booking } from "../../../lib/booking/booking";

const LazyLoading = dynamic(() => import("../booking-content/page"), {
    ssr: false,
    loading: () => <Image width={100} height={100} alt="Loading icon" className="loading-img" src={loadingImg} />
});

export default function BookingDetails({ searchParams }: {
    searchParams: {
        surname: string,
        bookingCode: string,
    }
}) {
    const [flightDetails] = useState<Booking>();

    if (!flightDetails) {
        return (
            <div className="booking-details--not-found">
                <h3>No booking could be found!</h3>
            </div>
        );
    } else {
        return (
            <LazyLoading searchParams={{
                surname: searchParams.surname,
                bookingCode: searchParams.bookingCode
            }} />
        );
    }
}