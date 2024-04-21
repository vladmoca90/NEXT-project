import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { allAirlines } from "../../../../lib/searchAirlines/allAirlines";
import { allDepartures } from "../../../../lib/searchDepartures/allDepartures";
import { allArrivals } from "../../../../lib/searchArrivals/allArrivals";
import { AirlineOrFlight } from "../../../../lib/airlineOrFlight/airlineOrFlight";

export async function GET(request: NextRequest) {
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

    const noAirlineFinAndName: AirlineOrFlight[] = airlines.map((airline) => {
        return {
            airlineFin: "",
            flightType: undefined,
            name: "",
            type: "No airline or flight",
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

    const noDepartureFinAndName: AirlineOrFlight[] = departures.map((departure) => {
        return {
            airlineFin: "",
            flightType: "Departure",
            name: "",
            type: "No airline or flight",
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

    const noArrivalFinAndName: AirlineOrFlight[] = arrivals.map((arrival) => {
        return {
            airlineFin: "",
            flightType: "Arrival",
            name: "",
            type: "No airline or flight",
        };
    });

    const airlineOrNoAirline = airlineFinAndName.concat(noAirlineFinAndName);
    const departureOrNoDeparture = departureFinAndName.concat(noDepartureFinAndName);
    const arrivalOrNoArrival = arrivalFinAndName.concat(noArrivalFinAndName);

    const flightAndAirlinesList = airlineOrNoAirline.concat(departureOrNoDeparture);
    const flightAndAirlinesListTotal = flightAndAirlinesList.concat(arrivalOrNoArrival);


    //const flightAndAirlinesListTotal = flightAndAirlinesList.concat(arrivalFinAndName);

    return NextResponse.json(
        {
            result: flightAndAirlinesListTotal,
        },
        {
            status: 200
        },
    );
}