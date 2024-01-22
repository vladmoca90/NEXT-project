/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import loadingImg from "../../../public/images/loading.gif";

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
    
    return (
        <LazyLoading searchParams={{
            surname: searchParams.surname,
            bookingCode: searchParams.bookingCode
        }} />
    );
}