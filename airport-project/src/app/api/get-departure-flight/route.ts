import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allDepartures } from "../../../../lib/searchDepartures/allDepartures";

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

// https://airport-next-new.vercel.app/api/get-departure-flight