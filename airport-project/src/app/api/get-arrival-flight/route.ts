import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allArrivals } from "../../../../lib/search-arrivals/allArrivals";

export async function GET(request: NextRequest) {
    const flightNumber = request.nextUrl.searchParams.get("flightNumber");

    if (flightNumber === null) {
        return NextResponse.json(
            {},
            {
                status: 400
            },
        );
    }

    const flight = allArrivals.find((arrival) => {
        return flightNumber === arrival.airlineCode;
    });

    if (!flight) {
        return NextResponse.json(
            {},
            {
                status: 404
            },
        );
    } else {
        return NextResponse.json(
            { flight },
            {
                status: 200
            },
        );
    }

}

// https://airport-next-new.vercel.app/api/get-arrival-flight