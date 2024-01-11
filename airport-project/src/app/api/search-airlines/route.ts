import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allAirlines } from "../../../../lib/search-airlines/allAirlines";
import { allDepartures } from "../../../../lib/search-departures/allDepartures";
import { allArrivals } from "../../../../lib/search-arrivals/allArrivals";
import { AirlineOrFlight } from "../../../../lib/airlineOrFlight/airlineOrFlight";

export function GET(request: NextRequest) {
    const text = request.nextUrl.searchParams.get("text");

    if (text === null || text.length < 2) {
        return NextResponse.json(
            {},
            {
                status: 400
            },
        );
    }

    const airlines = allAirlines.filter((airline) => {
        return airline.name.toLowerCase().startsWith(text.toLowerCase());
    });

    const airlineFinAndName: AirlineOrFlight[] = airlines.map((airline) => {
        return {
            airlineFin: airline.fin,
            flightType: undefined,
            name: airline.name,
            type: "Airline",
        };
    });

    const departures = allDepartures.filter((departure) => {
        return departure.airlineCode.toLowerCase().startsWith(text.toLowerCase());
    });

    const departureFinAndName: AirlineOrFlight[] = departures.map((departure) => {
        return {
            airlineFin: departure.airlineFin,
            flightType: "Departure",
            name: departure.airlineCode,
            type: "Flight",
        };
    });

    const arrivals = allArrivals.filter((arrival) => {
        return arrival.airlineCode.toLowerCase().startsWith(text.toLowerCase());
    });

    const arrivalFinAndName: AirlineOrFlight[] = arrivals.map((arrival) => {
        return {
            airlineFin: arrival.airlineFin,
            flightType: "Arrival",
            name: arrival.airlineCode,
            type: "Flight",
        };
    });

    const flightAndAirlinesList = airlineFinAndName.concat(departureFinAndName);

    const flightAndAirlinesListTotal = flightAndAirlinesList.concat(arrivalFinAndName);

    console.log(flightAndAirlinesListTotal);

    return NextResponse.json(
        {
            result: flightAndAirlinesListTotal,
        },
        {
            status: 200
        },
    );
}
