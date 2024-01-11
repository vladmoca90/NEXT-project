import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allDepartures } from "../../../../lib/search-departures/allDepartures";
import { FlightStatus } from "../../../../lib/search-departures/flightStatus";

export function GET(request: NextRequest) {
    const airlineName = request.nextUrl.searchParams.get("airlineName");
    const noFlights = [
        {
            time: "N/A",
            airlineCode: "N/A",
            airlineFin: "/images/NA-tailfin.jpg",
            airlineName: "N/A",
            destination: "N/A",
            terminal: "N/A",
            checkIn: "N/A",
            gate: "N/A",
            status: FlightStatus.notAvailable,
        },
    ];

    if (!airlineName) {
        return NextResponse.json(
            null,
            {
                status: 400
            },
        );
    }

    const flights = allDepartures.filter((departure) => {
        return airlineName === departure.airlineName;
    });

    if (flights.length === 0) {
        return NextResponse.json(
            noFlights,
            {
                status: 404
            },
        );
    } else {
        return NextResponse.json(
            flights,
            {
                status: 200
            },
        );
    }

}

// http://localhost:3000/api/get-departure-flights-by-airline