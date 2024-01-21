"use client";
import Image from "next/image";
import loadingIcon from "./../../../public/images/loading.gif";
import React, { Suspense } from "react";
import BookingDetails from "./../booking-details/page";

const loading = <Image width={100} height={100} src={loadingIcon} alt="loading" />;

export default function LazyLoading() {
    return (
        <div>
            <Suspense fallback={loading}>
                <BookingDetails searchParams={{
                    surname: "",
                    bookingCode: ""
                }} />
            </Suspense>
        </div>
    );
}