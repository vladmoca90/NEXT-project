"use client";
//import Image from "next/image";
//import loadingIcon from "./../../../public/images/loading.gif";
import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./../booking-details/page"));

export default function LazyLoading() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent searchParams={{
                    surname: "",
                    bookingCode: ""
                }} />
            </Suspense>
        </div>
    );
}