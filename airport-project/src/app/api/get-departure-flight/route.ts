import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allDepartures } from "../../../../lib/search-departures/allDepartures";

export function GET(request: NextRequest) {
    const flightNumber = request.nextUrl.searchParams.get("flightNumber");

    if (flightNumber === null) {
        return NextResponse.json(
            {},
            {
                status: 400
            },
        );
    }

    const flight = allDepartures.find((departure) => {
        return flightNumber === departure.airlineCode;
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

// http://localhost:3000/api/get-departure-flight