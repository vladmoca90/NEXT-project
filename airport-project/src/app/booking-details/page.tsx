/* eslint-disable @next/next/no-img-element */
"use client";
import dynamic from "next/dynamic";

const LazyLoading = dynamic(() => import("../booking-content/page"), {
    ssr: false,
});

export default function BookingDetails({ searchParams }: {
    searchParams: {
        surname: string,
        bookingCode: string,
    }
}) {
    return (
        <LazyLoading searchParams={{
            surname: searchParams.surname,
            bookingCode: searchParams.bookingCode
        }} />
    );
}