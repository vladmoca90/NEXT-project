/* eslint-disable @next/next/no-img-element */
"use client";
import dynamic from "next/dynamic";

const DynamicHeavyComponent = dynamic(() => import("../booking-content/page"), {
    ssr: false,
    loading: () => <div>Loading...</div>
});

export default function BookingDetails({ searchParams }: {
    searchParams: {
        surname: string,
        bookingCode: string,
    }
}) {
    return (
        <DynamicHeavyComponent searchParams={{
            surname: searchParams.surname,
            bookingCode: searchParams.bookingCode
        }} />
    );
}