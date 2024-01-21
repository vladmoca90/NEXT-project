/* eslint-disable @next/next/no-img-element */
"use client";
import { Suspense, lazy } from "react";
import BookingContent from "../booking-content/page";
import LazyLoading from "../lazyLoading";

const bookingsUrl = "https://airport-next-new.vercel.app/api/bookings";

const Loading = lazy(() => delayForDemo(import("../lazyLoading")));

export default function BookingDetails() {
    return (
        <Suspense fallback={<LazyLoading />}>
            <BookingContent searchParams={{
                surname: "",
                bookingCode: ""
            }} />
        </Suspense>
    );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise: Promise<typeof import("../lazyLoading")>) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}