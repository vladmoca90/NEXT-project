/* eslint-disable @next/next/no-img-element */
"use client";
import BookingContent from "../booking-content/page";

export default function BookingDetails() {
        return (
            <BookingContent searchParams={{
                surname: "",
                bookingCode: ""
            }} />
        );
}